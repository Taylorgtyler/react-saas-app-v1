import React, { useState } from 'react';
import './login.css'

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Email:', email, 'Password:', password);
    };

    return (<div className="container">
    <form onSubmit={handleSubmit} className="form">
      <h1 className="title">Login</h1>
      <div className="input-group">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input" />
      </div>
      <div className="input-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input" />
      </div>
      <button type="submit" className="button">
        Sign In
      </button>
    </form>
  </div>
);

}