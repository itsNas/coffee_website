import React from "react";

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
            <span className="product-stock">3 products</span>
          </li>
          <li className="products-items products-line">
            <h3 className="products-title">Hot Coffee</h3>
            <span className="product-stock">4 products</span>
          </li>
          <li className="products-items products-line">
            <h3 className="products-title">Cakes And Delicacies</h3>
            <span className="product-stock">4 products</span>
          </li>
        </ul>
        <div className="content-grid">
          {/* Delicacies */}
          <article className="products-card">
            <div className="products-shape">
              <img src="" alt="" className="products-img" />
            </div>

            <div className="products-data">
              <h2 className="products-price"></h2>
              <h3 className="products-name"></h3>
              <button className="button product-button"></button>
            </div>
          </article>
          {/* Coffee */}
          {/* Cake */}
        </div>
      </div>
    </section>
  );
}

export default Products;
