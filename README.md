# Redux Example


``src/store/index.js``

```
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    addbyTen(state, action) {
      state.counter += action.payload;
    },
    handleSubmit(state, action) {
      state.counter += action.payload;
    },
  },
});

export const actions = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
```

``src/App.js``

```
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const [currentCount, setCurrentCount] = useState(0);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };

  const addBy = () => {
    dispatch(actions.addbyTen(10));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actions.handleSubmit(parseInt(currentCount)));
  };

  return (
    <div className="App">
      <h1> Counter App </h1>
      <h2> {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add By 10</button>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={currentCount}
            onChange={(e) => setCurrentCount(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
```