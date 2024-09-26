import React from 'react';
import './style.css';

const Login = () => {
  return (
    <div className="container">
      <div className="form-container">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Your Email" required />
          </div>
          <div className="input-group">
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Your Password" required />
          </div>
          <a href="/dashboard" className="button">Login</a>        </form>
        <p className="footer">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
