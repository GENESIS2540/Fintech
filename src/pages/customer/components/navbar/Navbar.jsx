import {
  AuditOutlined,
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

const Navbar = () => {
  const content = (
    <div className="p-[10px]">
      <div className="flex gap-[5px] justify-center items-center">
        <img className="h-[40px] w-[40px]" src={UuerOutlined} alt="" />
        <div className="font-semibold">
          <p className="text-[18px]">Hi, Brandon</p>
          <p>user@gmail.com</p>
        </div>
      </div>
      <hr className="my-[10px]" />
      <div className="grid gap-[10px]">
        <div className="flex gap-[5px] opacity-70 hover:opacity-100 cursor-pointer">
          <AuditOutlined />
          <p className="">Dashboard</p>
        </div>
        <div className="flex gap-[5px] opacity-70 hover:opacity-100 cursor-pointer">
          <HomeOutlined />
          <p>Home</p>
        </div>
        <div className="flex gap-[5px] opacity-70 hover:opacity-100 cursor-pointer">
          <UserOutlined />
          <p>Profile</p>
        </div>
        <div className="flex gap-[5px] opacity-70 hover:opacity-100 cursor-pointer">
          <RetweetOutlined />
          <p>Update Credentials</p>
        </div>
      </div>

      <hr className="my-[10px]" />
      <div className="flex gap-[5px] opacity-70 hover:opacity-100 cursor-pointer">
        <LogoutOutlined />
        <p>Logout</p>
      </div>
    </div>
  );

  return (
    <div className="border-b border-stone-400">
      <div className="flex justify-between  px-[20px] items-center h-[100px]">
        <div>
          <p className="text-[20px] font-semibold">Hello Brandon!</p>
        </div>
        <div className="flex gap-[15px] text-[20px]">
          <SearchOutlined className="cursor-pointer" />
          <MailOutlined className="cursor-pointer" />
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
      </div>
    </div>
  );
};

export default Navbar;
