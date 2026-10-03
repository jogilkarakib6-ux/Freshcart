import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products({ addToCart }) {

  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Fruits",
    "Vegetables",
    "Dairy",
    "Bakery",
    "Breakfast",
  ];

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div className="container section-space">

      <div className="products-header">
        <div>
          <span>FRESH COLLECTION</span>
          <h1>All Products</h1>
          <p>Choose from our wide range of fresh groceries.</p>
        </div>
      </div>

      <div className="category-filter">

        {categories.map((item) => (

          <button
            key={item}
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>

        ))}

      </div>

      <div className="row mt-4">

        {filteredProducts.map((product) => (

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

    </div>
  );
}

export default Products;