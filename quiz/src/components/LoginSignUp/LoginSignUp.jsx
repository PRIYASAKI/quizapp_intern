import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignUp.css'; // Import the CSS file

const LoginSignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    // You can add form validation here
    navigate('/instructions', { state: { username } });
  };

  return (
    <div className="login-signup-container">
      <div className="form-box">
        <h1>Login / Sign Up</h1>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
        <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
      </div>
    </div>
  );
};

export default LoginSignUp;
