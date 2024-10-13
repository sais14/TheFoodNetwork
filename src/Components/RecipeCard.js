import React from 'react';
import './RecipeCard.css'; // Custom CSS for styling the card

const RecipeCard = () => {
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
      'Grate the cucumber and squeeze out excess water using a clean kitchen towel or paper towels.',
      'In a bowl, mix the Greek yogurt, grated cucumber, minced garlic, olive oil, lemon juice, and fresh dill.',
      'Season with salt and pepper to taste, and stir everything together until well combined.',
      'Chill in the refrigerator for 30 minutes to let the flavors meld together.',
      'Serve cold as a dip with pita bread or alongside grilled meats.',
    ],
    culturalFact:
      'Tzatziki is a traditional Greek sauce made from strained yogurt, cucumber, garlic, and olive oil. It is commonly used as a refreshing dip or sauce for various Greek dishes like souvlaki or gyros, and has been a staple in Mediterranean cuisine for centuries.',
  };

  return (
    <div className="recipe-card">
      {/* Image on the left */}
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.name} />
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
      </div>
    </div>
  );
};

export default RecipeCard;
