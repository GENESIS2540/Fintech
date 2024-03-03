import React from "react";
import logo from "../../assets/logo.svg";
import { DollarOutlined, PicLeftOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import CustomCollapse from "./CustomCollapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faLanguage } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="bg-white h-[100%] p-[10px]">
      <div className="flex items-center h-[100px] justify-center gap-[5px] cursor-pointer">
        <img src={logo} className="h-[42px] w-[42px]" alt="logo" />
        <p className=" font-bold text-[25px] text-[#015FF1]">BNPL</p>
      </div>
      <div className="grid gap-[10px]">
        <CustomCollapse
          icon=<ShoppingCartOutlined />
          title="Orders"
          children={
            <div className="grid gap-[8px]">
              <p>Orders</p>
              <p>Downloads</p>
              <p>Cancellation Requests</p>
              <p>Return Requests</p>
            </div>
          }
        />
        <CustomCollapse
          icon=<FontAwesomeIcon icon={faGem} />
          title="Offers & rewards"
          children={
            <div className="grid gap-[8px]">
              <p>My Offers</p>
              <p>Reward Points</p>
              <p>Share and Earn</p>
            </div>
          }
        />
        <CustomCollapse
          icon= <PicLeftOutlined />
          title="General"
          children={
            <div className="grid gap-[8px]">
              <p>Messages</p>
              <p>My Credits</p>
              <p>Wishlist</p>
              <p>Saved Searches</p>
            </div>
          }
        />
        <CustomCollapse
          icon= <UserOutlined />
          title="Profile"
          children={
            <div className="grid gap-[8px]">
              <p>My Account</p>
              <p>Bank Account</p>
              <p>Cookie Preferences</p>
              <p>Manage Addresses</p>
              <p>Update Credentials</p>
            </div>
          }
        />
        <CustomCollapse
          icon=<FontAwesomeIcon icon={faLanguage}/>
          title="Language"
          children={
            <div className="grid gap-[8px]">
              <p>English</p>
              <p>Arabic</p>
              <p>Spanish</p>
            </div>
          }
        />
        <CustomCollapse
          icon= <DollarOutlined />
          title="Currency"
          children={
            <div className="grid gap-[8px]">
              <p>KSH</p>
              <p>USD</p>
              <p>INR</p>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Sidebar;
