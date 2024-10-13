import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginPage() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = (e) => {
    e.preventDefault();
    // Trigger Auth0 login
    loginWithRedirect();
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <button type="submit">Login with Auth0</button>
      </form>
    </div>
  );
}

export default LoginPage;
