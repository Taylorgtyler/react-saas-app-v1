import React from 'react';
import { Link } from 'react-router-dom';
import './top-navigation.css';

export function TopNavigation() {
  return (
    <nav className="top-navigation">
      <div className="top-navigation__logo">
        <Link to="/">Your App</Link>
      </div>
      <div className="top-navigation__links">
        <Link to="/calendar">Calendar</Link>
        <Link to="/account">Account</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </nav>
  );
}