import React, { useState } from 'react';
import '../App.css';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setMessage('All Fields Are Required');
      return;
    }

    setMessage('');

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
      window.location.href = '/'

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
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
        <button type="submit" onClick={handleSubmit}>
          Log In
        </button>
      </form>
    </div>
  );
}


export default Login