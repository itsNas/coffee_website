import React from "react";
import Specialty1 from "../assets/img/specialty1.png";
import Specialty2 from "../assets/img/specialty2.png";
import Specialty3 from "../assets/img/specialty3.png";

function Specialty() {
  return (
    <section id="specialty" className="w-full h-screen">
      <div className="specialty-container">
        <div className="specialty-box">
          <h2 className="section-title">
            Specialty coffees that make you happy and cheer you up!
          </h2>
          <a href="#" className="button-specialty">
            See more
          </a>
        </div>
        <div className="specialty-category">
          <div className="specialty-group">
            <img src={Specialty1} alt="specialty 1" className="specialty-img" />
            <h3 className="specialty-title">Selected Coffee</h3>
            <p className="specialty-description">
              We select the best premium coffee, for a true taste.
            </p>
          </div>
          <div className="specialty-group">
            <img src={Specialty2} alt="specialty 1" className="specialty-img" />
            <h3 className="specialty-title">Delicious Cookies</h3>
            <p className="specialty-description">
              Enjoy your coffee with some hot cookies
            </p>
          </div>
          <div className="specialty-group">
            <img src={Specialty3} alt="specialty 1" className="specialty-img" />
            <h3 className="specialty-title">Enjoy at Home</h3>
            <p className="specialty-description">
              Enjoy the best coffee in the comfort of your home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specialty;
