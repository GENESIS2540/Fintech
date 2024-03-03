import React from "react";
import "./customer.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Orders from "./components/orders/Orders";

const Customer = () => {
  return (
    <div className="flex justify-center overflow-hidden h-[100vh] shadow-custom items-center bg-[#f6f6f7]">
      <div className="grid grid-cols-4 h-[90vh] w-[90vw]">
        <div className="border-2 w-[100%]">
          <Sidebar />
        </div>
        <div className="col-span-3 bg-white">
          <div>
            <Navbar />
          </div>
          <div className="px-[20px] overflow-auto">
            <Orders />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
