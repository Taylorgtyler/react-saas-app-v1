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

};

// Need to add conditional to check if the user has an account

// Create account functionality

// user enters email, function checks if that email matches one in the db
// if it matches then render the password box
//if there's no account associated then render the create account form

/* 
export function createAccount() {
    const [first_name, setfirst_name] = useState('');
    const [last_name, setlast_name] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setphone_number] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Email:', email, 'Password:', password, 
      'First Name:', first_name, 'Last Name', last_name);
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
      <div className='input-group'>
        <input
          type="First Name"
      <button type="submit" className="button">
        Sign In
      </button>
    </form>
  </div>
);

}*/