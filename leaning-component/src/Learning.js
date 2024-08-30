import React from 'react';
import { Link } from 'react-router-dom';
import './Learning.css';

const LearningComponent = () => {
  return (
    <div className="learning-container">
      <h1>Choose a Learning Option</h1>
      <p>Welcome to our learning platform! Select one of the following options to start exploring different sign languages:</p>
      
      <div className="options1">
        <Link to="/isl" className="option" id="isl">
          <h2>ISL</h2>
        </Link>
        <h3>Indian Sign Language </h3>
      </div>

      <div className="options2">
      <h3>American Sign Language</h3>
        <Link to="/asl" className="option" id="asl">
          <h2>ASL</h2>
        </Link>
      </div>

      <div className="options3">
        <Link to="/bsl" className="option" id="bsl">
          <h2>BSL</h2>
        </Link>
        <h3>British Sign Language</h3>
      </div>

      <p>Each section provides various resources and interactive elements to help you understand and practice different sign languages.</p>
    </div>
  );
};

export default LearningComponent;
