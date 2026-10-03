import React from "react";
import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="success-page">

      <div className="success-card">

        <div className="success-icon">
          ✓
        </div>

        <h1>Order Placed!</h1>

        <p>
          Thank you for shopping with FreshCart.
        </p>

        <div className="order-number">
          Order ID: <strong>#FC20260922</strong>
        </div>

        <p className="delivery-text">
          🚚 Your groceries will be delivered soon.
        </p>

        <Link
          to="/products"
          className="hero-btn"
        >
          Continue Shopping
        </Link>

      </div>

    </div>
  );
}

export default OrderSuccess;