import {
  AuditOutlined,
  BarsOutlined,
  HomeOutlined,
  LogoutOutlined,
  MailOutlined,
  RetweetOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import UuerOutlined from "../../assets/check_balance.jpeg";
import { Popover } from "antd";
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Navbar = ({ handleSidebarVendorClick, handleToggled, toggled }) => {
  const content = (
    <div className="p-[10px]">
      <div className="flex gap-[5px] justify-center items-center">
        <img className="h-[40px] w-[40px]" src={UuerOutlined} alt="" />
        <div className="font-semibold">
          <p className="text-[18px]">Hi, Brandon.</p>
          <p>user@gmail.com</p>
        </div>
      </div>
      <hr className="my-[10px]" />
      <div className="grid gap-[10px]">
        <div onClick={() => handleSidebarVendorClick("dash")} className="flex gap-[5px] opacity-70 transition-all duration-300 ease-in-out hover:opacity-100 cursor-pointer">
          <AuditOutlined />
          <p className="">Dashboard</p>
        </div>
        <Link to='/'>
        <div className="flex gap-[5px] transition-all duration-300 ease-in-out opacity-70 hover:opacity-100 cursor-pointer">
          <HomeOutlined />
          <p>Home</p>
        </div>
        </Link>
        <div onClick={() => handleSidebarVendorClick("account")} className="flex gap-[5px] transition-all duration-300 ease-in-out opacity-70 hover:opacity-100 cursor-pointer">
          <UserOutlined />
          <p>Profile</p>
        </div>
        <div onClick={() => handleSidebarVendorClick("update")} className="flex gap-[5px]  transition-all duration-300 ease-in-out opacity-70 hover:opacity-100 cursor-pointer">
          <RetweetOutlined />
          <p>Update Credentials</p>
        </div>
      </div>

      <hr className="my-[10px]" />
      <div className="flex gap-[5px] cursor-pointer">
        <LogoutOutlined />
        <p>Logout</p>
      </div>
    </div>
  );

  return (
    <div className="border-b border-stone-400">
      <div className="flex justify-between  px-[20px] items-center h-[100px]">
        <div>
        <div className="flex items-center h-[100px] justify-center gap-[5px] cursor-pointer">
        <img src={logo} className="h-[42px] w-[42px]" alt="logo" />
        <p className="font-bold text-[25px] text-[#015FF1">BNPL</p>
      </div>
        </div>
        <div className="md:block hidden">
          <p className="text-[20px] font-semibold">Hello Brandon!</p>
        </div>
        <div className="flex gap-[15px] text-[20px]">
          <SearchOutlined className="cursor-pointer" />
          <button onClick={() => handleSidebarVendorClick("feed")}>
            <MailOutlined className="cursor-pointer" />
          </button>
          <div className="">
            <Popover content={content} placement="leftTop" trigger="click">
              <img
                className="h-[30px] w-[30px] rounded-[100%] cursor-pointer"
                src={UuerOutlined}
                alt=""
              />
            </Popover>
          </div>
        </div>
        <div onClick={handleToggled} className="sm:hidden">
          <FontAwesomeIcon icon={toggled ? faX : faBars}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
