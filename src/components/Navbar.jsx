import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top shadow-sm">
      <div className="container">

        <Link className="navbar-brand brand-logo" to="/">
          <span>🛒</span> FreshCart
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">

          <div className="search-bar mx-lg-auto my-3 my-lg-0">
            <i className="bi bi-search"></i>
            <input
              type="text"
              placeholder="Search for groceries..."
            />
          </div>

          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/wishlist">
                <i className="bi bi-heart"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link cart-link" to="/cart">
                <i className="bi bi-cart3"></i>
                {cartCount > 0 && (
                  <span className="cart-count">{cartCount}</span>
                )}
              </Link>
            </li>

            <li className="nav-item ms-lg-2">
              <Link className="btn btn-success login-btn" to="/login">
                <i className="bi bi-person me-1"></i>
                Login
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;