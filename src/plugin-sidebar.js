/**
 * WordPress dependencies
 */
import { Button, __experimentalSpacer as Spacer } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar, PluginSidebarMoreMenuItem, store as editorStore } from '@wordpress/editor';
import { useEntityRecords, store as coreStore } from '@wordpress/core-data';
import { store as noticesStore } from '@wordpress/notices';
import { commentEditLink } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import { cleanEmptyObject, flattenBlocks } from './utils';

const NotesDataGeneratorPluginSidebar = () => {
	const [ isDeletingNotes, setIsDeletingNotes ] = useState( false );
	const { createNotice } = useDispatch( noticesStore );
	const { deleteEntityRecord } = useDispatch( coreStore );
	const { updateBlockAttributes } = useDispatch( blockEditorStore );
	const { postId, postType, blocks, getBlockAttributes } = useSelect( ( select ) => {
		const { getCurrentPostId, getCurrentPostType } = select( editorStore );
		return {
			postId: getCurrentPostId(),
			postType: getCurrentPostType(),
			blocks: select( blockEditorStore ).getBlocks(),
			getBlockAttributes: select( blockEditorStore ).getBlockAttributes,
		};
	}, [] );

	const { records: notes } = useEntityRecords(
		'root',
		'comment',
		{
			post: postId,
			type: 'note',
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

	const deleteAllNotes = async () => {
		setIsDeletingNotes( true );
		try {
			const flatBlocks = flattenBlocks( blocks );
			if ( flatBlocks.length > 0 ) {
				const clientIds = flatBlocks.map( ( block ) => block.clientId );
				const newAttributes = {};
				clientIds.forEach( ( clientId ) => {
					const attributes = getBlockAttributes( clientId );
					newAttributes[ clientId ] = {
						...attributes,
						blockCommentId: undefined,
						metadata: cleanEmptyObject( {
							...attributes?.metadata,
							commentId: undefined,
						} ),
					};
				} );
				updateBlockAttributes( clientIds, newAttributes, {
					uniqueByBlock: true,
				} );
			}
			await Promise.all(
				notes.map( ( note ) =>
					deleteEntityRecord( 'root', 'comment', note.id, { force: true }, { throwOnError: true } )
				)
			);
			createNotice( 'success', 'All block notes deleted successfully.', {
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
			setIsDeletingNotes( false );
		}
	};

	return (
		<>
			<PluginSidebarMoreMenuItem target="notes-data-generator" icon={ commentEditLink }>
				Notes Data Generator
			</PluginSidebarMoreMenuItem>
			<PluginSidebar
				icon={ commentEditLink }
				title="Notes Data Generator"
				name="notes-data-generator"
			>
				<Spacer padding={ 4 }>
					<p>Permanently delete all notes from current post.</p>
					<Button
						__next40pxDefaultSize
						accessibleWhenDisabled
						variant="primary"
						disabled={ isDeletingNotes || ! notes?.length }
						isBusy={ isDeletingNotes }
						onClick={ deleteAllNotes }
					>
						Delete all notes
					</Button>
				</Spacer>
			</PluginSidebar>
		</>
	);
};

registerPlugin( 'notes-data-generator', {
	render: NotesDataGeneratorPluginSidebar,
} );
