import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import DeleteModal from '../../components/DeleteModal';
import expenses from '../fixtures/expenses';

let wrapper;
let startEditExpense;
let startRemoveExpense;
let history;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage
    startEditExpense={startEditExpense}
    startRemoveExpense={startRemoveExpense}
    history={history}
    expense={expenses[0]}
  />);
});

test('should render EditExpensePage correclty', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/dashboard');
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('should handle onRemove', () => {
  wrapper.find('button').simulate('click');
  expect(wrapper.find(DeleteModal).prop('showDeleteModal')).toBeTruthy();
});
