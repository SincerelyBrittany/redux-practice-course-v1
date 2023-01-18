import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div className="App">
      <h1> Counter App </h1>
      <h2> {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );

  //dispatch is used whenever you want to send information/data to the redux store
  //example: updating the state every time the button is clicked
  //useDispatch help us to dispatch an action, then we have to procide a unique action,
  //then the redux store will fetch the action and update the store
}

export default App;
