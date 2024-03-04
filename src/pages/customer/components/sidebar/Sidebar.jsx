import React from "react";
import logo from "../../assets/logo.svg";
import {
  DollarOutlined,
  PicLeftOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import CustomCollapse from "./CustomCollapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faLanguage } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="bg-[#f2f7ff] h-[100%] p-[10px]">
      <div className="flex items-center h-[100px] justify-center gap-[5px] cursor-pointer">
        <img src={logo} className="h-[42px] w-[42px]" alt="logo" />
        <p className=" font-bold text-[25px] text-[#015FF1]">BNPL</p>
      </div>
      <div className="grid gap-[10px] ">
        <CustomCollapse
          icon=<ShoppingCartOutlined />
          title="Orders"
          children={
            <div className="grid gap-[8px]">
              <p className="hover:text-[#015FF1] cursor-pointer">Orders</p>
              <p className="hover:text-[#015FF1] cursor-pointer">Downloads</p>
              <p className="hover:text-[#015FF1] cursor-pointer">
                Cancellation Requests
              </p>
              <p className="hover:text-[#015FF1] cursor-pointer">
                Return Requests
              </p>
            </div>
          }
        />
        <CustomCollapse
          icon=<FontAwesomeIcon icon={faGem} />
          title="Offers & rewards"
          children={
            <div className="grid gap-[8px]">
              <p className="hover:text-[#015FF1] cursor-pointer">My Offers</p>
              <p className="hover:text-[#015FF1] cursor-pointer">
                Reward Points
              </p>
              <p className="hover:text-[#015FF1] cursor-pointer">
                Share and Earn
              </p>
            </div>
          }
        />
        <CustomCollapse
          icon=<PicLeftOutlined />
          title="General"
          children={
            <div className="grid gap-[8px]">
              <p className="hover:text-[#015FF1] cursor-pointer">Messages</p>
              <p className="hover:text-[#015FF1] cursor-pointer">My Credits</p>
              <p className="hover:text-[#015FF1] cursor-pointer">Wishlist</p>
              <p className="hover:text-[#015FF1] cursor-pointer">
                Saved Searches
              </p>
            </div>
          }
        />
        <CustomCollapse
          icon=<UserOutlined />
          title="Profile"
          children={
            <div className="grid gap-[8px]">
              <p className="hover:text-[#015FF1] cursor-pointer">My Account</p>
              <p className="hover:text-[#015FF1] cursor-pointer">
                Bank Account
              </p>
              <p className="hover:text-[#015FF1] cursor-pointer">
                Cookie Preferences
              </p>
              <p className="hover:text-[#015FF1] cursor-pointer">
                Manage Addresses
              </p>
              <p className="hover:text-[#015FF1] cursor-pointer">
                Update Credentials
              </p>
            </div>
          }
        />
        <CustomCollapse
          icon=<FontAwesomeIcon icon={faLanguage} />
          title="Language"
          children={
            <div className="grid gap-[8px]">
              <p className="hover:text-[#015FF1] cursor-pointer">English</p>
              <p className="hover:text-[#015FF1] cursor-pointer">Arabic</p>
              <p className="hover:text-[#015FF1] cursor-pointer">Spanish</p>
            </div>
          }
        />
        <CustomCollapse
          icon=<DollarOutlined />
          title="Currency"
          children={
            <div className="grid gap-[8px]">
              <p className="hover:text-[#015FF1] cursor-pointer">KSH</p>
              <p className="hover:text-[#015FF1] cursor-pointer">USD</p>
              <p className="hover:text-[#015FF1] cursor-pointer">INR</p>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Sidebar;
