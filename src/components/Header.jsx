import React from "react";

// Icons
import menu from "../assets/menu.svg";
import cross from "../assets/cross.svg";
import { useState } from "react";

const Header = props => {
  const [isMenuOpen, setMenu] = useState(false);

  return (
    <header className="text-primary p-8 pb-0 lg:pr-16 relative flex">
      <p className="logo z-10">Edie</p>
      <img
        src={cross}
        alt=""
        className={`w-10 z-10 ml-auto cursor-pointer lg:hidden ${isMenuOpen ? "block" : "hidden"}`}
        onClick={() => setMenu(s => !s)}
      />
      <img
        src={menu}
        alt=""
        className={`w-10 z-10 ml-auto cursor-pointer lg:hidden ${!isMenuOpen ? "menu" : "hidden"}`}
        onClick={() => setMenu(s => !s)}
      />
      <ul className={`absolute w-full left-0 bg-white space-y-5 shadow-lg p-8 text-primary font-medium text-base md:text-lg lg:text-xl ${isMenuOpen ? "block" : "hidden"} lg:relative lg:w-auto lg:flex lg:top-0 lg:shadow-none lg:space-y-0 lg:space-x-16 lg:p-0 lg:ml-auto`} style={{top: "5rem"}}>  
        <li className="hover:text-brand">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-brand">
          <a href="#services">Services</a>
        </li>
        <li className="hover:text-brand">
          <a href="#our_works">Our Works</a>
        </li>
        <li className="hover:text-brand">
          <a href="#clients">Clients</a>
        </li>
        <li className="hover:text-brand">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;