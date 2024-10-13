// PreferencesPage.js
import React, { useState } from 'react';

function PreferencesPage() {
  const [diet, setDiet] = useState('omnivore');
  const [allergies, setAllergies] = useState('');

  const handlePreferencesSave = (e) => {
    e.preventDefault();
    // Save preferences logic here
    console.log('Saved preferences:', diet, allergies);
  };

  return (
    <div className="preferences-page">
      <h2>Set Your Preferences</h2>
      <form onSubmit={handlePreferencesSave}>
        <div>
          <label>Diet</label>
          <select value={diet} onChange={(e) => setDiet(e.target.value)}>
            <option value="omnivore">Omnivore</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
          </select>
        </div>
        <div>
          <label>Allergies</label>
          <input 
            type="text" 
            value={allergies} 
            onChange={(e) => setAllergies(e.target.value)} 
            placeholder="E.g. nuts, gluten" 
          />
        </div>
        <button type="submit">Save Preferences</button>
      </form>
    </div>
  );
}

export default PreferencesPage;
