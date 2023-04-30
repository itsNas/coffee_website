import React from "react";
import ScrollImg from "../assets/img/scroll.png";
import HomeImg from "../assets/img/home.png";

function Home() {
  return (
    <section id="home" className="w-full h-screen">
      <div className="home-container">
        <div className="content-container">
          <h1 className="">
            Choose Your Favorite Coffee and Enjoy<span>.</span>
          </h1>
          <p className="home-description">
            Buy the best and delicious coffees.
          </p>
          <div className="data">
            <div className="data-group">
              <h2 className="data-number">120K</h2>
              <h3 className="data-title">Testimonials</h3>
              <p className="data-description">
                Testimonials from various customers who trust us.
              </p>
            </div>
            <div className="data-group">
              <h2 className="data-number">340+</h2>
              <h3 className="data-title">Exclusive Product</h3>
              <p className="data-description">
                Premium preparation with quality ingredients.
              </p>
            </div>
          </div>
          <a href="#specialty">
            <img src={ScrollImg} alt="scroll" className="" />
          </a>
        </div>
      </div>
      <img src={HomeImg} alt="home" />
    </section>
  );
}

export default Home;
