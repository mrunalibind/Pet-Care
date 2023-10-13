import React, { useState } from 'react';
import './Login.css';
import '../App.css';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = {};

    if (!email || !validateEmail(email)) {
      validationErrors.email = 'Please enter a valid email address';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setMessage('');
      return;
    }

    setErrors({});

    const userData = {
      email,
      password
    };

    try {
      const response = await fetch('https://petcarebackend-production.up.railway.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        throw new Error('Login Failed');
      }

      console.log('Login Successful');

      setEmail('');
      setPassword('');

      setMessage('Login Successful');
      // Redirect to another page, e.g., the dashboard
      window.location.href = './';

    } catch (error) {
      console.error('Error during login:', error);
      setMessage('Login Failed');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {message && <p className={`message ${message.includes('Success') ? 'success' : 'error'}`}>{message}</p>}
      <form className="login-form">
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit" onClick={handleSubmit}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
