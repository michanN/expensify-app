import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[0].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[1], expenses[2] ]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add expense', () => {
  const expense = {
    id: '4',
    description: 'Test',
    note: '',
    amount: 149,
    createdAt: 0
  };
  const action = {
    type: 'ADD-EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test('should edit expenses', () => {
  const note = 'test'
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      note
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].note).toBe(note);
});

test('should not edit any expense if id is not found', () => {
  const note = 'test'
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      note
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
