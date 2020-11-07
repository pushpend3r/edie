import React from "react";

// Icons
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";

const Footer = props => {
  return (
    <footer
      className="padded py-10 space-y-20"
      style={{ backgroundColor: "#100E1D" }}
    >
      <div className="flex flex-col md:flex-row md:justify-between space-y-10 md:space-y-0 text-white">
        <ul className="w-auto md:w-1/4 space-y-4">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#our_works">Our Works</a>
          </li>
          <li>
            <a href="#clients">Clients</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="w-auto md:w-1/4">
          <p className="logo">Edie</p>
          <div className="space-x-3">
            <img src={instagram} alt="" className="inline-block" />
            <img src={twitter} alt="" className="inline-block" />
            <img src={linkedin} alt="" className="inline-block" />
          </div>
        </div>
        <div className="w-auto md:w-1/4">
          <p className="text-sm my-2">Want us to contact you?</p>
          <form>
            <div className="bg-white p-1 pl-4 flex" style={{ borderRadius: "12px", maxWidth: "300px" }}>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="enter email.."
                className="text-black w-8/12"
              />
              <button type="button" className="bg-brand ml-auto">
                Join
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="myInfo text-center font-medium"
        style={{ color: "#A9A9A9" }}
      >
        Pushpender Singh @ <a href="">DevChallenges.io</a>
      </div>
    </footer>
  );
};

export default Footer;
