import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import foodLogo from './cuisine.jpg';
import './style.css';
import BackHomeLink from './BackHomeLink'; 

function LoginPage() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = (e) => {
    e.preventDefault();
    loginWithRedirect();
  };

  return (
    <div className="login-page">
      <BackHomeLink /> 
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <button type="submit">Login with Auth0</button>
      </form>
    </div>
  );
}

export default LoginPage;
