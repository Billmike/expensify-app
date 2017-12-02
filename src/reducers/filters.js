const filtersDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
}

export default (state = filtersDefaultState, action) => {
	switch (action.type) {
	case 'SET_TEXT':
		return {
			...state,
			text: action.text
		};
	case 'SORT_BY_DATE':
		return {
			...state,
			sortBy: 'date'
		};
	case 'SORT_BY_AMOUNT':
		return {
			...state,
			sortBy: 'amount'
		};
	case 'SET_START_DATE':
		return {
			...state,
			startDate: action.start
		};
	case 'SET_END_DATE':
		return {
			...state,
			endDate: action.end
		}
		default:
			return state;
	}
}