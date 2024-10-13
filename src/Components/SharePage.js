import React, { useState } from 'react';
import './SharePage.css';  // Custom CSS file for enhanced styling
import BackHomeLink from './BackHomeLink';

function SharePage() {
  const [image, setImage] = useState(null);  // State to store the uploaded image
  const [name, setName] = useState('');  // State to store the recipe name
  const [ingredients, setIngredients] = useState('');  // State to store comma-separated ingredients
  const [recentPosts, setRecentPosts] = useState([]);  // State to store recent posts

  // Function to get today's date in a readable format
  const getCurrentDate = () => {
    const today = new Date();
    return today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Function to handle image capture (use device camera)
  const handleCaptureImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'camera';
    input.click();

    input.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);  // Create a URL for the image to display
        setImage(imageUrl);  // Set the image to state
        console.log('Captured image:', file);
      }
    };
  };

  // Function to handle image upload from file system
  const handleUploadImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.click();

    input.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);  // Create a URL for the image to display
        setImage(imageUrl);  // Set the image to state
        console.log('Uploaded image:', file);
      }
    };
  };

  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (image && name && ingredients) {
      const newPost = {
        image,
        name,
        ingredients,
        datePosted: getCurrentDate()  // Store the current date when the post is submitted
      };
      
      // Add the new post to recent posts
      setRecentPosts([newPost, ...recentPosts]);
      
      // Reset the form
      setImage(null);
      setName('');
      setIngredients('');
    } else {
      alert('Please upload an image, enter a recipe name, and add ingredients');
    }
  };

  return (
    <div className="share-container">
      <BackHomeLink />
      <h4>Share Your Recipes</h4>
      <p7>Capture or upload an image to share with others.</p7>

      {/* Image Upload/Capture Buttons */}
      <div className="button-container">
        <button className="rounded-button" onClick={handleCaptureImage}>Take Image</button>
        <button className="rounded-button" onClick={handleUploadImage}>Upload Image</button>
      </div>

      {/* Display selected image */}
      {image && (
        <div className="image-preview">
          <img src={image} alt="Selected recipe" />
        </div>
      )}

      {/* Form for adding recipe name and ingredients */}
      {image && (
        <form onSubmit={handleFormSubmit} className="ingredients-form">
          {/* Recipe Name Input */}
          <label className="form-label">Recipe Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter recipe name"
            className="name-input"
          />

          {/* Ingredients Input */}
          <label className="form-label">Add Ingredients (comma-separated)</label>
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="e.g., eggs, flour, sugar"
            className="ingredient-input"
          />
          <button type="submit" className="submit-ingredients-button">Submit Recipe</button>
        </form>
      )}

      {/* Display recent posts */}
      <div className="recent-posts">
        <h2>Your Recent Posts</h2>
        {recentPosts.length === 0 ? (
          <p3>No posts yet.</p3>
        ) : (
          <ul>
            {recentPosts.map((post, index) => (
              <li key={index} className="recent-post-item">
                <div className="post-container">
                  <div className="post-content">
                    <h3>{post.name}</h3>
                    <img src={post.image} alt="Post" className="recent-post-image" />
                    <p4>Ingredients: {post.ingredients}</p4>
                    <br />
                    <p4>Date Posted: {post.datePosted}</p4>  {/* Display the date posted */}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SharePage;
