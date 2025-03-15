import React, { useState } from 'react';
import axios from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post('/auth/login', { email, password });
    localStorage.setItem('token', res.data.token);
    window.location.href = '/dashboard';
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
