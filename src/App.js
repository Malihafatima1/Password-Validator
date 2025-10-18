import React, { useState } from 'react';
import validator from 'validator';
import './App.css';

function App() {
  const [errorMessage, setErrorMessage] = useState('');

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage('Strong Password');
    } else {
      setErrorMessage('Not Strong Password');
    }
  };

  return (
    <div className="App">
      <h2>Checking Password Strength in ReactJS</h2>
      <label>
        Enter Password:
        <input type="password" onChange={(e) => validate(e.target.value)} autoFocus />
      </label>
      {errorMessage && (
        <span
          style={{
            display: 'block',
            fontWeight: 'bold',
            marginTop: '10px',
            color: errorMessage.toLowerCase().includes('Strong Password') ? 'green' : 'red', // case-insensitive
          }}
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
}

export default App;
