/**
 * Gutenberg Jalali Calendar Post Schedule Component
 *
 * This Component is the main component that will be rendered in gutenberg sidebar.
 */

import {__} from '@wordpress/i18n';
import {PluginPrePublishPanel} from '@wordpress/edit-post';

import GJCPostScheduleForm from '@gjc/components/post-schedule-form';
import GJCPostScheduleLabel from '@gjc/components/post-schedule-label';

function GutenbergJalaliCalendarPostSchedule({instanceId}) {
	return (
			<PluginPrePublishPanel
					initialOpen={ false }
					title={ [
						__('Publish:'),
						<span className="editor-post-publish-panel__link"
									key="label"><GJCPostScheduleLabel/></span>,
					] }
					className="gutenberg-jalali-calendar-edit-post-pre-publish-post-schedule">
				<GJCPostScheduleForm/>
			</PluginPrePublishPanel>
	);
}

export default GutenbergJalaliCalendarPostSchedule;
