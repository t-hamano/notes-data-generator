/**
 * WordPress dependencies
 */
import { addFilter, hasFilter } from '@wordpress/hooks';
import {
	PanelBody,
	Button,
	Spinner,
	RangeControl,
	Notice,
	__experimentalSpacer as Spacer,
} from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { InspectorControls } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { store as editorStore } from '@wordpress/editor';
import { store as coreStore } from '@wordpress/core-data';
import { store as noticesStore } from '@wordpress/notices';
import { isUnmodifiedDefaultBlock } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { NOTES_CONTENT_STRINGS, cleanEmptyObject } from './utils';

const withNotesDataGeneratorControl = ( BlockEdit ) => ( props ) => {
	const { attributes, setAttributes, clientId } = props;
	const { blockCommentId } = attributes;
	const [ numberOfNotes, setNumberOfNotes ] = useState( 10 );
	const [ oldestNoteDays, setOldestNoteDays ] = useState( 30 );
	const [ isGeneratingComments, setIsGeneratingComments ] = useState( false );
	const { saveEntityRecord, deleteEntityRecord } = useDispatch( coreStore );
	const { createNotice } = useDispatch( noticesStore );

	const { postId, postType, users, isLoadingUsers } = useSelect( ( select ) => {
		const { getCurrentPostId, getCurrentPostType } = select( editorStore );
		const { getUsers, isResolving } = select( coreStore );
		const query = {
			who: 'authors',
			per_page: -1,
			_fields: 'id,slug',
			context: 'view',
		};
		return {
			postId: getCurrentPostId(),
			postType: getCurrentPostType(),
			users: getUsers( query ),
			isLoadingUsers: isResolving( 'getUsers', [ query ] ),
		};
	}, [] );

	if (
		! postId ||
		! postType ||
		( postType !== 'post' && postType !== 'page' ) ||
		! users?.length ||
		isUnmodifiedDefaultBlock( clientId )
	) {
		return <BlockEdit { ...props } />;
	}

	const testUserIds = users
		.filter( ( user ) => user.slug.startsWith( 'test_user_' ) )
		.map( ( user ) => user.id );

	if ( ! testUserIds.length ) {
		return <BlockEdit { ...props } />;
	}

	const generateComments = async () => {
		setIsGeneratingComments( true );
		const randomizedTestUserIds = [ ...testUserIds ]
			.sort( () => Math.random() - 0.5 )
			.slice( 0, numberOfNotes );
		try {
			if ( blockCommentId ) {
				await deleteEntityRecord(
					'root',
					'comment',
					blockCommentId,
					{ force: true },
					{
						throwOnError: true,
					}
				);

				setAttributes( {
					blockCommentId: undefined,
					metadata: cleanEmptyObject( {
						...attributes?.metadata,
						commentId: undefined,
					} ),
				} );
			}

			const randomDates = Array.from(
				{ length: numberOfNotes },
				() => new Date( Date.now() - Math.random() * oldestNoteDays * 24 * 60 * 60 * 1000 )
			);
			randomDates.sort( ( a, b ) => a.getTime() - b.getTime() );

			const [ firstUserId, ...restUserIds ] = randomizedTestUserIds;
			const firstComment = await saveEntityRecord(
				'root',
				'comment',
				{
					post: postId,
					content:
						NOTES_CONTENT_STRINGS[ Math.floor( Math.random() * NOTES_CONTENT_STRINGS.length ) ],
					type: 'note',
					status: 'hold',
					author: firstUserId,
					date: randomDates[ 0 ].toISOString(),
				},
				{ throwOnError: true }
			);

			if ( hasFilter( 'blocks.registerBlockType', 'block-comment/modify-core-block-attributes' ) ) {
				setAttributes( { blockCommentId: firstComment.id } );
			} else {
				setAttributes( {
					metadata: {
						...attributes?.metadata,
						commentId: firstComment.id,
					},
				} );
			}

			await Promise.all(
				restUserIds.map( ( userId, index ) => {
					const noteContent =
						NOTES_CONTENT_STRINGS[ Math.floor( Math.random() * NOTES_CONTENT_STRINGS.length ) ];
					return saveEntityRecord(
						'root',
						'comment',
						{
							post: postId,
							content: noteContent,
							type: 'note',
							status: 'hold',
							author: userId,
							parent: firstComment.id,
							date: randomDates[ index + 1 ].toISOString(),
						},
						{ throwOnError: true }
					);
				} )
			);

			createNotice( 'success', 'Comments generated successfully.', {
				type: 'snackbar',
				isDismissible: true,
			} );
		} catch ( error ) {
			const errorMessage =
				error.message && error.code !== 'unknown_error'
					? error.message
					: 'An error occurred while performing adding notes.';
			createNotice( 'error', errorMessage, {
				type: 'snackbar',
				isDismissible: true,
			} );
		} finally {
			setIsGeneratingComments( false );
		}
	};

	return (
		<>
			<BlockEdit { ...props } />
			<InspectorControls>
				<PanelBody title="Block Comment">
					{ isLoadingUsers ? (
						<Spinner />
					) : (
						<>
							<Spacer marginBottom={ 4 }>
								<Notice status="warning" isDismissible={ false }>
									Note: Generating new notes will delete all existing note.
								</Notice>
							</Spacer>
							<RangeControl
								__next40pxDefaultSize
								__nextHasNoMarginBottom
								label="Number of Notes"
								value={ numberOfNotes }
								onChange={ setNumberOfNotes }
								min={ 1 }
								max={ 30 }
								help="The number of notes to generate."
							/>
							<RangeControl
								__next40pxDefaultSize
								__nextHasNoMarginBottom
								label="Days back for oldest note"
								value={ oldestNoteDays }
								onChange={ setOldestNoteDays }
								min={ 1 }
								max={ 700 }
								help="Notes will be generated between the selected date and today."
							/>
							<Button
								accessibleWhenDisabled
								isBusy={ isGeneratingComments }
								variant="primary"
								__next40pxDefaultSize
								disabled={ isGeneratingComments }
								onClick={ generateComments }
							>
								Generate Notes
							</Button>
						</>
					) }
				</PanelBody>
			</InspectorControls>
		</>
	);
};

addFilter( 'editor.BlockEdit', 'notes-data-generator', withNotesDataGeneratorControl );
