import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
      }}
    />
  </div>
);

// If we only need dispatch and no state we can run connect without a function
export default connect()(AddExpensePage);
