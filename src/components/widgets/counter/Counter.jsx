import { useSelector, useDispatch } from 'react-redux';
import './Counter.scss';


const Counter = () => {

    const counter = useSelector((counterState) => counterState.counter);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({ type: "INC" });
    };

    const decrement = () => {
        dispatch({ type: 'DEC' })
    };

    const addBy = () => {
        dispatch({ type: 'ADD', payload: 10 })
    };

    return (
        <div className="counter-container">
            <h2>{counter}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={addBy}>Add By 10</button>
        </div>
    );
}

export default Counter;
