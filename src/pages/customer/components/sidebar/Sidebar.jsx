import React from "react";
import logo from "../../assets/logo.svg";
import {
  DollarOutlined,
  PicLeftOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import CustomCollapse from "./CustomCollapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faLanguage } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ handleSidebarCustomerClick, selectedSidebarCustomer }) => {
  return (
    <div className="bg-[#f2f7ff] h-[100%] p-[10px]">
      <div className="flex items-center h-[100px] justify-center gap-[5px] cursor-pointer">
        <img src={logo} className="h-[42px] w-[42px]" alt="logo" />
        <p className=" font-bold text-[25px] text-[#015FF1]">BNPL</p>
      </div>
      <div className="grid gap-[10px] ">
        <CustomCollapse
          icon=<UserOutlined />
          title="Profile"
          children={
            <div className="grid gap-[8px]">
              <p
                onClick={() => handleSidebarCustomerClick("account")}
                className={
                  selectedSidebarCustomer === "account"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                My Account
              </p>
              <p
                onClick={() => handleSidebarCustomerClick("bank")}
                className={
                  selectedSidebarCustomer === "bank"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Bank Account
              </p>
              <p
                onClick={() => handleSidebarCustomerClick("cookie")}
                className={
                  selectedSidebarCustomer === "cookie"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Cookie Preferences
              </p>
              <p
                onClick={() => handleSidebarCustomerClick("manage")}
                className={
                  selectedSidebarCustomer === "manage"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Manage Addresses
              </p>
              <p
                onClick={() => handleSidebarCustomerClick("update")}
                className={
                  selectedSidebarCustomer === "update"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Update Credentials
              </p>
            </div>
          }
        />
        <CustomCollapse
          icon=<ShoppingCartOutlined />
          title="Orders"
          children={
            <div className="grid gap-[8px]">
              <p
                onClick={() => handleSidebarCustomerClick("orders")}
                className={
                  selectedSidebarCustomer === "orders"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Orders
              </p>
              <p
                onClick={() => handleSidebarCustomerClick("downloads")}
                className={
                  selectedSidebarCustomer === "downloads"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Downloads
              </p>
              <p
                onClick={() => handleSidebarCustomerClick("cancellation")}
                className={
                  selectedSidebarCustomer === "cancellation"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Cancellation Requests
              </p>
              <p
                onClick={() => handleSidebarCustomerClick("return")}
                className={
                  selectedSidebarCustomer === "return"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Return Requests
              </p>
            </div>
          }
        />
        <CustomCollapse
          icon=<FontAwesomeIcon icon={faGem} />
          title="Offers & rewards"
          children={
            <div className="grid gap-[8px]">
              <p
                onClick={() => handleSidebarCustomerClick("offers")}
                className={
                  selectedSidebarCustomer === "offers"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                My Offers
              </p>
              <p
                onClick={() => handleSidebarCustomerClick("reward")}
                className={
                  selectedSidebarCustomer === "reward"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Reward Points
              </p>
              <p
                onClick={() => handleSidebarCustomerClick("share")}
                className={
                  selectedSidebarCustomer === "share"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Share and Earn
              </p>
            </div>
          }
        />
        <CustomCollapse
          icon=<PicLeftOutlined />
          title="General"
          children={
            <div className="grid gap-[8px]">
              <p
                onClick={() => handleSidebarCustomerClick("messages")}
                className={
                  selectedSidebarCustomer === "messages"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Messages
              </p>
              <p
                onClick={() => handleSidebarCustomerClick("credits")}
                className={
                  selectedSidebarCustomer === "credits"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                My Credits
              </p>
              <p
                onClick={() => handleSidebarCustomerClick("wishlist")}
                className={
                  selectedSidebarCustomer === "wishlist"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Wishlist
              </p>
              <p
                onClick={() => handleSidebarCustomerClick("searches")}
                className={
                  selectedSidebarCustomer === "searches"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Saved Searches
              </p>
            </div>
          }
        />

        <CustomCollapse
          icon=<FontAwesomeIcon icon={faLanguage} />
          title="Language"
          children={
            <div className="grid gap-[8px]">
              <p
                onClick={() => handleSidebarCustomerClick("english")}
                className={
                  selectedSidebarCustomer === "english"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                English
              </p>
              <p
                onClick={() => handleSidebarCustomerClick("arabic")}
                className={
                  selectedSidebarCustomer === "arabic"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Arabic
              </p>
              <p
                onClick={() => handleSidebarCustomerClick("spanish")}
                className={
                  selectedSidebarCustomer === "spanish"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Spanish
              </p>
            </div>
          }
        />
        <CustomCollapse
          icon=<DollarOutlined />
          title="Currency"
          children={
            <div className="grid gap-[8px]">
              <p
                onClick={() => handleSidebarCustomerClick("ksh")}
                className={
                  selectedSidebarCustomer === "ksh"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                KSH
              </p>
              <p
                onClick={() => handleSidebarCustomerClick("usd")}
                className={
                  selectedSidebarCustomer === "usd"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                USD
              </p>
              <p
                onClick={() => handleSidebarCustomerClick("inr")}
                className={
                  selectedSidebarCustomer === "inr"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                INR
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Sidebar;
