import React, { useState } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import './style.css'; 
import cuisineIcon from './cuisine.jpg';
import dietIcon from './dietary.webp';
import allergyIcon from './allergy.png';
import BackHomeLink from './BackHomeLink'; 

function PreferencesPage() {
  const [diet, setDiet] = useState([]);
  const [allergies, setAllergies] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const navigate = useNavigate(); // For navigation

  const allergens = ['Peanuts', 'Shellfish', 'Eggs', 'Milk', 'Mustard'];
  const diets = ['Vegetarian', 'Vegan', 'Pescatarian', 'No Pork', 'No Beef'];
  const cuisineOptions = ['Italian', 'Chinese', 'Mexican', 'Indian', 'Thai', 'Japanese', 'French', 'Greek', 'Spanish', 'American'];

  const handlePreferencesSave = (e) => {
    e.preventDefault();
    console.log('Saved preferences:', diet, allergies, cuisines);
    // Navigate to home page after saving preferences
    navigate('/');
  };

  const handleAllergiesChange = (selectedOptions) => {
    setAllergies(selectedOptions ? selectedOptions.map(option => option.value) : []);
  };

  const handleDietChange = (selectedOptions) => {
    setDiet(selectedOptions ? selectedOptions.map(option => option.value) : []);
  };

  const handleCuisinesChange = (selectedOptions) => {
    setCuisines(selectedOptions ? selectedOptions.map(option => option.value) : []);
  };

  return (
    <div className="preferences-page">
      <BackHomeLink /> 
      <h2>Set Your Preferences</h2>
      <form onSubmit={handlePreferencesSave}>
        <div className="icon-container">
          <div className="icon-wrapper">
            <img src={cuisineIcon} alt="Cuisine Icon" />
          </div>
          <label>Cuisine</label>
          <Select
            isMulti
            options={cuisineOptions.map(cuisine => ({ value: cuisine, label: cuisine }))}
            onChange={handleCuisinesChange}
            value={cuisineOptions.filter(cuisine => cuisines.includes(cuisine)).map(cuisine => ({ value: cuisine, label: cuisine }))}
            className="select-wrapper"
          />
        </div>
        <div className="icon-container">
          <div className="icon-wrapper">
            <img src={dietIcon} alt="Diet Icon" />
          </div>
          <label>Dietary Restrictions</label>
          <Select
            isMulti
            options={diets.map(diet => ({ value: diet, label: diet }))}
            onChange={handleDietChange}
            value={diets.filter(d => diet.includes(d)).map(d => ({ value: d, label: d }))}
            className="select-wrapper"
          />
        </div>
        <div className="icon-container">
          <div className="icon-wrapper">
            <img src={allergyIcon} alt="Allergies Icon" />
          </div>
          <label>Allergies</label>
          <Select
            isMulti
            options={allergens.map(allergen => ({ value: allergen, label: allergen }))}
            onChange={handleAllergiesChange}
            value={allergens.filter(allergen => allergies.includes(allergen)).map(allergen => ({ value: allergen, label: allergen }))}
            className="select-wrapper"
          />
        </div>
        <button type="submit">Save Preferences</button>
      </form>
    </div>
  );
}

export default PreferencesPage;

