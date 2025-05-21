import React, { useState } from 'react';
import './TextInput.css';

function TextInput() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="text-input-container">
      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
        value={name}
      />
      <p>Hello, {name}</p>
    </div>
  );
}

export default TextInput;
