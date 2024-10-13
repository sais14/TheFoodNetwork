import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the hook for navigation
import './RecipeCard.css'; // Custom CSS for styling the card
import Tzatziki from '../images/ExploreImages/Tzatziki.webp';

const RecipeCard = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  const recipe = {
    name: 'Tzatziki',
    image: 'https://via.placeholder.com/400x300?text=Tzatziki', // Placeholder image
    ingredients: [
      '1 cup Greek yogurt',
      '1 cucumber, grated and squeezed',
      '2 cloves garlic, minced',
      '1 tablespoon olive oil',
      '1 tablespoon lemon juice',
      '1 tablespoon fresh dill, chopped',
      'Salt and pepper to taste',
    ],
    steps: [
      '1. Grate the cucumber and squeeze out excess water using a clean kitchen towel or paper towels.',
      '2. In a bowl, mix the Greek yogurt, grated cucumber, minced garlic, olive oil, lemon juice, and fresh dill.',
      '3. Season with salt and pepper to taste, and stir everything together until well combined.',
      '4. Chill in the refrigerator for 30 minutes to let the flavors meld together.',
      '5. Serve cold as a dip with pita bread or alongside grilled meats.',
    ],
    culturalFact:
      'Tzatziki is a traditional Greek sauce made from strained yogurt, cucumber, garlic, and olive oil. It is commonly used as a refreshing dip or sauce for various Greek dishes like souvlaki or gyros, and has been a staple in Mediterranean cuisine for centuries.',
  };

  const handleMadeItClick = () => {
    navigate('/share'); // Redirect to /share when the button is clicked
  };

  return (
    <div className="recipe-card">
      {/* Image on the left */}
      <div className="recipe-image">
        <img src={Tzatziki} alt={recipe.name} />
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
          <p >{recipe.culturalFact}</p>
        </div>

        {/* Made It Button */}
        <div className="made-it-button">
          <button onClick={handleMadeItClick}>Made It!</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
