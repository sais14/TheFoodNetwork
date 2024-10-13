import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the hook for navigation
import './RecipeCard.css'; // Custom CSS for styling the card
import Guacamole from '../images/ExploreImages/Guacamole.jpg';

const RecipeGuac = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  const recipe = {
    name: 'Guacamole',
    image: 'https://via.placeholder.com/400x300?text=Tzatziki', // Placeholder image
    ingredients: [
        "3 avocados",
      "1 lime, juiced",
      "1/2 teaspoon salt",
      "1/4 cup red onion, finely chopped",
      "2 tablespoons cilantro, chopped",
      "1 jalapeño, seeded and minced",
      "1 small tomato, diced",
      "1 garlic clove, minced"
    ],
    steps: [
      "1. Cut the avocados in half, remove the pit, and scoop out the flesh into a mixing bowl.",
    "2. Mash the avocados with a fork or potato masher until smooth or slightly chunky, depending on preference.",
    "3. Add lime juice and salt. Stir to combine.",
    "4. Mix in the finely chopped red onion, cilantro, jalapeño, diced tomato, and minced garlic.",
    "5. Taste and adjust seasoning with more salt or lime juice if needed.",
    "6. Serve immediately with tortilla chips or cover with plastic wrap and refrigerate."
    ],
    culturalFact:
      'Guacamole originated in Mexico and its name comes from the Nahuatl word "āhuacamolli," which means "avocado sauce," reflecting its deep roots in Aztec culture.',
  };

  const handleMadeItClick = () => {
    navigate('/share'); // Redirect to /share when the button is clicked
  };

  return (
    <div className="recipe-card">
      {/* Image on the left */}
      <div className="recipe-image">
        <img src={Guacamole} alt={recipe.name} />
      </div>

      {/* Recipe info on the right */}
      <div className="recipe-details">
        <h2 className="recipe-name">{recipe.name}</h2>

        {/* Ingredients */}
        <div className="recipe-section">
          <h3>Ingredients</h3>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Steps */}
        <div className="recipe-section">
          <h3>Steps</h3>
          <ol className="steps-list">
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        {/* Fun Cultural Fact */}
        <div className="recipe-section cultural-fact">
          <h3>Fun Cultural Fact</h3>
          <p>{recipe.culturalFact}</p>
        </div>

        {/* Made It Button */}
        <div className="made-it-button">
          <button onClick={handleMadeItClick}>Made It!</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeGuac;
