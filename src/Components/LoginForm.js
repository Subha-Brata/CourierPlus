import React, { useState } from 'react';
import './Style.css'
const LoginForm = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call and authentication
    // Replace this with actual API calls and authentication logic
    if (email && password) {
      handleLogin();
    }
  };
  console.log(email)
  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <h2 className='how'>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
