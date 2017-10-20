import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', {description: 'New Desc'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      description: 'New Desc'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'rent',
    amount: 12345,
    createdAt: 100000,
    note: 'This months rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD-EXPENSE',
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  });
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD-EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      amount: 0,
      note: '',
      createdAt: 0
    }
  });
});
