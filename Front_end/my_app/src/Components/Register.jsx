import React, { useState } from 'react';
import '../App.css';
import { Link }  from 'react-router-dom';
import './Register.css';



function Register() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = {};

    if (!name) {
      validationErrors.name = 'Name is required';
    }

    if (!age) {
      validationErrors.age = 'Age is required';
    }

    if (!email || !validateEmail(email)) {
      validationErrors.email = 'Please enter a valid email address';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    }

    if (!city) {
      validationErrors.city = 'City is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setMessage('');
      return;
    }

    setErrors({});

    
    const userData = {
      name,
      age,
      email,
      password,
      city
    };

    try {
      const response = await fetch('https://petcarebackend-production.up.railway.app/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        throw new Error('Failed to send data to server');
      }

      console.log('Data sent successfully:', userData);

    
    setName('');
    setAge('');
    setEmail('');
    setPassword('');
    setCity('');

   
    setMessage('Signup Successful');

    window.location.href = './login';
  } catch (error) {
    console.error('Error sending data:', error);
    setMessage('Signup Failed');
  }
    
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      {message && <h4 className={`message ${message.includes('Success') ? 'success' : 'error'}`}>{message}</h4>}
      <form className="signup-form">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
        />
        {errors.name && <div className="error">{errors.name}</div>}

        <input
          type="number"
          value={age}
          onChange={handleAgeChange}
          placeholder="Age"
        />
        {errors.age && <div className="error">{errors.age}</div>}

        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
        {errors.email && <div className="error">{errors.email}</div>}

        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
        {errors.password && <div className="error">{errors.password}</div>}

        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="City"
        />
        {errors.city && <div className="error">{errors.city}</div>}

        <button type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
        <br />
<p>Already have an account?</p>
<br />
        <Link to="/login">
          <button id="loginBtn">Login</button>
        </Link>
      </form>
    </div>
  );
}

export default Register;
