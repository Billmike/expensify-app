import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboard from '../../components/Dashboard';

test('Should render the expense dashboard page to screen', () => {
	const wrapper = shallow(<ExpenseDashboard />);
	expect(wrapper).toMatchSnapshot();
});
