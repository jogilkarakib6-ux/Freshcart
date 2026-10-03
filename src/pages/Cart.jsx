import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart, updateQuantity, removeFromCart }) {

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const delivery = subtotal >= 499 || subtotal === 0 ? 0 : 40;

  const total = subtotal + delivery;

  return (
    <div className="container section-space">

      <div className="page-title">
        <span>YOUR SHOPPING BAG</span>
        <h1>Shopping Cart</h1>
      </div>

      {cart.length === 0 ? (

        <div className="empty-cart">

          <div>🛒</div>

          <h3>Your cart is empty</h3>

          <p>Add some fresh groceries to get started.</p>

          <Link to="/products" className="hero-btn">
            Start Shopping
          </Link>

        </div>

      ) : (

        <div className="row">

          <div className="col-lg-8">

            {cart.map((item) => (

              <div className="cart-item" key={item.id}>

                <div className="cart-product-icon">
                  {item.emoji}
                </div>

                <div className="cart-product-info">

                  <h5>{item.name}</h5>

                  <small>{item.unit}</small>

                  <strong>₹{item.price}</strong>

                </div>

                <div className="quantity-control">

                  <button
                    onClick={() =>
                      updateQuantity(item.id, -1)
                    }
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQuantity(item.id, 1)
                    }
                  >
                    +
                  </button>

                </div>

                <strong className="cart-total">
                  ₹{item.price * item.quantity}
                </strong>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <i className="bi bi-trash"></i>
                </button>

              </div>

            ))}

          </div>


          <div className="col-lg-4">

            <div className="summary-card">

              <h4>Order Summary</h4>

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
                <strong>₹{total}</strong>
              </div>

              <Link
                to="/checkout"
                className="checkout-btn"
              >
                Proceed to Checkout
              </Link>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;