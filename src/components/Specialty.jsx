import React from "react";
import Specialty1 from "../assets/img/specialty1.png";
import Specialty2 from "../assets/img/specialty2.png";
import Specialty3 from "../assets/img/specialty3.png";

function Specialty() {
  return (
    <section id="specialty" className="px-8 pt-24 lg:px-20 xl:px-32 xl:mb-20">
      <div className="specialty-container">
        <div className="xl:flex items-center gap-32 mb-20">
          <h2 className="section-title xl:my-auto">
            Specialty coffees that make you happy and cheer you up!
          </h2>
          <a href="#" className="button">
            See more
          </a>
        </div>
        <div className="specialty-category mt-16 grid grid-cols-[200px] justify-center gap-y-10 md:grid-cols-3 gap-x-10">
          <div className="specialty-group md:items-start md:text-start">
            <img src={Specialty1} alt="specialty 1" className="specialty-img" />
            <h3 className="specialty-title">Selected Coffee</h3>
            <p className="specialty-description">
              We select the best premium coffee, for a true taste.
            </p>
          </div>
          <div className="specialty-group md:items-start md:text-start">
            <img src={Specialty2} alt="specialty 1" className="specialty-img" />
            <h3 className="specialty-title">Delicious Cookies</h3>
            <p className="specialty-description">
              Enjoy your coffee with some hot cookies
            </p>
          </div>
          <div className="specialty-group md:items-start md:text-start">
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
