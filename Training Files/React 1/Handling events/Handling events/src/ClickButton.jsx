import React, { useState } from 'react';
import './ClickButton.css';

function ClickButton() {
  const [message, setMessage] = useState("Click the button");

  const handleClick = () => {
    setMessage("You clicked the button!");
  };

  return (
    <div className="click-container">
      <h2>{message}</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ClickButton;
