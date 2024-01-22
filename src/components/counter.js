import React, { useState } from 'react';
import './counter.css'

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='container-counter'>
      <h1>Counter: {count}</h1>
      <button className='pretty-button-2' onClick={increment}>Increment</button>
      <button className='pretty-button-2' onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;