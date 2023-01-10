import { useSelector, useDispatch } from 'react-redux';

import './App.scss';

function App() {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INC" });
  };

  const decrement = () => {
    dispatch({ type: 'DEC' })
  };

  const addBy = () => {
    dispatch({type: 'ADD', payload: 10})
  };

  // new Date()

  return (
    <div>
      <h1>Counter App</h1>
      <div className="counter-container">
        <h2>{counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={addBy}>Add By 10</button>
      </div>
      <div className="time-container">
        <h2>Time Display: </h2>

      </div>
    </div>
  );
}

export default App;
