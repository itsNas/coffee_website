import { useState, useEffect } from "react";
import Logo from "../assets/img/logo.png";
import { Menu, X, Sun, Moon } from "react-feather";
import { motion } from "framer-motion";

const handleScroll = () => {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
};

function Navbar() {
  const scrollDirection = handleScroll();
  // toggle hamburger menu
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  // shadow effect on navbar on scroll
  const [top, setTop] = useState(true);
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <nav
      className={`sticky top-0 bg-black ${
        !top && `shadow-lg backdrop-blur-lg`
      } h-[70px] transition-all duration-500 z-[99]`}
    >
      <div className="navbar w-full h-full flex justify-between items-center py-4 px-6">
        <div>
          <a className="flex items-center gap-4" href="/">
            <img
              src={Logo}
              alt="DH"
              className="h-10 hover:opacity-75 transition-all ease-in duration-300 cursor-pointer"
            />
            <p className=" font-extrabold">KONA Kopi</p>
          </a>
        </div>
        {/* NAVBAR AT 768PX & ABOVE */}
        <div>
          <ul className="hidden md:flex md:items-center list-none">
            <li>
              <a href="#hero" className="mr-6">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="mx-6">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="mx-6">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="mx-6">
                Contact
              </a>
            </li>
            {/* <li>
              {darkMode ? (
                <Sun className="ml-6 transition-all ease-in duration-300" />
              ) : (
                <Moon className="ml-6 transition-all ease-in duration-300" />
              )}
            </li> */}
          </ul>
        </div>

        {/* HAMBURGER MENU AT 768PX & LOWER */}
        <div
          onClick={handleNav}
          className={`md:hidden transition-all ease-in-out duration-500 z-20`}
        >
          {!nav ? (
            <Menu
              size={30}
              className="hover:text-slate-400 transition-all ease-in duration-3000 cursor-pointer"
            />
          ) : (
            ""
          )}
          {nav ? (
            <motion.div
              className={`fixed ${
                scrollDirection === "down" ? "top-0" : "top-0"
              } right-0 w-1/2 h-screen bg-black`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-[70px] px-6 flex justify-end items-center">
                <X
                  size={30}
                  className="hover:text-slate-400 transition-all ease-in duration-300 cursor-pointer"
                />
              </div>
              <div className="h-full flex flex-col justify-center items-center">
                <a href="#hero" className="mobile-links">
                  Home
                </a>
                <a href="#about" className="mobile-links">
                  About
                </a>
                <a href="#projects" className="mobile-links">
                  Projects
                </a>
                <a href="#contact" className="mobile-links">
                  Contact
                </a>
                {/* <button
                  onClick={toggleDarkMode}
                  className="w-1/2 m-2 p-3 flex justify-center items-center text-slate-400 hover:text-gray-800 cursor-pointer"
                >
                  {darkMode ? <Sun /> : <Moon />}
                </button> */}
              </div>
            </motion.div>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
