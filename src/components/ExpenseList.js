import { connect } from 'react-redux';
import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import { setTextFilter, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseList extends React.Component {
  onResetFilter = () => {
    this.props.setTextFilter('');
    this.props.setStartDate();
    this.props.setEndDate();
  };
  render() {
    return (
      <div className="content-container">
        <div className="list-header">
          <div className="show-for-mobile">Expenses</div>
          <div className="show-for-wider">Expense</div>
          <div className="show-for-wider">Amount</div>
        </div>
        <div className="list-body">
          {this.props.expenses.length === 0 ? (
            <div className="list-item list-item__message">
              <span>{this.props.filtered ? 'All expenses filtered out' : 'No expenses'}</span>
            </div>
          ) : (
            this.props.expenses.map((expense) => {
              return (<ExpenseListItem
                {...expense}
                key={expense.id} />);
            }))
        }
        </div>
        {this.props.filtered && <button className="button button--delete" onClick={this.onResetFilter}>Show all</button>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const filteredExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenses: filteredExpenses,
    filtered: (filteredExpenses.length !== state.expenses.length)
  };
};

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
