import React, { useState } from 'react';
import './SignupPage.css'; // Include the CSS file for styling

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }
    console.log('Sign up with', email, password);
  };

  return (
    <div className="signup-page">
      <div className="signup-left">
        <div className="brand">
          <h1>The Food Network</h1> {/* Update brand name to match your app */}
        </div>
        <div className="features">
          <div className="feature">
            <i className="icon-adaptable" /> {/* Replace these icons with actual icons */}
            <div>
              <h3>Discover Recipes Based on What You Have</h3>
              <p>Take a picture of your fridge, and our app will recommend recipes based on your ingredients.</p>
            </div>
          </div>
          <div className="feature">
            <i className="icon-built-to-last" />
            <div>
              <h3>Personalized Suggestions</h3>
              <p>We recommend recipes based on your food preferences, dietary needs, and what people similar to you like.</p>
            </div>
          </div>
          <div className="feature">
            <i className="icon-user-experience" />
            <div>
              <h3>Explore Different Cuisines</h3>
              <p>From Italian to Indian, explore recipes from a variety of cuisines based on the ingredients you have.</p>
            </div>
          </div>
          <div className="feature">
            <i className="icon-innovative" />
            <div>
              <h3>Stay Updated with Trends</h3>
              <p>We keep you updated with trending recipes that fit your preferences, making your cooking experience more exciting.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="signup-right">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm your password"
            />
          </div>
          <div className="signup-options">
            <button type="submit" className="signup-button">Sign Up</button>
            <p>
              Already have an account? <a href="/login">Log in</a>
            </p>
          </div>
          <div className="social-signup">
            <div className="divider">or</div>
            <button className="google-button">Sign up with Google</button>
            <button className="facebook-button">Sign up with Facebook</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
