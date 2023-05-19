import React from "react";
import LogoCoffee1 from "../assets/img/logocoffee1.png";
import LogoCoffee2 from "../assets/img/logocoffee2.png";
import LogoCoffee3 from "../assets/img/logocoffee3.png";
import LogoCoffee4 from "../assets/img/logocoffee4.png";
import LogoCoffee5 from "../assets/img/logocoffee5.png";

function Logos() {
  return (
    <section id="logos" className="max-w-screen-lg px-10 pt-10 pb-10 bg-white">
      <div className="grid grid-cols-3 items-center justify-center gap-x-8 gap-y-2 border-t border-t-gray-300 pt-10">
        <img src={LogoCoffee1} alt="coffee 1" className="logo-img" />
        <img src={LogoCoffee2} alt="coffee 1" className="logo-img" />
        <img src={LogoCoffee3} alt="coffee 1" className="logo-img" />
        <img src={LogoCoffee4} alt="coffee 1" className="logo-img" />
        <img src={LogoCoffee5} alt="coffee 1" className="logo-img" />
      </div>
    </section>
  );
}

export default Logos;
