import React, { useState, useEffect } from "react";
import "./CounterApp.css";

const CounterApp = () => {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("count");
    return saved !== null ? parseInt(saved) : 0;
  });

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const increment = () => {
    if (count < max) {
      const newCount = count + 1;
      setCount(newCount);
      setHistory([...history, `${count} +1 → ${newCount}`]);
    }
  };

  const decrement = () => {
    if (count > min) {
      const newCount = count - 1;
      setCount(newCount);
      setHistory([...history, `${count} -1 → ${newCount}`]);
    }
  };

  const reset = () => {
    setCount(min);
    setHistory([...history, `Reset → ${min}`]);
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Dynamic Counter</h1>

        <div className="input-group">
          <label>Min:</label>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(Number(e.target.value))}
          />
          <label>Max:</label>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(Number(e.target.value))}
          />
        </div>

        <div className="count-display">{count}</div>

        <div className="button-group">
          <button onClick={decrement} disabled={count <= min}>
            -
          </button>
          <button onClick={reset}>Reset</button>
          <button onClick={increment} disabled={count >= max}>
            +
          </button>
        </div>

        <div className="history">
          <h3>History</h3>
          {history.length === 0 ? (
            <p className="no-history">No actions yet</p>
          ) : (
            <ul>
              {history.map((entry, index) => (
                <li key={index}>{entry}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
