import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import salemLogo from "../../Assets/brand/logo.svg";
import business_icon from "../../Assets/SVGs/business.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("login")
  }
  const handleClick = () => {
    navigate("/")
  }
  const handleSignup = () => {
    navigate("signup")
  }

  return (
    <nav>
      <div className="flex mx-[auto] justify-between w-[70%] py-[10px] mt-[5px]">
        <div className="flex font-bold gap-[5px] items-center justify-center">
          <img
            className="cursor-pointer"
            src={business_icon}
            alt="business_icon"
          />{" "}
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
      <hr className="w-[70%] mx-[auto]" />
      <div className="flex justify-between w-[70%] mx-[auto] py-[10px]">
        <div className="flex items-center justify-center gap-[5px]">
          <img
          onClick={handleClick}
            className="w-[45px] cursor-pointer"
            src={salemLogo}
            alt="Salem logo"
          />
          <p onClick={handleClick} className="text-[40px] font-bold text-[#015FF1] cursor-pointer">
            BNPL
          </p>
        </div>
        <ul className="nav-bar-items flex items-center justify-center gap-[20px] font-semibold">
          <li onClick={handleClick}>Home</li>
          <li onClick={handleSignup}>Enroll</li>
          <li>About Us</li>
          <li>Services</li>
          <li>FAQs</li>
          <li>Refer a Friend</li>
        </ul>
        <div className="self-center">
          <button onClick={handleLogin} className="bg-[#015FF1] text-white rounded w-[95px] uppercase h-[34px] hover:bg-transparent hover:border border-[#015FF1] hover:text-black transition-background duration-150">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
