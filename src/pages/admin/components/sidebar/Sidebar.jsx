import {
  faBox,
  faBoxesStacked,
  faCartShopping,
  faCubesStacked,
  faGear,
  faGift,
  faHome,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Sidebar = ({ selectedSidebar, handleSidebarClick, toggleSideMenu }) => {
  return (
    <div className="relative sm:h-[100%] text-center sm:text-left h-max sm:w-[90%] ">
      <div className={`p-[10px] text-[#202223] sidebar sm:block  ${toggleSideMenu ? 'block' : 'hidden'}`}>
        <p className=" p-[10px] uppercase text-[11px] font-semibold text-[11px] font-semibold">
          Quick links
        </p>
        <div className="text-[14px] font-semibold">
          <button
            onClick={() => handleSidebarClick("dashboard")}
            className={
              selectedSidebar === "dashboard" ? "active nav-link" : "nav-link"
            }
          >
            <FontAwesomeIcon className="text-[12px]" icon={faHome} />
            <p>Dashboard</p>
          </button>
          <button
            onClick={() => handleSidebarClick("newProduct")}
            className={
              selectedSidebar === "newProduct" ? "active nav-link" : " nav-link"
            }
          >
            <FontAwesomeIcon className="text-[12px]" icon={faBox} />
            <p>New Product</p>
          </button>
          <button
            onClick={() => handleSidebarClick("newCoupon")}
            className={
              selectedSidebar === "newCoupon" ? "active nav-link" : " nav-link"
            }
          >
            <FontAwesomeIcon className="text-[12px]" icon={faGift} />
            <p>New Coupon</p>
          </button>
        </div>
        <p className="p-[10px] uppercase text-[11px] font-semibold">Catalog</p>
        <div className="text-[14px] font-semibold">
          <button
            onClick={() => handleSidebarClick("products")}
            className={
              selectedSidebar === "products" ? "active nav-link" : " nav-link"
            }
          >
            <FontAwesomeIcon className="text-[12px]" icon={faBox} />
            <p>Products</p>
          </button>
          <button
            onClick={() => handleSidebarClick("categories")}
            className={
              selectedSidebar === "categories" ? "active nav-link" : " nav-link"
            }
          >
            <FontAwesomeIcon className="text-[12px]" icon={faCubesStacked} />
            <p>Categories</p>
          </button>
          <button
            onClick={() => handleSidebarClick("collections")}
            className={
              selectedSidebar === "collections"
                ? "active nav-link"
                : " nav-link"
            }
          >
            <FontAwesomeIcon className="text-[12px]" icon={faBoxesStacked} />
            <p>Collections</p>
          </button>
        </div>
        <p className="p-[10px] uppercase text-[11px] font-semibold">Sale</p>
        <div className="text-[14px] font-semibold">
          <button
            onClick={() => handleSidebarClick("orders")}
            className={
              selectedSidebar === "orders" ? "active nav-link" : " nav-link"
            }
          >
            <FontAwesomeIcon className="text-[12px]" icon={faCartShopping} />
            <p>Orders</p>
          </button>
        </div>
        <p className="p-[10px] uppercase text-[11px] font-semibold">Customer</p>
        <div className="text-[14px] font-semibold">
          <button
            onClick={() => handleSidebarClick("customers")}
            className={
              selectedSidebar === "customers" ? "active nav-link" : " nav-link"
            }
          >
            <FontAwesomeIcon className="text-[12px]" icon={faUsers} />
            <p>Customers</p>
          </button>
        </div>
        <p className="p-[10px] uppercase text-[11px] font-semibold">
          Promotion
        </p>
        <div className="text-[14px] font-semibold">
          <button
            onClick={() => handleSidebarClick("coupons")}
            className={
              selectedSidebar === "coupons" ? "active nav-link" : " nav-link"
            }
          >
            <FontAwesomeIcon className="text-[12px]" icon={faGift} />
            <p>Coupons</p>
          </button>
        </div>
      </div>
      <button onClick={() => handleSidebarClick("settings")}>
        <div className="flex items-center gap-[8px] rounded-[5px] px-[15px] p-[5px] sm:flex hidden cursor-pointer">
          <FontAwesomeIcon className="text-[12px]" icon={faGear} />
          <p className="p-[10px] uppercase text-[11px] font-semibold">
            Setting
          </p>
        </div>
      </button>
      
    </div>
  );
};

export default Sidebar;
