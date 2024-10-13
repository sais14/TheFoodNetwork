import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import foodLogo from './cuisine.jpg';
import './style.css'; // Import the CSS file

function LoginPage() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = (e) => {
    e.preventDefault();
    // Trigger Auth0 login
    loginWithRedirect();
  };

  return (
    <div className="login-page">
      {}
      <Link to="/" className="logo">
        <img src={foodLogo} alt="Logo" className="logo-image" />
      </Link>
      
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <button type="submit">Login with Auth0</button>
      </form>
    </div>
  );
}

export default LoginPage;
