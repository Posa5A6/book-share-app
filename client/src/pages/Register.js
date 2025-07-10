import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'https://book-share-app-yt3y.onrender.com/api/users/register',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setMessage('✅ Registration successful!');
      setSuccess(true);
      alert('✅ Registration successful!');
      // Optionally redirect: window.location.href = '/login';
      
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(`❌ ${error.response.data.message}`);
      } else {
        setMessage('❌ Registration failed. Try again later.');
      }
      setSuccess(false);
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2>Create Account 📝</h2>

        <input
          type="text"
          name="name"
          placeholder="Username"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>

        {message && (
          <p className={success ? 'success-msg' : 'error-msg'}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Register;
