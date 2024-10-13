import React, { useState } from 'react';
import './CreatePage.css'; // Import the new styles
import BackHomeLink from './BackHomeLink';

function CreatePage() {
  const [uploadMessage, setUploadMessage] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showGenerateButton, setShowGenerateButton] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      setIsUploading(true);
      try {
        const response = await fetch('http://127.0.0.1:8000/upload/', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          setIngredients(data.ingredients);
          setUploadMessage('Ingredients extracted successfully!');
          setShowGenerateButton(true);
        } else {
          setUploadMessage('Failed to extract ingredients.');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
        setUploadMessage('Upload failed due to an error.');
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleGenerateRecipe = async () => {
    const payload = {
      dietary_restrictions: 'vegan, gluten-free',
      expertise_level: 'beginner',
      preferred_cuisine: 'Indian',
      additional_restrictions: 'no nuts, low spice',
      ingredients: ingredients,
    };

    setIsGenerating(true);
    try {
      const response = await fetch('http://127.0.0.1:8000/generate-recipe/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        setRecipe(data.recipe);
      } else {
        setRecipe('Failed to generate recipe.');
      }
    } catch (error) {
      console.error('Error generating recipe:', error);
      setRecipe('Error generating recipe.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="create-page">
      <BackHomeLink />
      <div className="content">
        <h2>Create a New Recipe</h2>
        <div className="kitchen-section">
          <h3>What's in your kitchen?</h3>
          <p>Upload a picture of your kitchen or a receipt to help generate recipes based on your ingredients.</p>
          <div className="image-buttons">
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
          {isUploading && <p>Uploading and extracting ingredients...</p>}
          {uploadMessage && <p>{uploadMessage}</p>}
          {ingredients.length > 0 && (
            <div>
              <h3>Extracted Ingredients:</h3>
              <ul>
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          )}
          {showGenerateButton && !isGenerating && (
            <div className="generate-button-container">
              <button onClick={handleGenerateRecipe} className="image-button">
                Generate Recipe
              </button>
            </div>
          )}
          {isGenerating && <p>Generating recipe, please wait...</p>}
          {recipe && (
            <div>
              <h3>Generated Recipe:</h3>
              <pre>{recipe}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreatePage;
