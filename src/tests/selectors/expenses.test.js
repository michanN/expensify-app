import moment from 'moment';
import selectExpenses from '../../selectors/expenses'

const expenses = [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 150,
  createdAt: 0
},
{
  id: '2',
  description: 'Candy',
  note: '',
  amount: 2478,
  createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
  id: '3',
  description: 'Car',
  note: '',
  amount: 1548875,
  createdAt: moment(0).add(4, 'days').valueOf()
}]

test('should filter by text value', () => {
  const filters = {
    text: 'a',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[1] ]);
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[0] ]);
});
