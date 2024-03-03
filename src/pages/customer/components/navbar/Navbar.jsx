import { MailOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";

const Navbar = () => {
  return (
    <div className="border-b-2">
      <div className="flex justify-between  px-[20px] items-center h-[100px]">
        <div>
          <p className="text-[20px] font-semibold">Hello Brandon!</p>
        </div>
        <div className="flex gap-[15px] text-[20px]">
          <SearchOutlined className="cursor-pointer" />
          <MailOutlined className="cursor-pointer" />
          <div>
            <UserOutlined className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
