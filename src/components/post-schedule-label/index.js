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

import persinaJs from 'persianjs';

const jalaliDateFormat = 'jD jMMMM, jYYYY hh:mm a';

export function GJCPostScheduleLabel({date, isFloating, dateFormat}) {
	const settings = __experimentalGetSettings();

	moment.loadPersian({dialect: 'persian-modern'});

	return date && !isFloating ?
			persinaJs(moment(date, dateFormat).format(jalaliDateFormat)).englishNumber().toString() :
			__('Immediately');
}

export default withSelect((select) => {
	return {
		date: select('core/editor').getEditedPostAttribute('date'),
		isFloating: select('core/editor').isEditedPostDateFloating(),
	};
})(GJCPostScheduleLabel);
