import React from "react";
import "./customer.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Orders from "./components/orders/Orders";

const Customer = () => {
  return (
    <div className="bg-[#f6f6f7] my-[50px]">
      <div className="grid grid-cols-4 w-[90vw] mx-auto shadow-custom">
        <div className="w-[100%]">
          <Sidebar />
        </div>
        <div className="col-span-3 bg-white">
          <div>
            <Navbar />
          </div>
          <div className="px-[40px]">
            <Orders />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
