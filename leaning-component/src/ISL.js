// src/ISLComponent.js
import React from 'react';
import './ISL.css'; // Import CSS for ISL styling

const ISLComponent = () => {
    const numbers = Array.from({ length: 10 }, (_, index) => index); // Create an array of numbers 0-9
    const letters = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index)); // Create an array of letters A-Z
  return (
    <div className="isl-container">
      {numbers.concat(letters).map((label, index) => (
        <div key={index} className="box">
          {label}
        </div>
      ))}
    </div>
  );
};

export default ISLComponent;
