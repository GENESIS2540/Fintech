import React from "react";
import logo from "../../assets/svgs/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav className="grid bg-white p-[10px] gap-[10px] place-content-center grid-cols-2 sm:grid-cols-3 md:h-[12vh] shadow-lg">
      <Link to={"/"} className="flex  items-center gap-[5px] cursor-pointer">
        <img className="h-[40px] w-[40px]" src={logo} alt="logo" />
        <p className=" font-bold text-[25px] text-[#015FF1]">BNPL</p>
      </Link>
      <div className="items-center sm:col-span-1 col-span-2 order-last flex relative">
        <FontAwesomeIcon className="absolute pl-[10px]" icon={faSearch} />
        <input
          className="bg-[#f1f2f3] sm:w-[400px] w-[100%] rounded px-[40px] py-[5px] outline-none focus:border-[#015FF1] border-2"
          type="search"
          name="search"
          placeholder="Search"
        />
      </div>
      <div className="flex place-self-end	 sm:order-last items-center justify-center rounded-[50%] border-[#015FF1] border-2 h-[32px] w-[32px] cursor-pointer ">
        <FontAwesomeIcon className="text-[20px]" icon={faUser} />
      </div>
    </nav>
  );
};

export default AdminNavbar;
