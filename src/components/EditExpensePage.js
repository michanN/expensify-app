import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import DeleteModal from './DeleteModal';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteModal: false
    };
  }
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/dashboard');
  };
  onRemoveConfirm = () => {
    this.setState(() => ({
      showDeleteModal: false
    }));
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/dashboard');
  };
  onDeleteClick = () => {
    this.setState(() => ({
      showDeleteModal: true
    }));
  };
  onRemoveCancel = () => {
    this.setState(() => ({
      showDeleteModal: false
    }));
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button
            onClick={this.onDeleteClick}
            className="button button--delete"
            >
            Remove Expense
          </button>
        </div>
        <DeleteModal
          showDeleteModal={this.state.showDeleteModal}
          onRemoveCancel={this.onRemoveCancel}
          onRemoveConfirm={this.onRemoveConfirm}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: data => dispatch(startRemoveExpense(data))
});

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
