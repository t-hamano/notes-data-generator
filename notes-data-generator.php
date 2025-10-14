<?php
/**
 * Plugin Name: Notes Data Generator
 * Description: Activating this plugin will create 100 test users for testing the block-level commenting feature.
 * Requires at least: 6.8
 * Requires PHP: 8.3
 * Version: 0.2.0
 * Author: Aki Hamano
 * Author URI: https://github.com/t-hamano
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 *
 * @author Aki Hamano
 * @license GPL-2.0+
 */

defined( 'ABSPATH' ) || exit;

/**
 * Create 100 test users when the plugin is activated.
 */
function notes_data_generator_activate() {
	$created_count = 0;

	for ( $i = 1; $i <= 100; $i++ ) {
		$index    = str_pad( $i, 3, '0', STR_PAD_LEFT );
		$username = 'test_user_' . $index;
		$email    = 'test' . $index . '@example.com';

		if ( username_exists( $username ) || email_exists( $email ) ) {
			continue;
		}

		$user_id = wp_create_user( $username, 'password', $email );

		if ( ! is_wp_error( $user_id ) ) {
			++$created_count;
			update_user_meta( $user_id, 'notes_data_generator_generated_user', '1' );
			wp_update_user(
				array(
					'ID'           => $user_id,
					'first_name'   => 'Test User',
					'last_name'    => $index,
					'display_name' => 'Test User ' . $index,
					'role'         => 'editor',
				)
			);
		}
	}
	set_transient( 'notes_data_generator_activation_notice', $created_count, 60 );
}
register_activation_hook( __FILE__, 'notes_data_generator_activate' );

/**
 * Delete all test users and test block comments when the plugin is deactivated.
 */
function notes_data_generator_deactivate() {
	$users = get_users(
		array(
			'search'         => 'test_user_*',
			'search_columns' => array( 'user_login' ),
		),
	);

	foreach ( $users as $user ) {
		$comments = get_comments(
			array(
				'user_id' => $user->ID,
				'status'  => 'all',
				'number'  => 0,
				'type'    => 'block_comment',
			)
		);

		foreach ( $comments as $comment ) {
			wp_delete_comment( $comment->comment_ID, true );
		}

		wp_delete_user( $user->ID );
	}
}
register_deactivation_hook( __FILE__, 'notes_data_generator_deactivate' );

/**
 * Enqueue assets.
 */
function notes_data_generator_enqueue_assets() {
	$asset_file = include untrailingslashit( plugin_dir_path( __FILE__ ) ) . '/build/index.asset.php';
	wp_enqueue_script(
		'notes-data-generator',
		plugin_dir_url( __FILE__ ) . 'build/index.js',
		$asset_file['dependencies'],
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
	);
}
add_action( 'enqueue_block_editor_assets', 'notes_data_generator_enqueue_assets' );

/**
 * Display notice message when plugin is activated.
 */
function notes_data_generator_show_activation_notice() {
	$notice_data = get_transient( 'notes_data_generator_activation_notice' );
	if ( $notice_data ) {
		printf(
			'<div class="notice notice-success is-dismissible"><p><strong>Notes Data Generator:</strong> %d users created.</p></div>',
			$notice_data
		);
		delete_transient( 'notes_data_generator_activation_notice' );
	}
}
add_action( 'admin_notices', 'notes_data_generator_show_activation_notice' );

/**
 * Display confirmation message when plugin is deactivated.
 */
function notes_data_generator_show_deactivation_notice() {
	?>
	<script type="text/javascript">
	document.addEventListener( 'DOMContentLoaded', function() {
		const deactivateLinks = document.querySelectorAll( 'a[href*="action=deactivate"]' );
		deactivateLinks.forEach( function(link ) {
			if ( link.getAttribute('id') === 'deactivate-notes-data-generator' ) {
				link.addEventListener('click', function( event ) {
					if ( ! window.confirm( 'Deactivation will delete all test users and test block comments. Are you sure you want to deactivate?' ) ) {
						event.preventDefault();
					}
				} );
			}
		} );
	} );
	</script>
	<?php
}
add_action( 'admin_footer-plugins.php', 'notes_data_generator_show_deactivation_notice' );

/**
 * Override the avatar URL for test users.
 */
function notes_data_generator_get_avatar_url( $avatar_url, $id_or_email, $args ) {
	if ( ! is_numeric( $id_or_email ) ) {
		return $avatar_url;
	}
	return 'https://secure.gravatar.com/avatar/' . $id_or_email . '?s=' . $args['size'] . '&d=wavatar';
}
add_filter( 'get_avatar_url', 'notes_data_generator_get_avatar_url', 10, 3 );

/**
 * Override the avatar URL for test users in the REST API.
 */
function notes_data_generator_rest_prepare_comment( $response, $comment, $request ) {
	$data    = $response->get_data();
	$user_id = $comment->user_id;
	if ( isset( $data['author_avatar_urls'] ) ) {
		$data['author_avatar_urls'] = array(
			24 => 'https://secure.gravatar.com/avatar/' . $user_id . '?s=24&d=wavatar',
			48 => 'https://secure.gravatar.com/avatar/' . $user_id . '?s=48&d=wavatar',
			96 => 'https://secure.gravatar.com/avatar/' . $user_id . '?s=96&d=wavatar',
		);
	}
	$response->set_data( $data );
	return $response;
}
add_filter( 'rest_prepare_comment', 'notes_data_generator_rest_prepare_comment', 10, 3 );

/**
 * Allow duplicate comments.
 */
add_filter( 'duplicate_comment_id', '__return_empty_string' );
