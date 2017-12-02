import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';
import { removeExpense } from '../actions/expenses';

export class EditExpense extends Component {
	onSubmit = (expense) => {
		this.props.editExpense(this.props.expense.id, expense);
		this.props.history.push('/');
	}

	onRemove = () => {
		this.props.removeExpense({ id: this.props.expense.id });
		this.props.history.push('/');
	}

	render() {
		return (
		<div>
			<ExpenseForm
				expense={this.props.expense}
				onSubmit={this.onSubmit}
			/>
			<button
				onClick = {this.onRemove}>Remove Expense</button>
		</div>
		)
	}
}


const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find((expense) => {
			return expense.id === props.match.params.id;
		})
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		editExpense: (id, expense) => dispatch(editExpense(id, expense)),
		removeExpense: (data) => dispatch(removeExpense(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
