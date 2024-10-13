import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <h1 className = "titleh1">Hungry?</h1>
      <p>Welcome to the The Food Network</p>
      <div className="button-container">
        <Link to="/explore" className="home-button">Explore</Link>
        <Link to="/create" className="home-button">Create</Link>
        <Link to="/preferences" className="home-button">User Preferences</Link>
      </div>
 
      <Link to="/login" className="login-button">Login</Link>
    </div>
  );
}

export default HomePage;

