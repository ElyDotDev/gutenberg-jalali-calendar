<?php
/**
 *  Initializer
 *
 * Enqueue CSS/JS of the plugin.
 *
 * @since   0.0.1
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg Jalali Calendar assets for backend editor.
 *
 * @uses {wp-plugins}
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-compose}
 * @uses {wp-components}
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-editor} for WP editor styles.
 * @uses {wp-edit-post} to internationalize the block's text.
 * @uses {wp-data}
 * @uses {wp-date}
 * @since 1.0.0
 */
function gutenberg_jalali_calendar_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'gutenberg_jalali_calendar_editor_scripts',
		plugins_url( '/dist/gutenberg-jalali-calendar.build.js', dirname( __FILE__ ) ),
		array(
			'wp-plugins',
			'wp-i18n',
			'wp-compose',
			'wp-components',
			'wp-element',
			'wp-editor',
			'wp-edit-post',
			'wp-data',
			'wp-date'
		),
		true
	);

	// Styles.
	wp_enqueue_style(
		'gutenberg_jalali_calendar_editor_styles',
		plugins_url( 'dist/gutenberg-jalali-calendar.build.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' )
	);
}

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'gutenberg_jalali_calendar_editor_assets' );
