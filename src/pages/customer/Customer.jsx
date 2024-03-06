import React from "react";
import "./customer.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Orders from "./components/orders/Orders";
import Downloads from "./components/orders/Downloads";
import Cancellation from "./components/orders/requests/Cancellation";
import Return from "./components/orders/requests/Return";
import CheckBalance from "./components/profile/checkBalance/checkBalance";
import BankAccount from "./components/profile/bankAccount/BankAccount";

const Customer = () => {
  const [selectedSidebarCustomer, setSelectedSidebarCustomer] =
    React.useState("orders");

  const handleSidebarCustomerClick = (setting) => {
    setSelectedSidebarCustomer(setting);
  };

  return (
    <div className="bg-[#f6f6f7]">
      <div className="grid grid-cols-4 w-[100%] mx-auto min-h-[85vh] shadow-custom">
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
            {selectedSidebarCustomer === "account" && <CheckBalance/>}
            {selectedSidebarCustomer === "bank" && <BankAccount/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
