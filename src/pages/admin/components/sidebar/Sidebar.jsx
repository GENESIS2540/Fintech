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
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" sm:h-[100%] h-max sm:w-[90%] ">
      <div className="p-[10px] text-[#202223] sidebar sm:block hidden">
        <p className=" p-[10px] uppercase text-[11px] font-semibold text-[11px] font-semibold">
          Quick links
        </p>
        <div className="text-[14px] font-semibold">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "active nav-link" : " nav-link"
            }
          >
            <FontAwesomeIcon className="text-[12px]" icon={faHome} />
            <p>Dashboard</p>
          </NavLink>
          <NavLink
            to={"/newProduct"}
            className={({ isActive }) =>
              isActive ? "active nav-link" : " nav-link"
            }
          >
            <FontAwesomeIcon className="text-[12px]" icon={faBox} />
            <p>New Product</p>
          </NavLink>
          <NavLink
            to={"/newCoupon"}
            className={({ isActive }) =>
              isActive ? "active nav-link" : " nav-link"
            }
          >
            <FontAwesomeIcon className="text-[12px]" icon={faGift} />
            <p>New Coupon</p>
          </NavLink>
        </div>
        <p className="p-[10px] uppercase text-[11px] font-semibold">Catalog</p>
        <div className="text-[14px] font-semibold">
          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              isActive ? "active nav-link" : " nav-link"
            }
          >
            <FontAwesomeIcon className="text-[12px]" icon={faBox} />
            <p>Products</p>
          </NavLink>
          <NavLink
            to={"/categories"}
            className={({ isActive }) =>
              isActive ? "active nav-link" : " nav-link"
            }
          >
            <FontAwesomeIcon className="text-[12px]" icon={faCubesStacked} />
            <p>Categories</p>
          </NavLink>
          <NavLink
            to={"/collections"}
            className={({ isActive }) =>
              isActive ? "active nav-link" : " nav-link"
            }
          >
            <FontAwesomeIcon className="text-[12px]" icon={faBoxesStacked} />
            <p>Collections</p>
          </NavLink>
        </div>
        <p className="p-[10px] uppercase text-[11px] font-semibold">Sale</p>
        <div className="text-[14px] font-semibold">
          <NavLink
            to={"/orders"}
            className={({ isActive }) =>
              isActive ? "active nav-link" : " nav-link"
            }
          >
            <FontAwesomeIcon className="text-[12px]" icon={faCartShopping} />
            <p>Orders</p>
          </NavLink>
        </div>
        <p className="p-[10px] uppercase text-[11px] font-semibold">Customer</p>
        <div className="text-[14px] font-semibold">
          <NavLink
            to={"/customers"}
            className={({ isActive }) =>
              isActive ? "active nav-link" : " nav-link"
            }
          >
            <FontAwesomeIcon className="text-[12px]" icon={faUsers} />
            <p>Customers</p>
          </NavLink>
        </div>
        <p className="p-[10px] uppercase text-[11px] font-semibold">
          Promotion
        </p>
        <div className="text-[14px] font-semibold">
          <NavLink
            to={"/coupons"}
            className={({ isActive }) =>
              isActive ? "active nav-link" : " nav-link"
            }
          >
            <FontAwesomeIcon className="text-[12px]" icon={faGift} />
            <p>Coupons</p>
          </NavLink>
        </div>
      </div>
      <Link to="/settings">
        <div className="flex items-center gap-[8px] rounded-[5px] px-[15px] p-[5px] sm:flex hidden cursor-pointer">
          <FontAwesomeIcon className="text-[12px]" icon={faGear} />
          <p className="p-[10px] uppercase text-[11px] font-semibold">
            Setting
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
