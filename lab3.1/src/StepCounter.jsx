import React, { useState } from 'react';

// EXPLANATION COMMENT:
// Props (initialValue, step) are read-only values passed from the parent component.
// State (count, history, operationCount) is local data managed by this component. 
// When state updates, it triggers a re-render of only this specific component.
export default function StepCounter({ initialValue = 0, step = 1 }) {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState([]);
  const [operationCount, setOperationCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + step);
    setHistory(prev => [...prev, count + step].slice(-5));
    setOperationCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCount(count - step);
    setHistory(prev => [...prev, count - step].slice(-5));
    setOperationCount(prev => prev + 1);
  };

  const handleReset = () => {
    setCount(initialValue);
    setHistory([]);
    setOperationCount(0);
  };

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h3>Current Count: {count}</h3>
      <p>Total Operations: {operationCount}</p>
      <p>History (last 5): {history.join(', ')}</p>
      
      <button onClick={handleIncrement}>Increment by {step}</button>
      <button onClick={handleDecrement}>Decrement by {step}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}