/**
 * GJCPostScheduleForm
 *
 * It's just a container that will get the state and action creators and
 * pass it to the date time picker component.
 */

import {withSelect, withDispatch} from '@wordpress/data';
import {compose} from '@wordpress/compose';

import GJCDateTimePicker from '@gjc/components/datetime-picker';

export function GJCPostScheduleForm({date, onUpdateDate, dateFormat}) {
	return (
			<GJCDateTimePicker
					key="date-time-picker"
					currentDate={ date }
					onChange={ onUpdateDate }
					dateFormat={ dateFormat }
			/>
	);
}

export default compose([
	withSelect((select) => {
		return {
			date: select('core/editor').getEditedPostAttribute('date'),
		};
	}),
	withDispatch((dispatch) => {
		return {
			onUpdateDate(date) {
				dispatch('core/editor').editPost({date});
			},
		};
	}),
])(GJCPostScheduleForm);
