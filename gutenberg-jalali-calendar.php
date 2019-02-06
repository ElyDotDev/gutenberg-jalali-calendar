<?php
/**
 * Plugin Name: Gutenberg Jalali Calendar
 * Plugin URI: https://github.com/alirdn/gutenberg-jalali-calendar
 * Description: Gutenberg Jalali Calendar is a Gutenberg plugin that will add Jalali calendar to gutenberg editor.
 * Author: Alirdn
 * Author Email: alireza.dabirinejad@live.com
 * Author URI: https://allii.ir/
 * Version: 0.0.1
 * License: MIT
 * License URI: http://opensource.org/licenses/MIT
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const VERSION = '0.0.1';

/**
 * Initialize the plugin.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
