import React, { useState } from "react";
import Header from "../../common/Header";
import Search from "../../common/Search";
import { BiFilter } from "react-icons/bi";
import Collapsed from "./Collapse";
import { Divider, Table } from "antd";
const Cancellation = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  };

  return (
    <div>
      <Header
        title={"Cancellation Requests"}
        category={"Order Cancellation Requests"}
      />
      <div className="shadow-custom">
        <div className="flex gap-[30px] p-[20px]">
          <Search />
          <BiFilter onClick={toggleCollapse} className="w-[40px] h-[40px] cursor-pointer"/>
          <button className={`transition-all ease-in-out duration-300 w-max font-semibold px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white ${isCollapsed ? "bg-[#f2f7ff] text-[black]" : "shadow-btn"}`}>
            Search
          </button>
        </div>
        <Divider />
        {isCollapsed && <Collapsed />}
        <div className="p-[20px]">
         <Table />
        </div>
       
      </div>
    </div>
  );
};

export default Cancellation;
