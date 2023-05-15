import React from "react";
import QualityImgBig from "../assets/img/quality1.png";
import QualityImgSmall from "../assets/img/quality2.png";
import { ArrowRight } from "react-feather";

function Premium() {
  return (
    <section id="premium" className="max-w-screen-lg m-auto px-10 pt-24">
      <div className="quality-container">
        <h2 className="section-title">
          We offer a premium quality and better quality preparation just for
          you!
        </h2>
        <div className="quality-content">
          <div className="quality-images">
            <img src={QualityImgBig} alt="" className="quality-img-big" />
            <img src={QualityImgSmall} alt="" className="quality-img-small" />
          </div>
          <div className="quality-data">
            <h1 className="quality-title">Premium Coffee</h1>
            <h2 className="quality-price">$94.99</h2>
            <span className="quality-special">Special Price</span>
            <p className="quality-description">
              We are delighted with our coffee. That's why you get the best
              premium coffee plus the kettle made of resistant materials that
              you see in the image, for a special price.
            </p>
            <div className="quality-buttons">
              <button className="button">Buy now</button>
              <a href="#" className="quality-button">
                See more
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Premium;
