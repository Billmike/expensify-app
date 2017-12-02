import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
	id: uuid(),
	description,
	note, 
	amount,
	createdAt
	}
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});

// SET_TEXT
const setTextFilter = (text) => ({
	type: 'SET_TEXT',
	text
});

// SORT_BY_DATE
const sortByDate = () => ({
	type: 'SORT_BY_DATE',
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT',
});

// SET_START_DATE
const setStartDate = (start) => ({
	type: 'SET_START_DATE',
	start
});

// SET_END_DATE
const setEndDate = (end) => ({
	type: 'SET_END_DATE',
	end
});

const expensesDefaultState = [];
const filtersDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
}

const filterReducers = (state = filtersDefaultState, action) => {
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

const expensesReducer = (state = expensesDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [
				...state,
				action.expense
			];
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => {
				return id !== action.id;
			});
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if (expense.id === action.id) {
					return {
						...expense,
						...action.updates
					}
				}
				return expense;
			})
		default:
			return state;
	}
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses.filter((expense) => {
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());



		return startDateMatch && endDateMatch && textMatch;
	}).sort((a, b) => {
		if (sortBy === 'date') {
			return a.createdAt < b.createdAt ? 1 : -1;
		}
		if (sortBy === 'amount') {
			return a.amount < b.createdAt ? 1 : -1;
		}
	});
}

const store = createStore(combineReducers({
	expenses: expensesReducer,
	filters: filterReducers
}));

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 8000, createdAt: -211000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 3000, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, {
// 	amount: 500
// }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));

// store.dispatch(sortByDate());
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-2000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(2000));


const demoState = {
	expenses:[{
		id: 'doisodsnldkj',
		description: 'January Rent',
		note: 'This was the final payment',
		amount: 54500,
		createdAt: 0
	}],
	filters: {
		text: 'rent',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	}
};


