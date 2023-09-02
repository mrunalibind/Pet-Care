import React ,{useState}from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

function Register() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState(''); 

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !age || !email || !password || !city) {
      setMessage('All Fields Are Required');
      return;
    }

    setMessage('');

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

    } catch (error) {
      console.error('Error sending data:', error);
      setMessage('Signup Failed');
    }
  };

  return (
    <div className="signup-container">
      <h2>Creat a Account</h2>
      {message && <h4 className={`message ${message.includes('Success') ? 'success' : 'error'}`}>{message}</h4>}
      <form className="signup-form">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
        />
        <input
          type="number"
          value={age}
          onChange={handleAgeChange}
          placeholder="Age"
        />
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
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="City"
        />
        <button type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
    
        <Link to = '/login'>
          <button id = 'loginBtn'>Login</button>
        </Link>
      </form>
    </div>
  );
}
export default Register