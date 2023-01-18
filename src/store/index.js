// import redux

import { createStore } from "redux";

const reducer = (state = { counter: 0 }, action) => {
  // Reducer rules: Synchronous function and it should not mutate initial state

  if (action.type === "INCREMENT") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "DECREMENT") {
    return { counter: state.counter - 1 };
  }

  if (action.type === "ADDTEN") {
    return { counter: state.counter + action.payload };
  }

  if (action.type === "ADD") {
    return { counter: state.counter + action.payload };
  }
  return state;
};

const store = createStore(reducer);

export default store;
