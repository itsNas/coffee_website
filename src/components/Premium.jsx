import React from "react";
import QualityImgBig from "../assets/img/quality1.png";
import QualityImgSmall from "../assets/img/quality2.png";
import { ArrowRight } from "react-feather";

function Premium() {
  return (
    <section
      id="premium"
      className="px-10 mt-10 pb-8 pt-24 bg-white lg:px-20 xl:px-32"
    >
      <div className="quality-container">
        <h2 className="section-title">
          We offer a premium quality and better quality preparation just for
          you!
        </h2>
        <div className="quality-content grids md:grid-cols-2 ">
          <div className="relative justify-self-center">
            <img
              src={QualityImgBig}
              alt="image big"
              className="rounded-lg w-72 md:pt-10 xl:pt-0"
            />
            <img
              src={QualityImgSmall}
              alt="image small"
              className="rounded-lg w-24 absolute top-0 bottom-0 my-auto mx-0 translate-x-52"
            />
          </div>
          <div className="quality-data">
            <h1 className="text-2xl mb-3">Premium Coffee</h1>
            <h2 className="text-2xl mb-1">$94.99</h2>
            <span className="block text-sm mb-3">Special Price</span>
            <p className=" mb-10">
              We are delighted with our coffee. That's why you get the best
              premium coffee plus the kettle made of resistant materials that
              you see in the image, for a special price.
            </p>
            <div className="flex items-center gap-8 flex-col xs:flex-row">
              <button className="button">Buy now</button>
              <a
                href="#"
                className="text-base uppercase flex items-center gap-3"
              >
                See more
                <ArrowRight className=" h-5 hover:translate-x-1 duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Premium;
