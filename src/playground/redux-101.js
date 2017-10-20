import { createStore } from 'redux';

// Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({ count = 100 } = {}) => ({
  type: 'SET',
  count
});

// REDUCER - actions describe the fact that something happened but don't,
// how the application's state changes in response
// 1. Reducers are pure functions - output determined only by input
// 2. Never change state or action. only read and then return a new object
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

// Gets called when store is created AND for every dispatch
const store = createStore(countReducer);

// Watch for changes to redux store
// subscribe takes on function which gets called every time the store changes
store.subscribe(() => {
  console.log(store.getState());
});

// ACTIONS our way to communicate with the store,
// actions are objects sent to the store
// Dispatch send action to store

store.dispatch(incrementCount({ incrementBy: 10 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 3 }));

store.dispatch(setCount({ count: 200 }));

store.dispatch(setCount());
