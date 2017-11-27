import { login, logout } from '../../actions/auth';

test('should setup login action', () => {
  const uid = '123sd';
  const displayName = 'mich nas';
  const action = login(uid, displayName);
  expect(action).toEqual({
    type: 'LOGIN',
    uid,
    displayName: 'mich'
  });
});

test('should setup logout action', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
