import React from "react";
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

const Admin = () => {
  const [selectedSidebar, setSelectedSidebar] = React.useState("dashboard");
  const handleSidebarClick = (setting) => {
    setSelectedSidebar(setting);
  };

  return (
    <div>
      <div className="md:h-[100vh] overflow-hidden">
        <AdminNavbar />
        <main className="dashboard bg-[#f6f6f7] md:h-[88vh]">
          <Sidebar
            selectedSidebar={selectedSidebar}
            handleSidebarClick={handleSidebarClick}
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
    </div>
  );
};

export default Admin;
