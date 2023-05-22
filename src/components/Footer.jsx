import React from "react";
import { ArrowRight } from "react-feather";
import { footerData } from "../constant/FooterData";

function Footer() {
  return (
    <section>
      <div className="footer-container">
        <h1 className="footer-title">Coffee.</h1>
        <div className="footer-content grids">
          <div className="footer-data">
            <p className="footer-description">Subscribe to our newsletter</p>
            <div className="footer-newsletter">
              <input
                type="email"
                placeholder="Your email address"
                className="footer-input"
              />
              <button className="footer-button">
                <ArrowRight />
              </button>
            </div>
          </div>
          {footerData.map((footer) => (
            <div className="footer-data" key={footer.id}>
              <h2 className="footer-subtitle">{footer.subtitle}</h2>
              <p className="footer-information">{footer.information}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;
