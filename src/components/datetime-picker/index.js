/**
 * GJCDateTimePicker
 *
 * The datetime picker calendar UI.
 */

import {Component} from '@wordpress/element';

import {DatetimePicker} from 'imrc-datetime-picker';
import 'imrc-datetime-picker/dist/imrc-datetime-picker.css';

import moment from 'moment-jalaali';

import './editor.css';

export default class GJCDateTimePicker extends Component {
	constructor(props) {
		super(props);

		const {currentDate} = this.props;

		moment.loadPersian({
			dialect: 'persian-modern',
			usePersianDigits: false
		});

		const defaultMoment = moment(currentDate);
		moment.locale();

		this.state = {
			moment: defaultMoment,
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = moment => {
		const {onChange, dateFormat} = this.props;
		onChange(moment.format(dateFormat));
		this.setState({moment});
	};

	render() {
		const {moment} = this.state;
		const {dateFormat} = this.props;

		return (
				<DatetimePicker
						splitPanel={ false }
						moment={ this.state.moment }
						onChange={ this.handleChange }
						showTimePicker={ true }
						isSolar={ true }
						lang={ 'fa' }
				/>
		);
	}
}
