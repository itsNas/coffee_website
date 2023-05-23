import React from "react";
import { ArrowRight, Facebook } from "react-feather";
import { footerData } from "../constant/FooterData";

function Footer() {
  return (
    <section className="max-w-screen-lg p-10 bg-black">
      <div className="footer-container">
        <h1 className=" text-white text-2xl mb-8">Coffee.</h1>
        <div className="grids gap-x-10 border-b border-gray-500">
          <div className="footer-data">
            <p className="mb-3">Subscribe to our newsletter</p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="border-none outline-none py-5 px-4 rounded w-3/4 text-black"
              />
              <button className=" p-3 text-3xl rounded inline-flex bg-[#D38C22] py-5">
                <ArrowRight className="text-black hover:translate-x-1 duration-300" />
              </button>
            </div>
          </div>
          {footerData.map((footer) => (
            <div className="footer-data" key={footer.id}>
              <h2 className="text-white text-xl">{footer.subtitle}</h2>
              <p className="footer-information">{footer.information}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center mt-6">
          <ul className="flex justify-center mb-2 -ml-5">
            {footerData.map((footer) => (
              <li className="p-1">
                <a
                  href={footer.link}
                  className="text-white hover:text-[#D38C22] duration-300"
                  key={footer.id}
                  target="-blank"
                >
                  {footer.icon}
                </a>
              </li>
            ))}
          </ul>
          <div className="footer-copy">
            &#169; NasrullahDev. All rights reserved
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
