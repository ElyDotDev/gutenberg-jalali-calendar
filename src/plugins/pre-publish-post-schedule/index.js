/**
 * Gutenberg Jalali Calendar Post Schedule Plugin
 *
 * This plugin will add a post schedule with jalali datetime picker.
 */

import { registerPlugin } from '@wordpress/plugins';

import GutenbergJalaliCalendarPostSchedule
	from '@gjc/components/pre-publish-post-schedule';

registerPlugin( 'gutenberg-jalali-calendar-pre-publish-post-schedule', {
	render: GutenbergJalaliCalendarPostSchedule,
} );
