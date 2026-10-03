import React from "react";

function ProductCard({ product, addToCart }) {
  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  return (
    <div className="product-card">

      <div className="product-top">

        <span className="discount-tag">
          {discount}% OFF
        </span>

        <button className="wishlist-btn">
          <i className="bi bi-heart"></i>
        </button>

        <div className="product-emoji">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

      </div>

      <div className="product-body">

        <small className="category-name">
          {product.category}
        </small>

        <h5>{product.name}</h5>

        <div className="rating">
          ⭐ {product.rating}
        </div>

        <small className="text-muted">
          {product.unit}
        </small>

        <div className="product-footer">

          <div>
            <strong>₹{product.price}</strong>
            <del>₹{product.oldPrice}</del>
          </div>

          <button
            className="add-btn"
            onClick={() => addToCart(product)}
          >
            <i className="bi bi-plus-lg"></i>
            Add
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;