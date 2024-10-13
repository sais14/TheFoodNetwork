import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the hook for navigation
import './RecipeCard.css'; // Custom CSS for styling the card
import image6 from '../images/image6.png';

const RecipeBowl = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  const recipe = {
    name: 'Vegan Quinoa Bowl with Roasted Vegetables',
    image: 'https://via.placeholder.com/400x300?text=Tzatziki', // Placeholder image
    ingredients: [
      "1 cup quinoa, rinsed",
    "2 cups vegetable broth",
    "1 zucchini, chopped",
    "1 bell pepper, chopped",
    "1 small sweet potato, peeled and diced",
    "1 red onion, sliced",
    "2 tablespoons olive oil",
    "1 teaspoon garlic powder",
    "1/2 teaspoon paprika",
    "Salt and pepper, to taste",
    "1/4 cup hummus",
    "1 tablespoon lemon juice",
    "1 tablespoon tahini",
    "1 tablespoon water",
    "1/4 cup fresh parsley, chopped"
    ],
    steps: [
      "1. Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.",
    "2. Toss the zucchini, bell pepper, sweet potato, and red onion in olive oil, garlic powder, paprika, salt, and pepper.",
    "3. Spread the vegetables on the baking sheet and roast for 20-25 minutes until tender.",
    "4. While vegetables are roasting, cook the quinoa by bringing the vegetable broth to a boil. Add quinoa, reduce heat, cover, and simmer for 15 minutes or until liquid is absorbed.",
    "5. In a small bowl, whisk together hummus, lemon juice, tahini, and water to make the dressing.",
    "6. To assemble, divide the cooked quinoa into bowls, top with roasted vegetables, and drizzle with the hummus-tahini dressing.",
    "7. Garnish with fresh parsley and serve."
    ],
    culturalFact:
      'Quinoa, once known as the "gold of the Incas," has been cultivated for thousands of years in the Andean region of South America, where it was a staple crop for indigenous people due to its high nutritional value.',
  };

  const handleMadeItClick = () => {
    navigate('/share'); // Redirect to /share when the button is clicked
  };

  return (
    <div className="recipe-card">
      {/* Image on the left */}
      <div className="recipe-image">
        <img src={image6} alt={recipe.name} />
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

export default RecipeBowl;
