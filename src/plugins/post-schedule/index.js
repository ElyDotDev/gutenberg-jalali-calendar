/**
 * Gutenberg Jalali Calendar Post Schedule Plugin
 *
 * This plugin will add a post schedule with jalali datetime picker.
 */

import { registerPlugin } from '@wordpress/plugins';

import GutenbergJalaliCalendarPostSchedule
	from '@gjc/components/post-schedule';

//  Import CSS.
import '@gjc/plugins/post-schedule/style.css';
import '@gjc/plugins/post-schedule/editor.css';

registerPlugin( 'gutenberg-jalali-calendar-post-schedule', {
	render: GutenbergJalaliCalendarPostSchedule,
} );
