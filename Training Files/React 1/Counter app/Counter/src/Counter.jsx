import React, {useState} from "react";
import './counter.css';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div className="counter">
            <h1>Counter</h1>
            <h2 className="count-display">Count :{count}</h2>
            <div className="buttons">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;