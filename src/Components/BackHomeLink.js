// BackHomeLink.js
import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from './cuisine.jpg'; 
import './style.css';

function BackHomeLink() {
  return (
    <Link to="/" className="back-home-link">
      <img src={homeIcon} alt="Home" className="back-home-image" />
    </Link>
  );
}

export default BackHomeLink;
