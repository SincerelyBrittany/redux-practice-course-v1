// import redux

import { createStore } from "redux";

const reducer = (state = { counter: 0 }, action) => {
  return state;
};

const store = createStore(reducer);

export default store;
