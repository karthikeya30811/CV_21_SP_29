import React from 'react';
import './style.css'

const Signup = () => {
  return (
    <div className="container">
      <div className="form-container">
        <h2>Sign Up</h2>
        <form>
          <div className="input-group">
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Your Name" required />
          </div>
          <div className="input-group">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Your Email" required />
          </div>
          <div className="input-group">
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Your Password" required />
          </div>
          <button type="submit" className="button">Sign Up</button>
        </form>
        <p className="footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
