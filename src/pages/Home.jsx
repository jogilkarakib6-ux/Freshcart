import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home({ addToCart }) {

  const categories = [
    { name: "Fruits", icon: "🍎" },
    { name: "Vegetables", icon: "🥦" },
    { name: "Dairy", icon: "🥛" },
    { name: "Bakery", icon: "🍞" },
    { name: "Breakfast", icon: "🥣" },
    { name: "Beverages", icon: "🥤" },
  ];

  return (
    <>

      {/* HERO */}

      <section className="hero-section">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <span className="hero-badge">
                🌱 Fresh & Healthy
              </span>

              <h1>
                Fresh groceries,
                <br />
                <span>delivered to your door.</span>
              </h1>

              <p>
                Shop fresh fruits, vegetables, dairy and daily
                essentials at the best prices.
              </p>

              <Link to="/products" className="hero-btn">
                Shop Now
                <i className="bi bi-arrow-right"></i>
              </Link>

              <div className="hero-info">
                <div>
                  <strong>10K+</strong>
                  <small>Happy Customers</small>
                </div>

                <div>
                  <strong>500+</strong>
                  <small>Fresh Products</small>
                </div>

                <div>
                  <strong>30 min</strong>
                  <small>Fast Delivery</small>
                </div>
              </div>

            </div>

            <div className="col-lg-6 text-center">

              <div className="hero-grocery">
                <div className="floating-item item-1">🍎</div>
                <div className="floating-item item-2">🥦</div>
                <div className="floating-item item-3">🥕</div>
                <div className="floating-item item-4">🥛</div>

                <div className="grocery-circle">
                  🛒
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CATEGORIES */}

      <section className="container section-space">

        <div className="section-heading">
          <div>
            <span>SHOP BY CATEGORY</span>
            <h2>What are you looking for?</h2>
          </div>

          <Link to="/products">
            View All →
          </Link>
        </div>

        <div className="row">

          {categories.map((category) => (
            <div className="col-6 col-md-4 col-lg-2 mb-4" key={category.name}>

              <div className="category-card">

                <div className="category-icon">
                  {category.icon}
                </div>

                <h6>{category.name}</h6>

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* PRODUCTS */}

      <section className="container section-space">

        <div className="section-heading">

          <div>
            <span>OUR PRODUCTS</span>
            <h2>Popular Products</h2>
          </div>

          <Link to="/products">
            View All →
          </Link>

        </div>

        <div className="row">

          {products.slice(0, 8).map((product) => (

            <div
              className="col-md-6 col-lg-3 mb-4"
              key={product.id}
            >

              <ProductCard
                product={product}
                addToCart={addToCart}
              />

            </div>

          ))}

        </div>

      </section>


      {/* OFFER */}

      <section className="container section-space">

        <div className="offer-banner">

          <div>

            <span>WEEKEND SPECIAL</span>

            <h2>
              Get up to <strong>30% OFF</strong>
            </h2>

            <p>
              On fresh fruits, vegetables and dairy products.
            </p>

            <Link to="/products" className="offer-btn">
              Shop Offers
            </Link>

          </div>

          <div className="offer-emoji">
            🛍️🥦🍎
          </div>

        </div>

      </section>


      {/* WHY US */}

      <section className="why-section">

        <div className="container">

          <div className="section-heading centered">
            <div>
              <span>WHY FRESHCART?</span>
              <h2>Everything you need, delivered fresh</h2>
            </div>
          </div>

          <div className="row">

            <div className="col-md-3">
              <div className="why-card">
                <i className="bi bi-truck"></i>
                <h5>Fast Delivery</h5>
                <p>Get your groceries delivered quickly.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="why-card">
                <i className="bi bi-leaf"></i>
                <h5>Fresh Products</h5>
                <p>Fresh and quality products every day.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="why-card">
                <i className="bi bi-shield-check"></i>
                <h5>Secure Payment</h5>
                <p>Your payment information stays secure.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="why-card">
                <i className="bi bi-headset"></i>
                <h5>24/7 Support</h5>
                <p>We're always here to help you.</p>
              </div>
            </div>

          </div>

        </div>

      </section>

    </>
  );
}

export default Home;