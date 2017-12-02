import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('Should display the list of expenses.', () => {
	const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
	expect(wrapper).toMatchSnapshot();
});
