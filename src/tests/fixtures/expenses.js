import moment from 'moment';

export default [{
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
