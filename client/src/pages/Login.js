import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import './Register.css';
import { AuthContext } from '../App';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/api/users/login', formData);
      alert('✅ Login successful!');
      setSuccess(true);
      setIsAuthenticated(true);
      localStorage.setItem('token', res.data.token); // store token
      navigate('/');
    } catch (error) {
      setSuccess(false);
      if (error.response?.data?.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Login failed. Try again later.');
      }
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleLogin}>
        <h2>Welcome Back 👋</h2>
        <input type="email" name="email" placeholder="Email ID" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Login</button>
        {message && <p className={success ? 'success-msg' : 'error-msg'}>{message}</p>}
      </form>
    </div>
  );
};

export default Login;
