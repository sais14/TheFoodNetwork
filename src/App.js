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

function App() {
  const domain = "dev-hb5qwoe81p5lw45x.us.auth0.com";
  const clientId = "TmvlrF6EbMP4f0ozk5X0FnQQSqwA88Tm";

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
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </Auth0Provider>
  );
}

export default App;
