import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('Should remove expense by ID', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('Should not remove expense if ID is not found', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '-3'
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('Should add an expense to the application', () => {
	const action = {
		type: 'ADD_EXPENSE',
		expense: {
			id: '4',
			description: 'Bull',
			note: '',
			createdAt: 0,
			amount: 9000
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, action.expense]);
});

test('Should edit an expense in the application', () => {
	const description = 'Make sense guy'
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[0].id,
		updates: {
			description
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state[0].description).toBe(description);
});

test('Should not edit an invalid expense', () => {
	const note = 'Dumebi babe';
	const action = {
		type: 'EDIT_EXPENSE',
		id: '-5',
		updates: {
			note
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
})
