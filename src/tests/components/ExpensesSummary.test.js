import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import numeral from 'numeral';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should render empty ExpensesSummary correctly', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={0} expensesTotal={selectExpensesTotal([])} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={2342324} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={125} />);
  expect(wrapper).toMatchSnapshot();
});
