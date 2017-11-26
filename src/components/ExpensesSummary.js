import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = ({ expensesCount, expensesTotal, totalExpenseCount }) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const expensesTotalFormatted = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expensesCount}</span> out of {totalExpenseCount} {expenseWord} totalling <span>{expensesTotalFormatted}</span> </h1>
        <div className="page-header__actions">
          <Link className="button button--summary" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  const numberOfExpenses = state.expenses.length;
  return {
    expensesCount: visibleExpenses.length,
    totalExpenseCount: numberOfExpenses,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
