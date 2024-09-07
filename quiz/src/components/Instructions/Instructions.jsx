import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Instructions.css'; // Import the CSS file

const Instructions = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/quiz');
  };

  return (
    <div className="instructions-container">
      <div className="instructions-box">
        <h1>Quiz Instructions</h1>
        <ul className="instructions-list">
          <li>Timer is enabled: You have 5 seconds per question.</li>
          <li>If time runs out, it will automatically move to the next question.</li>
          <li>Correct answers will be highlighted in green color.</li>
          <li>Incorrect answers will be highlighted in red color.</li>
          <li>The quiz contains 10 questions.</li>
        </ul>
        <button onClick={handleProceed} className="proceed-button">OK</button>
      </div>
    </div>
  );
};

export default Instructions;
