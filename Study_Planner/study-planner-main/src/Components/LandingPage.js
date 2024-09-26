import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <h1>Welcome to the Landing Page</h1>
      <div className="buttons">
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn">Signup</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
