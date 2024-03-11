import React, { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faDoorOpen,
  faPhoneAlt,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import salemLogo from "../../assets/brand/logo.svg";
import business_icon from "../../assets/SVGs/business.svg";

const Navbar = ({ handleButtonClick }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="bg-white">
      <div className="md:flex hidden mx-[auto] justify-between w-[90%] md:w-[70%] py-[10px] mt-[5px]">
        <div className="flex font-bold gap-[5px] items-center justify-center">
          <img
            className="cursor-pointer"
            src={business_icon}
            alt="business_icon"
          />
          <p>Business</p>
        </div>
        <div className="flex gap-[20px]">
          <span className="flex text-[#015FF1] gap-[5px] items-center justify-center">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <p>1-800-356-6522</p>
          </span>
          <div className="flex gap-[5px] items-center justify-center">
            <FontAwesomeIcon icon={faDoorOpen} />
            <p>Sign up/Login</p>
          </div>
        </div>
      </div>
      <hr className="md:w-[70%] w-[90%] mx-[auto]" />
      <div className="flex justify-between md:w-[70%] w-[90%] mx-[auto] py-[10px]">
        <div className="flex items-center justify-center gap-[5px]">
          <img
            onClick={() => handleButtonClick("landingPage")}
            className="w-[45px] cursor-pointer"
            src={salemLogo}
            alt="Salem logo"
          />
          <p
            onClick={() => handleButtonClick("landingPage")}
            className="text-[40px] font-bold text-[#015FF1] cursor-pointer"
          >
            BNPL
          </p>
        </div>
        <div
        className={`${
          toggle ? "fixed md:hidden inset-0 bg-black opacity-50 z-[99]" : ""
        }`}
        onClick={handleToggle}
      ></div>
        <ul className="nav-bar-items md:flex grid absolute w-[300px] h-[300px] bg-white right-0 mx-auto z-[999] top-[100px] items-center justify-center gap-[20px] font-semibold">
          <li onClick={() => handleButtonClick("landingPage")}>Home</li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500}>
              Services
            </Link>
          </li>
          <li>
            <Link to="faqs" smooth={true} duration={500}>
              FAQs
            </Link>
          </li>
          <li>
            <Link to="faqs" smooth={true} duration={500}>
              Refer a Friend
            </Link>
          </li>
        </ul>
        <div className="self-center">
          <button
            onClick={() => handleButtonClick("login")}
            className="bg-[#015FF1] text-white rounded w-[95px] uppercase h-[34px] hover:bg-transparent hover:border border-[#015FF1] hover:text-black transition-background duration-150"
          >
            Sign in
          </button>
        </div>
        <button onClick={handleToggle} className="z-20">
          {toggle ? (
            <FontAwesomeIcon icon={faX} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>        
      </div>
    </nav>
  );
};

export default Navbar;
