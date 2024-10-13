import React from 'react';
import './ExplorePage.css';
import BackHomeLink from './BackHomeLink'; 

function ExplorePage() {
  return (
    <div className="explore-page">
      <BackHomeLink /> 
      <h2>Explore Recipes</h2>
      <p>Find new and exciting recipes based on your preferences!</p>
    </div>
  );
}

export default ExplorePage;
