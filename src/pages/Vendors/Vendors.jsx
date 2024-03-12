import React from "react";
import "./Vendors.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Orders from "./components/Service/Orders";
import Downloads from "./components/Service/AddService";
import Cancellation from "./components/Service/requests/Cancellation";
import Return from "./components/Service/requests/Return";
import CheckBalance from "./components/profile/checkBalance/checkBalance";
import BankAccount from "./components/profile/bankAccount/BankAccount";
import { HomeOutlined, MenuOutlined, SettingOutlined } from "@ant-design/icons";
import { Affix } from "antd";
import Cookie from "./components/profile/cookie/Cookie";
import ManageAddres from "./components/profile/address/ManageAddres";
import Update from "./components/profile/updateCredentials/Update";
import ServiceList from "./components/Service/ServiceList";
import PaymentRegistration from "./components/profile/payment/PaymentRegistration";
import MyCredits from "./components/General/MyCredits";
import Dashboard from "./components/dashboard/Dashboard";




const Vendors = () => {
  const [selectedSidebarVendor, setSelectedSidebarVendor] =
    React.useState("orders");

  const handleSidebarVendorClick = (setting) => {
    setSelectedSidebarVendor(setting);
  };

  return (
    <div className="bg-[#f6f6f7]">
      <div className="flex w-[100%] mx-auto min-h-[85vh] shadow-custom">
        <div className="w-[18%] hidden sm:block">
          <Sidebar
            handleSidebarVendorClick={handleSidebarVendorClick}
            selectedSidebarVendor={selectedSidebarVendor}
          />
        </div>
        <div className="w-[82%] bg-white">
          <div>
            <Navbar />
          </div>
          <div className="sm:px-[40px] px-[20px] mb-[20px]">
            {selectedSidebarVendor === "orders" && <Orders />}
            {selectedSidebarVendor === "downloads" && <Downloads />}
            {selectedSidebarVendor === "cancellation" && <Cancellation />}
            {selectedSidebarVendor === "return" && <Return />}
            {selectedSidebarVendor === "account" && <CheckBalance />}
            {selectedSidebarVendor === "bank" && <BankAccount />}
            {selectedSidebarVendor === "cookie" && <Cookie />}
            {selectedSidebarVendor === "address" && <ManageAddres />}
            {selectedSidebarVendor === "update" && <Update />}
            {selectedSidebarVendor === "service" && <ServiceList />}
            {selectedSidebarVendor === "registration" && <PaymentRegistration />}
            {selectedSidebarVendor === "credits" && <MyCredits />}
            {selectedSidebarVendor === "dash" && <Dashboard />}
           {/* {selectedSidebarVendor === "charts" && <Charts />} */}
           
           
              </div>
        </div>
      </div>
      <Affix className="w-[100vw]" offsetBottom={-5} onChange={(affixed) => console.log(affixed)}>
        <div className="flex sm:hidden justify-between w-[100vw] uppercase font-semibold bg-white p-[20px] shadow-custom">
          <div
            onClick={() => handleSidebarVendorClick("dashboard")}
            className="grid place-items-center gap-[4px]"
          >
            <HomeOutlined />
            <p>home</p>
          </div>
          <div
            className="grid place-items-center gap-[4px]"
          >
            <MenuOutlined />
            <p>Menu</p>
          </div>
          <div
            onClick={() => handleSidebarVendorClick("settings")}
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

export default Vendors;
