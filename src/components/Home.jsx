import React from "react";
import ScrollImg from "../assets/img/scroll.png";
import HomeImg from "../assets/img/home.png";
import Specialty from "./Specialty";

function Home() {
  return (
    <section
      id="home"
      className="mt-10 grid sm:grid-cols-2 items-stretch relative "
    >
      <div className="home-container p-10 bg-gradient-to-b from-zinc-800 to-neutral-900">
        <div className="relative h-full lg:m-auto lg:px-10 lg:flex lg:flex-col lg:items-center lg justify-center">
          <h1 className="text-slate-50 text-4xl mb-5">
            Choose Your Favorite Coffee and Enjoy<span>.</span>
          </h1>
          <p className="mb-8">Buy the best and delicious coffees.</p>
          <div className="data border-t-2 border-gray-600 pt-8 grid grid-cols-2 gap-x-6">
            <div className="data-group">
              <h2 className="data-number">120K</h2>
              <h3 className="data-title text-slate-50">Testimonials</h3>
              <p className="data-description">
                Testimonials from various customers who trust us.
              </p>
            </div>
            <div className="data-group">
              <h2 className="data-number">340+</h2>
              <h3 className="data-title text-slate-50">Exclusive Product</h3>
              <p className="data-description">
                Premium preparation with quality ingredients.
              </p>
            </div>
          </div>
          <a href="#specialty">
            <img
              src={ScrollImg}
              alt="scroll"
              className="absolute w-24 bottom-[-7rem] left-0 right-0 my-0 mx-auto animate-[bounce_4s_ease-in-out_infinite] sm:-mr-20 sm:top-1/2"
            />
          </a>
        </div>
      </div>
      <img src={HomeImg} alt="home" className="" />
    </section>
  );
}

export default Home;
