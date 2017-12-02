import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
	const action = removeExpense({ id: '123abc' });
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test('Should edit expense', () => {
	const action = editExpense('123abc', 'New Note value');
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: 'New Note value'
	});
});

test('Should setup add expense action object', () => {
	const expenseObject = {
		description: 'Amazing Rent',
		note: 'Somthing about a note',
		amount: 1000,
		createdAt: 0
	};
	const action = addExpense(expenseObject);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			...expenseObject
		}
	});
});

test('Should setup add expense for default data', () => {
	const action = addExpense();
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			description: '',
			note: '',
			amount: '',
			createdAt: ''
		}
	})
})
