import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './SignupPage.css'; // Include the CSS file for styling

function SignUpPage() {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = (e) => {
    e.preventDefault();
    loginWithRedirect({ screen_hint: 'signup' });
  };

  return (
    <div className="signup-page">
      <div className="signup-left">
        <div className="brand">
          <h1>The Food Network</h1> {/* Update brand name to match your app */}
        </div>
        <div className="features">
          <div className="feature">
            <i className="icon-adaptable" />
            <div>
              <h3>Discover Recipes Based on What You Have</h3>
              <p>Take a picture of your fridge, and our app will recommend recipes based on your ingredients.</p>
            </div>
          </div>
          {/* Additional features */}
        </div>
      </div>

      <div className="signup-right">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <button type="submit" className="signup-button">Sign Up with Auth0</button>
          <div className="signup-options">
            <p>
              Already have an account? <a href="/login">Log in</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
