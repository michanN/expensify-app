import authReducer from '../../reducers/auth';

test('should set state to logged in a.k.a user uid', () => {
  const uid = '123sd';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer({}, action);
  expect(state.uid).toEqual(uid);
});

test('should set state to logged out a.k.a no uid', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: '123sd' }, action);
  expect(state).toEqual({});
});
