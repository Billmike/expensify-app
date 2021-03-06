import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';

test('Should generate set start date action object', () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: 'SET_START_DATE',
		start: moment(0),
	});
});

test('Should generate set end date action object', () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: 'SET_END_DATE',
		end: moment(0)
	});
});

test('Should generate sort by date action object', () => {
	const action = sortByDate();
	expect(action).toEqual({
		type: 'SORT_BY_DATE',
	});
});

test('Should generate sort by amount action object', () => {
	const action = sortByAmount();
	expect(action).toEqual({
		type: 'SORT_BY_AMOUNT'
	});
});

test('Should generate sort by text action object', () => {
	const action = setTextFilter('Stuff');
	expect(action).toEqual({
		type: 'SET_TEXT',
		text: 'Stuff'
	});
});

test('Should generate sort by text action with default passed in', () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: 'SET_TEXT',
		text: ''
	});
});
