import { useSelector, useDispatch } from "react-redux";
import "./Counter.scss";

const Counter = () => {

  const counter = useSelector(state => state.counter.counter.counter);
  const dispatch = useDispatch();
  console.log(counter)

  const increment = () => {
    dispatch({ type: "INC" });
  };

  const decrement = () => {
    dispatch({ type: "DEC" });
  };

  const addBy = () => {
    dispatch({ type: "ADD", payload: 10 });
  };


  return (
    <div className="counter-container">
      <h2>Counter:{counter}</h2>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={addBy}>ADD 10</button>
    </div>
  );
};

export default Counter;
