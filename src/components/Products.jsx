import { ShoppingBag } from "feather-icons-react/build/IconComponents";
import React, { useEffect } from "react";
import { productData } from "../constant/ProductData";
import mixitup from "mixitup";

function Products() {
  useEffect(() => {
    mixitup(".products", {
      selectors: {
        target: ".product",
      },
      animation: {
        duration: 500,
      },
      load: {
        filter: ".coffee", // Default filter option
      },
    });
  }, []);

  return (
    <section id="products" className="px-10 pt-24 lg:px-20 xl:px-32">
      <div className="products-container">
        <h2 className="section-title">
          Choose our delicious and best products
        </h2>
        <ul className="grid grid-cols-2 gap-10 mb-14 cursor-pointer md:grid-cols-3">
          <li
            className="products-items products-line"
            data-filter=".delicacies"
          >
            <h3 className="products-title">New Delicacies</h3>
            <span className="products-stock">3 products</span>
          </li>
          <li className="products-items products-line" data-filter=".coffee">
            <h3 className="products-title">Hot Coffee</h3>
            <span className="products-stock">4 products</span>
          </li>
          <li className="products-items products-line" data-filter=".cake">
            <h3 className="products-title">Cakes and Delicacies</h3>
            <span className="products-stock">4products</span>
          </li>
        </ul>
        <div className="products grid grid-cols-[200px] justify-center md:grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4">
          {/* Map over the product data and generate product elements */}
          {productData.map((product) => (
            <article
              className={`product ${product.className} bg-white rounded-lg`}
              key={product.id}
            >
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
