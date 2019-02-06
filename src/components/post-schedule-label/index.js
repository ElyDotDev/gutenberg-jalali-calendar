/**
 * GJCPostScheduleLabel
 *
 * The label that will be rendered to show the current date ore Immediately text
 * and trigger the datetime picker UI on click.
 */
import {__} from '@wordpress/i18n';
import {dateI18n, __experimentalGetSettings} from '@wordpress/date';
import {withSelect} from '@wordpress/data';
import moment from 'moment-jalaali';

const jalaliDateFormat = 'jD jMMMM, jYYYY HH:mm:ss';

export function GJCPostScheduleLabel({date, isFloating, dateFormat}) {
	const settings = __experimentalGetSettings();

	moment.loadPersian({usePersianDigits: true, dialect: 'persian-modern'});
	return date && !isFloating ?
			moment(date, dateFormat).format(jalaliDateFormat) :
			__('Immediately');
}

export default withSelect((select) => {
	return {
		date: select('core/editor').getEditedPostAttribute('date'),
		isFloating: select('core/editor').isEditedPostDateFloating(),
	};
})(GJCPostScheduleLabel);
