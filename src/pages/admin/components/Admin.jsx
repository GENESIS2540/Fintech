import React, { useState } from "react";
import { HomeOutlined, MenuOutlined, SettingOutlined } from "@ant-design/icons";
import "./admin.css";
import AdminNavbar from "./adminNavbar/AdminNavbar";
import Dashboard from "./dashboard/Dashboard";
import Customers from "./customers/Customers";
import NewProduct from "./newProduct/NewProduct";
import NewCoupon from "./newCoupon/NewCoupon";
import Products from "./products/Products";
import Categories from "./categories/Categories";
import Collections from "./collections/Collections";
import Orders from "./orders/orders";
import Coupons from "./coupons/Coupons";
import Settings from "./settings/Settings";
import NewCollection from "./collections/NewCollection";
import Sidebar from "./sidebar/Sidebar";
import { Affix } from "antd";

const Admin = () => {
  const [selectedSidebar, setSelectedSidebar] = React.useState("dashboard");
  const [toggleSideMenu, setToggleSideMenu] = useState(false);

  const handleSideMenuToggle = () => {
    setToggleSideMenu(!toggleSideMenu);
  };

  const handleSidebarClick = (setting) => {
    setSelectedSidebar(setting);
    setToggleSideMenu(!toggleSideMenu);
  };


  return (
    <div>
      
      <div className="md:h-[100vh] overflow-hidden">
        <AdminNavbar />
        <main className="dashboard bg-[#f6f6f7] md:h-[88vh]">
          <Sidebar
            selectedSidebar={selectedSidebar}
            handleSidebarClick={handleSidebarClick}
            toggleSideMenu={toggleSideMenu}
          />
          <div className="overflow-auto">
            {selectedSidebar === "dashboard" && <Dashboard />}
            {selectedSidebar === "customers" && <Customers />}
            {selectedSidebar === "newProduct" && (
              <NewProduct handleSidebarClick={handleSidebarClick} />
            )}
            {selectedSidebar === "newCoupon" && (
              <NewCoupon handleSidebarClick={handleSidebarClick} />
            )}
            {selectedSidebar === "products" && <Products />}
            {selectedSidebar === "categories" && <Categories />}
            {selectedSidebar === "collections" && (
              <Collections handleSidebarClick={handleSidebarClick} />
            )}
            {selectedSidebar === "orders" && <Orders />}
            {selectedSidebar === "coupons" && (
              <Coupons handleSidebarClick={handleSidebarClick} />
            )}
            {selectedSidebar === "settings" && <Settings />}
            {selectedSidebar === "newCollection" && (
              <NewCollection handleSidebarClick={handleSidebarClick} />
            )}
          </div>
        </main>
      </div>
      <Affix offsetBottom={-5} onChange={(affixed) => console.log(affixed)}>
        <div className="flex sm:hidden justify-between w-[100vw] bg-white p-[20px] shadow-custom">
          <div onClick={() => handleSidebarClick("dashboard")} className="grid place-items-center gap-[4px]">
            <HomeOutlined />
            <p>home</p>
          </div>
          <div
            onClick={handleSideMenuToggle}
            className="grid place-items-center gap-[4px]"
          >
            <MenuOutlined />
            <p>Menu</p>
          </div>
          <div onClick={() => handleSidebarClick("settings")} className="grid place-items-center gap-[4px]">
            <SettingOutlined />
            <p>Settings</p>
          </div>
        </div>
      </Affix>
    </div>
  );
};

export default Admin;
