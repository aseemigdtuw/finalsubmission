import React from 'react';
// import Counter from './counter';
import './jumbotron.css';

function Jumbotron() {

  function handleClick() {
    alert('Button Clicked!');
  }

  return (
    <div className="jumbotron">
      <div className='container-jumbotron'>
      <h1>Welcome to My React App</h1>
      <p>This is the <strong>Home Page</strong> of my app.</p>
      <button className='click-me' onClick={handleClick}>Click Me!</button>
      </div>
  </div>
  );
}

export default Jumbotron;