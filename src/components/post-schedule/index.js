/**
 * Gutenberg Jalali Calendar Post Schedule Component
 *
 * This Component is the main component that will be rendered in gutenberg sidebar.
 */

import {__} from '@wordpress/i18n';
import {withInstanceId} from '@wordpress/compose';
import {Dropdown, Button} from '@wordpress/components';
import {Fragment} from '@wordpress/element';
import {PostScheduleCheck} from '@wordpress/editor';
import {PluginPostStatusInfo} from '@wordpress/edit-post';

import GJCPostScheduleForm from '@gjc/components/post-schedule-form';
import GJCPostScheduleLabel from '@gjc/components/post-schedule-label';

const dateFormat = 'YYYY-MM-DDTHH:mm:ss';

function GutenbergJalaliCalendarPostSchedule({instanceId}) {
	return (
			<PluginPostStatusInfo
					className="gutenberg-jalali-calendar-edit-post-post-schedule">
				<PostScheduleCheck>
					<label
							htmlFor={ `gutenberg-jalali-calendar-edit-post-post-schedule__toggle-${ instanceId }` }
							id={ `gutenberg-jalali-calendar-edit-post-post-schedule__heading-${ instanceId }` }
					>
						{ __('Publish') }
					</label>
					<Dropdown
							position="bottom left"
							contentClassName="gutenberg-jalali-calendar-edit-post-post-schedule__dialog"
							renderToggle={ ({onToggle, isOpen}) => (
									<Fragment>
										<label
												className="edit-post-post-schedule__label"
												htmlFor={ `edit-post-post-schedule__toggle-${ instanceId }` }
										>
											<GJCPostScheduleLabel dateFormat={ dateFormat }/> { __(
												'Click to change') }
										</label>
										<Button
												id={ `gutenberg-jalali-calendar-edit-post-post-schedule__toggle-${ instanceId }` }
												type="button"
												className="gutenberg-jalali-calendar-edit-post-post-schedule__toggle"
												onClick={ onToggle }
												aria-expanded={ isOpen }
												aria-live="polite"
												isLink
										>
											<GJCPostScheduleLabel dateFormat={ dateFormat }/>
										</Button>
									</Fragment>
							) }
							renderContent={ () => <GJCPostScheduleForm
									dateFormat={ dateFormat }/> }
					/>
				</PostScheduleCheck>
			</PluginPostStatusInfo>
	);
}

export default withInstanceId(GutenbergJalaliCalendarPostSchedule);
