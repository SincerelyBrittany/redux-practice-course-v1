import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const [currentCount, setCurrentCount] = React.useState(0);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const addBy10 = () => {
    dispatch({ type: "ADD", payload: 10 });
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setCurrentCount(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD", payload: parseInt(currentCount) });
  };
  return (
    <div className="App">
      <h1> Counter App </h1>
      <h2> {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy10}>Add By 10</button>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={currentCount} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );

  //dispatch is used whenever you want to send information/data to the redux store
  //example: updating the state every time the button is clicked
  //useDispatch help us to dispatch an action, then we have to procide a unique action,
  //then the redux store will fetch the action and update the store
}

export default App;
