// CreatePage.js
import React, { useState } from 'react';

function CreatePage() {
  const [recipeTitle, setRecipeTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleRecipeCreation = (e) => {
    e.preventDefault();
    // Add logic to create a recipe here
    console.log('Recipe created:', recipeTitle, ingredients, instructions);
  };

  return (
    <div className="create-page">
      <h2>Create a New Recipe</h2>
      <form onSubmit={handleRecipeCreation}>
        <div>
          <label>Recipe Title</label>
          <input 
            type="text" 
            value={recipeTitle} 
            onChange={(e) => setRecipeTitle(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Ingredients</label>
          <textarea 
            value={ingredients} 
            onChange={(e) => setIngredients(e.target.value)} 
            placeholder="List your ingredients here" 
            required 
          />
        </div>
        <div>
          <label>Instructions</label>
          <textarea 
            value={instructions} 
            onChange={(e) => setInstructions(e.target.value)} 
            placeholder="Describe how to prepare the recipe" 
            required 
          />
        </div>
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
}

export default CreatePage;
