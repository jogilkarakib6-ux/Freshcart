import React from "react";
import { Link } from "react-router-dom";

function Checkout({ cart }) {

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const delivery = subtotal >= 499 ? 0 : 40;

  return (
    <div className="container section-space">

      <div className="page-title">
        <span>CHECKOUT</span>
        <h1>Complete Your Order</h1>
      </div>

      <div className="row">

        <div className="col-lg-7">

          <div className="checkout-card">

            <h4>Delivery Information</h4>

            <div className="row">

              <div className="col-md-6">
                <label>First Name</label>
                <input placeholder="First Name" />
              </div>

              <div className="col-md-6">
                <label>Last Name</label>
                <input placeholder="Last Name" />
              </div>

              <div className="col-12">
                <label>Address</label>
                <textarea
                  placeholder="Enter delivery address"
                  rows="3"
                ></textarea>
              </div>

              <div className="col-md-6">
                <label>City</label>
                <input placeholder="City" />
              </div>

              <div className="col-md-6">
                <label>Pincode</label>
                <input placeholder="Pincode" />
              </div>

              <div className="col-12">
                <label>Payment Method</label>

                <select>
                  <option>Cash on Delivery</option>
                  <option>UPI</option>
                  <option>Credit / Debit Card</option>
                </select>

              </div>

            </div>

          </div>

        </div>


        <div className="col-lg-5">

          <div className="summary-card">

            <h4>Your Order</h4>

            {cart.map((item) => (

              <div
                className="checkout-product"
                key={item.id}
              >
                <span>
                  {item.emoji} {item.name} × {item.quantity}
                </span>

                <strong>
                  ₹{item.price * item.quantity}
                </strong>
              </div>

            ))}

            <hr />

            <div>
              <span>Subtotal</span>
              <strong>₹{subtotal}</strong>
            </div>

            <div>
              <span>Delivery</span>
              <strong>
                {delivery === 0 ? "FREE" : `₹${delivery}`}
              </strong>
            </div>

            <hr />

            <div className="grand-total">
              <span>Total</span>
              <strong>₹{subtotal + delivery}</strong>
            </div>

            <Link
              to="/success"
              className="checkout-btn"
            >
              Place Order
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;