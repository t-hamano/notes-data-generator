/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import {
	PanelBody,
	Button,
	Spinner,
	RangeControl,
	Notice,
	__experimentalSpacer as Spacer,
} from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { InspectorControls, store as blockEditorStore } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar, PluginSidebarMoreMenuItem, store as editorStore } from '@wordpress/editor';
import { useEntityRecords, store as coreStore } from '@wordpress/core-data';
import { store as noticesStore } from '@wordpress/notices';
import { isUnmodifiedDefaultBlock } from '@wordpress/blocks';
import { commentEditLink } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import { COMMENT_CONTENT_STRINGS } from './utils';

function flattenBlocks( blocks ) {
	const result = [];
	blocks.forEach( ( block ) => {
		result.push( block );
		result.push( ...flattenBlocks( block.innerBlocks ) );
	} );
	return result;
}

const withBlockCommentingDataGeneratorControl = ( BlockEdit ) => ( props ) => {
	const { attributes, setAttributes, clientId } = props;
	const { blockCommentId } = attributes;
	const [ numberOfComments, setNumberOfComments ] = useState( 10 );
	const [ oldestCommentDays, setOldestCommentDays ] = useState( 30 );
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
			.slice( 0, numberOfComments );
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
				setAttributes( { blockCommentId: undefined } );
			}

			const randomDates = Array.from(
				{ length: numberOfComments },
				() => new Date( Date.now() - Math.random() * oldestCommentDays * 24 * 60 * 60 * 1000 )
			);
			randomDates.sort( ( a, b ) => a.getTime() - b.getTime() );

			const [ firstUserId, ...restUserIds ] = randomizedTestUserIds;
			const firstComment = await saveEntityRecord(
				'root',
				'comment',
				{
					post: postId,
					content:
						COMMENT_CONTENT_STRINGS[ Math.floor( Math.random() * COMMENT_CONTENT_STRINGS.length ) ],
					comment_type: 'block_comment',
					comment_approved: 0,
					author: firstUserId,
					date: randomDates[ 0 ].toISOString(),
				},
				{ throwOnError: true }
			);
			setAttributes( { blockCommentId: firstComment.id } );

			await Promise.all(
				restUserIds.map( ( userId, index ) => {
					const commentContent =
						COMMENT_CONTENT_STRINGS[ Math.floor( Math.random() * COMMENT_CONTENT_STRINGS.length ) ];
					return saveEntityRecord(
						'root',
						'comment',
						{
							post: postId,
							content: commentContent,
							comment_type: 'block_comment',
							comment_approved: 0,
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
					: 'An error occurred while performing adding comments.';
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
									Note: Generating new comments will delete all existing comment.
								</Notice>
							</Spacer>
							<RangeControl
								__next40pxDefaultSize
								__nextHasNoMarginBottom
								label="Number of Comments"
								value={ numberOfComments }
								onChange={ setNumberOfComments }
								min={ 1 }
								max={ 100 }
								help="The number of comments to generate."
							/>
							<RangeControl
								__next40pxDefaultSize
								__nextHasNoMarginBottom
								label="Days back for oldest comment"
								value={ oldestCommentDays }
								onChange={ setOldestCommentDays }
								min={ 1 }
								max={ 700 }
								help="Comments will be generated between the selected date and today."
							/>
							<Button
								accessibleWhenDisabled
								isBusy={ isGeneratingComments }
								variant="primary"
								__next40pxDefaultSize
								disabled={ isGeneratingComments }
								onClick={ generateComments }
							>
								Generate Comments
							</Button>
						</>
					) }
				</PanelBody>
			</InspectorControls>
		</>
	);
};

addFilter(
	'editor.BlockEdit',
	'block-commenting-data-generator',
	withBlockCommentingDataGeneratorControl
);

const BlockCommentingDataGeneratorPluginSidebar = () => {
	const [ isDeletingComments, setIsDeletingComments ] = useState( false );
	const { createNotice } = useDispatch( noticesStore );
	const { deleteEntityRecord } = useDispatch( coreStore );
	const { updateBlockAttributes } = useDispatch( blockEditorStore );
	const { postId, postType, blocks } = useSelect( ( select ) => {
		const { getCurrentPostId, getCurrentPostType } = select( editorStore );
		const { getBlocks } = select( blockEditorStore );

		return {
			postId: getCurrentPostId(),
			postType: getCurrentPostType(),
			blocks: getBlocks(),
		};
	}, [] );

	const { records: comments } = useEntityRecords(
		'root',
		'comment',
		{
			post: postId,
			type: 'block_comment',
			status: 'all',
			per_page: -1,
		},
		{
			enabled: !! postId && typeof postId === 'number',
		}
	);

	if ( ! postId || ! postType || ( postType !== 'post' && postType !== 'page' ) ) {
		return null;
	}

	const deleteAllComments = async () => {
		setIsDeletingComments( true );
		try {
			const flatBlocks = flattenBlocks( blocks );
			if ( flatBlocks.length > 0 ) {
				const clientIds = flatBlocks.map( ( block ) => block.clientId );
				updateBlockAttributes( clientIds, {
					blockCommentId: undefined,
				} );
			}
			await Promise.all(
				comments.map( ( comment ) =>
					deleteEntityRecord(
						'root',
						'comment',
						comment.id,
						{ force: true },
						{ throwOnError: true }
					)
				)
			);
			createNotice( 'success', 'All block comments deleted successfully.', {
				type: 'snackbar',
				isDismissible: true,
			} );
		} catch ( error ) {
			const errorMessage =
				error.message && error.code !== 'unknown_error'
					? error.message
					: 'An error occurred while performing adding comments.';
			createNotice( 'error', errorMessage, {
				type: 'snackbar',
				isDismissible: true,
			} );
		} finally {
			setIsDeletingComments( false );
		}
	};

	return (
		<>
			<PluginSidebarMoreMenuItem target="block-commenting-data-generator" icon={ commentEditLink }>
				Block Commenting Data Generator
			</PluginSidebarMoreMenuItem>
			<PluginSidebar
				icon={ commentEditLink }
				title="Block Commenting Data Generator"
				name="block-commenting-data-generator"
			>
				<Spacer padding={ 4 }>
					<p>Permanently delete all block comments from current post.</p>
					<Button
						__next40pxDefaultSize
						accessibleWhenDisabled
						variant="primary"
						disabled={ isDeletingComments || ! comments?.length }
						isBusy={ isDeletingComments }
						onClick={ deleteAllComments }
					>
						Delete all block comments
					</Button>
				</Spacer>
			</PluginSidebar>
		</>
	);
};

registerPlugin( 'block-commenting-data-generator', {
	render: BlockCommentingDataGeneratorPluginSidebar,
} );
