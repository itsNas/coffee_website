import { ShoppingBag } from "feather-icons-react/build/IconComponents";
import React from "react";
import { productData } from "../constant/ProductData";

function Products() {
  return (
    <section
      id="products"
      className="max-w-screen-lg m-auto px-8 pt-10 xs:pt-10"
    >
      <div className="products-container">
        <h2 className="section-title">
          Choose our delicious and best products
        </h2>
        <ul className="products-filter">
          <li className="products-items products-line">
            <h3 className="products-title">New Delicacies</h3>
            <span className="product-stock">{productData.length} products</span>
          </li>
        </ul>
        <div className="content-grid">
          {/* Map over the product data and generate product elements */}
          {productData.map((product) => (
            <article className="products-card" key={product.id}>
              <div className="products-shape">
                <img
                  src={product.image}
                  alt={product.name}
                  className="products-img"
                />
              </div>
              <div className="products-data">
                <h2 className="products-price">{product.price}</h2>
                <h3 className="products-name">{product.name}</h3>
                <button className="button product-button">
                  <ShoppingBag />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
