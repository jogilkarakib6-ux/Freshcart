import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          🛒 FreshCart
        </div>

        <h2>Create Account</h2>

        <p>Join FreshCart today.</p>

        <form>

          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your name"
          />

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Create password"
          />

          <button type="button">
            Create Account
          </button>

        </form>

        <p className="auth-bottom">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>

    </div>
  );
}

export default Register;