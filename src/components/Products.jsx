import { ShoppingBag } from "feather-icons-react/build/IconComponents";
import React from "react";
import { productData } from "../constant/ProductData";

function Products() {
  return (
    <section id="products" className="max-w-screen-lg m-auto px-10 pt-24 ">
      <div className="products-container">
        <h2 className="section-title">
          Choose our delicious and best products
        </h2>
        <ul className="grid grid-cols-2 gap-10 mb-14">
          <li className="products-items products-line">
            <h3 className="products-title">New Delicacies</h3>
            <span className="products-stock">3 products</span>
          </li>
          <li className="products-items products-line">
            <h3 className="products-title">Hot Coffee</h3>
            <span className="products-stock">4 products</span>
          </li>
          <li className="products-items products-line">
            <h3 className="products-title">Cakes and Delicacies</h3>
            <span className="products-stock">34products</span>
          </li>
        </ul>
        <div className="grid grid-cols-[200px] justify-center">
          {/* Map over the product data and generate product elements */}
          {productData.map((product) => (
            <article className="bg-white rounded-lg" key={product.id}>
              <div className="bg-zinc-200 rounded flex justify-center py-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[150px] hover:-translate-y-1 duration-300 "
                />
              </div>
              <div className="relative p-4">
                <h2 className="text-xl">{product.price}</h2>
                <h3 className="text-base">{product.name}</h3>
                <button className="button p-3 absolute inline-flex right-4 -top-5 rounded-full shadow-lg">
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
