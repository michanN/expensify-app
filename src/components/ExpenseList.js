import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>ExpenseList</h1>
    {props.expenses.map((expense, index) => {
      return <ExpenseListItem
        {...expense}
        key={index}
      />
    })}
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
