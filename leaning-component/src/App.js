// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LearningComponent from './Learning';
import ISLComponent from './ISL';
import ASLComponent from './ASL';
import BSLComponent from './BSL';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LearningComponent />} />
          <Route path="/isl" element={<ISLComponent />} />
          <Route path="/" element={<LearningComponent />} />
          <Route path="/asl" element={<ASLComponent />} />
          <Route path="/" element={<LearningComponent />} />
          <Route path="/bsl" element={<BSLComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
