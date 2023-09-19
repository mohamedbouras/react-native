import React, { useState } from 'react';
import './Login.css'; // Import your CSS file
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/api/login', { email, password })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handelNavige = () => {
    navigate('/VerifEmail')
  }

  return (
    <div className="login-container">
      <div className="card">
        <h1>Login</h1>
        <div>
          <label>Email:</label>
          <input
            className="InpLogin"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <div className="password-input">
            <input
              className="InpLogin"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              {showPassword ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </span>
          </div>
        </div>
        <div>
          <button className="BtnLogin" onClick={handleLogin}>
            Login
          </button>
        </div>
        <div>
          <a href="/forgot-password" onClick={handelNavige}>Forgot Password?</a>
        </div>
        <div>
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
