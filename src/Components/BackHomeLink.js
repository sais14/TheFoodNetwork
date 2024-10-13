// BackHomeLink.js
import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from './logo.png'; 
import './style.css';

function BackHomeLink() {
  return (
    <Link to="/" className="back-home-link">
     <img 
  src={homeIcon} 
  alt="Home" 
  style={{ 
    position: 'absolute', 
    top: '5px',  /* Adjust this value to move it closer to the top */
    left: '5px', /* Adjust this value to move it closer to the left */
    width: '80px', /* Optional: Control size */
    height: '80px' /* Optional: Control size */
  }} 
/>

    </Link>
  );
}

export default BackHomeLink;
