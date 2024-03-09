import React from "react";
import "./customer.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Orders from "./components/orders/Orders";
import Downloads from "./components/orders/downloads/Downloads";
import Cancellation from "./components/orders/requests/Cancellation";
import Return from "./components/orders/requests/Return";
import CheckBalance from "./components/profile/checkBalance/checkBalance";
import BankAccount from "./components/profile/bankAccount/BankAccount";
import { HomeOutlined, MenuOutlined, SettingOutlined } from "@ant-design/icons";
import { Affix } from "antd";
import Cookie from "./components/profile/cookie/Cookie";
import ManageAddres from "./components/profile/address/ManageAddres";
import Update from "./components/profile/updateCredentials/Update";
import Offers from "./components/offers/Offers";
import Rewards from "./components/rewards/Rewards";
import Share from "./components/share/Share";

const Customer = () => {
  const [selectedSidebarCustomer, setSelectedSidebarCustomer] =
    React.useState("orders");

  const handleSidebarCustomerClick = (setting) => {
    setSelectedSidebarCustomer(setting);
  };

  return (
    <div className="bg-[#f6f6f7]">
      <div className="grid sm:grid-cols-4 w-[100%] mx-auto min-h-[85vh] shadow-custom">
        <div className="w-[100%] hidden sm:block">
          <Sidebar
            handleSidebarCustomerClick={handleSidebarCustomerClick}
            selectedSidebarCustomer={selectedSidebarCustomer}
          />
        </div>
        <div className="col-span-3 bg-white">
          <div>
            <Navbar />
          </div>
          <div className="sm:px-[40px] px-[20px] mb-[20px]">
            {selectedSidebarCustomer === "orders" && <Orders />}
            {selectedSidebarCustomer === "downloads" && <Downloads />}
            {selectedSidebarCustomer === "cancellation" && <Cancellation />}
            {selectedSidebarCustomer === "return" && <Return />}
            {selectedSidebarCustomer === "account" && <CheckBalance />}
            {selectedSidebarCustomer === "bank" && <BankAccount />}
            {selectedSidebarCustomer === "cookie" && <Cookie />}
            {selectedSidebarCustomer === "address" && <ManageAddres />}
            {selectedSidebarCustomer === "update" && <Update />}
            {selectedSidebarCustomer === "offers" && <Offers />}
            {selectedSidebarCustomer === "reward" && <Rewards />}
            {selectedSidebarCustomer === "share" && <Share />}
          </div>
        </div>
      </div>
      <Affix
        className="w-[100vw]"
        offsetBottom={-5}
        onChange={(affixed) => console.log(affixed)}
      >
        <div className="flex sm:hidden justify-between w-[100vw] uppercase font-semibold bg-white p-[20px] shadow-custom">
          <div
            onClick={() => handleSidebarCustomerClick("dashboard")}
            className="grid place-items-center gap-[4px]"
          >
            <HomeOutlined />
            <p>home</p>
          </div>
          <div className="grid place-items-center gap-[4px]">
            <MenuOutlined />
            <p>Menu</p>
          </div>
          <div
            onClick={() => handleSidebarCustomerClick("settings")}
            className="grid place-items-center gap-[4px]"
          >
            <SettingOutlined />
            <p>Settings</p>
          </div>
        </div>
      </Affix>
    </div>
  );
};

export default Customer;
