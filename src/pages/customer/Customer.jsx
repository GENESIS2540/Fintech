import React from "react";
import "./customer.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Orders from "./components/orders/Orders";
import Downloads from "./components/orders/Downloads";
import Cancellation from "./components/orders/requests/Cancellation";
import Return from "./components/orders/requests/Return";

const Customer = () => {
  const [selectedSidebarCustomer, setSelectedSidebarCustomer] =
    React.useState("orders");

  const handleSidebarCustomerClick = (setting) => {
    setSelectedSidebarCustomer(setting);
  };

  return (
    <div className="bg-[#f6f6f7] my-[50px]">
      <div className="grid grid-cols-4 w-[90vw] mx-auto min-h-[85vh] shadow-custom">
        <div className="w-[100%]">
          <Sidebar
            handleSidebarCustomerClick={handleSidebarCustomerClick}
            selectedSidebarCustomer={selectedSidebarCustomer}
          />
        </div>
        <div className="col-span-3 bg-white">
          <div>
            <Navbar />
          </div>
          <div className="px-[40px]">
            {selectedSidebarCustomer === "orders" && <Orders />}
            {selectedSidebarCustomer === "downloads" && <Downloads />}
            {selectedSidebarCustomer === "cancellation" && <Cancellation />}
            {selectedSidebarCustomer === "return" && <Return />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
