import React from "react";
import { ArrowRight } from "react-feather";
import { footerData } from "../constant/FooterData";
import ScrollToTop from "react-scroll-to-top";

function Footer() {
  return (
    <section className="p-10 bg-black lg:px-20 xl:px-32">
      <ScrollToTop
        smooth
        className=" rounded-full flex justify-center items-center bg-slate-10/90 p-3 bg-[#D38C22]"
      />
      <div className="footer-container">
        <h1 className=" text-white text-2xl mb-8">Coffee.</h1>
        <div className="grids gap-x-10 border-b border-gray-500 xl:grid-cols-4 items-center">
          <div className="footer-data">
            <p className="mb-3">Subscribe to our newsletter</p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="border-none outline-none py-3 px-4 rounded w-3/4 text-black"
              />
              <button className=" p-3 text-3xl rounded inline-flex bg-[#D38C22] py-3">
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
              <li className="p-1" key={footer.id}>
                <a
                  href={footer.link}
                  className="text-white hover:text-[#D38C22] duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
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
