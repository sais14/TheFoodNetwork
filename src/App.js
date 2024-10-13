import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignupPage';
import PreferencesPage from './Components/PreferencesPage';
import ExplorePage from './Components/ExplorePage';
import CreatePage from './Components/CreatePage';
import SharePage from './Components/SharePage';
import ReccomendationsPage from './Components/Reccomendations';
import RecipeCard from './Components/RecipeCard';
import RecipeGuac from './Components/RecipeGuac';
import RecipeBowl from './Components/RecipeBowl';

function App() {
  const domain = "dev-hb5qwoe81p5lw45x.us.auth0.com";
  const clientId = "F6bgV4NLyNNgVvdjDDMjMOG6GXj2J3o2";

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: `${window.location.origin}/preferences`}}
    >
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/preferences" element={<PreferencesPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/reccomendations" element={<ReccomendationsPage />} />
            <Route path="/share" element={<SharePage/>} />
            <Route path="/recipe/tzatziki" element={<RecipeCard/>} />
            <Route path="/recipe/guacamole" element={<RecipeGuac/>} />
            <Route path="/recipe/bowl" element={<RecipeBowl/>} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </Auth0Provider>
  );
}

export default App;
