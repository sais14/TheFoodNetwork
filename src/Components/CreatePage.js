import React, { useState } from 'react';
import './CreatePage.css';

function CreatePage() {
  const handleTakeImage = () => {
    console.log('Camera opened to take image');
  };

  const handleImageUpload = (e) => {
   
    const file = e.target.files[0];
    if (file) {
      console.log('Image uploaded:', file.name);
    }
  };

  return (
    <div className="create-page">
      <h2>Create a New Recipe</h2>

      <div className="kitchen-section">
        <h3>What's in your kitchen?</h3>
        <p>Upload a picture of your kitchen or a receipt to help generate recipes based on your ingredients.</p>

        <div className="image-buttons">
          {/* Button to take image using camera */}
          <button type="button" className="image-button" onClick={handleTakeImage}>
            Take Image
          </button>
          
          {/* Button to upload image from device */}
          <input
            type="file"
            accept="image/*"
            id="upload-image"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
          <label htmlFor="upload-image" className="image-button">
            Upload from Device
          </label>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;

