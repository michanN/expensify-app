import { connect } from 'react-redux';
import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-wider">Expense</div>
      <div className="show-for-wider">Amount</div>
    </div>
    <div className="list-body">
      {props.expenses.length === 0 ? (
        <div className="list-item list-item__message">
          <span>No expenses</span>
        </div>
      ) : (
        props.expenses.map((expense) => {
          return (<ExpenseListItem
            {...expense}
            key={expense.id} />);
        }))
    }
    </div>
  </div>
);

// connect returns a function that we can use to create the HOS
// function inside connect defines what we want our comp to access from the store
// store state gets passed in as the first argument
// When connecting a comp to the redux store the comp becomes reactive aka changes in the store,
// will rerender component

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
