import React from "react";
import logo from "../../assets/logo.svg";
import {
  DollarOutlined,
  PicLeftOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import VendorCollapse from "./VendorCollapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faLanguage } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ handleSidebarVendorClick, selectedSidebarVendor }) => {
  return (
    <div className="bg-[#f2f7ff] h-[100%] pt-[10px]">
      <div className="flex items-center h-[100px] justify-center gap-[5px] cursor-pointer">
        <img src={logo} className="h-[42px] w-[42px]" alt="logo" />
        <p className=" font-bold text-[25px] text-[#015FF1]">BNPL</p>
      </div>

      <VendorCollapse
        icon=<FontAwesomeIcon icon={faGem} />
        title="DashBoard"
        children={
          <div className="grid gap-[8px]">
            <p
              onClick={() => handleSidebarVendorClick("dash")}
              className={
                selectedSidebarVendor === "dash"
                  ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                  : "hover:text-[#015FF1] cursor-pointer"
              }
            >
              My Performance
            </p>
           

          </div>
        }
      />

      <div className="grid gap-[10px] ">
        <VendorCollapse
          icon=<UserOutlined />
          title="Profile"
          children={
            <div className="grid gap-[8px]">
              <p
                onClick={() => handleSidebarVendorClick("account")}
                className={
                  selectedSidebarVendor === "account"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                My Account
              </p>
              <p
                onClick={() => handleSidebarVendorClick("bank")}
                className={
                  selectedSidebarVendor === "bank"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Bank Account
              </p>
              <p
                onClick={() => handleSidebarVendorClick("cookie")}
                className={
                  selectedSidebarVendor === "cookie"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Cookie Preferences
              </p>
              <p
                onClick={() => handleSidebarVendorClick("address")}
                className={
                  selectedSidebarVendor === "address"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Manage Addresses
              </p>
              <p
                onClick={() => handleSidebarVendorClick("update")}
                className={
                  selectedSidebarVendor === "update"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Update Credentials
              </p>

              <p
                onClick={() => handleSidebarVendorClick("payment")}
                className={
                  selectedSidebarVendor === "Payment"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Payment Registration
              </p>
            </div>
          }
        />
        <VendorCollapse
          icon=<ShoppingCartOutlined />
          title="Services"
          children={
            <div className="grid gap-[8px]">
              <p
                onClick={() => handleSidebarVendorClick("orders")}
                className={
                  selectedSidebarVendor === "orders"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Orders
              </p>

              <p
                onClick={() => handleSidebarVendorClick("service")}
                className={
                  selectedSidebarVendor === "service"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Service List
              </p>

              <p
                onClick={() => handleSidebarVendorClick("downloads")}
                className={
                  selectedSidebarVendor === "downloads"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Add Service
              </p>


              {/* <p
                onClick={() => handleSidebarVendorClick("cancellation")}
                className={
                  selectedSidebarVendor === "cancellation"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Cancellation Requests
              </p> */}
              {/* <p
                onClick={() => handleSidebarVendorClick("return")}
                className={
                  selectedSidebarVendor === "return"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Return Requests
              </p> */}
            </div>
          }
        />

        <VendorCollapse
          icon=<PicLeftOutlined />
          title="General"
          children={
            <div className="grid gap-[8px]">
              <p
                onClick={() => handleSidebarVendorClick("feed")}
                className={
                  selectedSidebarVendor === "feed"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Feed Back
              </p>
              <p
                onClick={() => handleSidebarVendorClick("credits")}
                className={
                  selectedSidebarVendor === "credits"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                My Credits
              </p>
              {/* <p
                onClick={() => handleSidebarVendorClick("wishlist")}
                className={
                  selectedSidebarVendor === "wishlist"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Wishlist
              </p>
              <p
                onClick={() => handleSidebarVendorClick("searches")}
                className={
                  selectedSidebarVendor === "searches"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Saved Searches
              </p> */}
            </div>
          }
        />

        <VendorCollapse
          icon=<FontAwesomeIcon icon={faLanguage} />
          title="Language"
          children={
            <div className="grid gap-[8px]">
              <p
                onClick={() => handleSidebarVendorClick("english")}
                className={
                  selectedSidebarVendor === "english"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                English
              </p>
              <p
                onClick={() => handleSidebarVendorClick("arabic")}
                className={
                  selectedSidebarVendor === "arabic"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Arabic
              </p>
              <p
                onClick={() => handleSidebarVendorClick("spanish")}
                className={
                  selectedSidebarVendor === "spanish"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                Spanish
              </p>
            </div>
          }
        />
        <VendorCollapse
          icon=<DollarOutlined />
          title="Currency"
          children={
            <div className="grid gap-[8px]">
              <p
                onClick={() => handleSidebarVendorClick("ksh")}
                className={
                  selectedSidebarVendor === "ksh"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                KSH
              </p>
              <p
                onClick={() => handleSidebarVendorClick("usd")}
                className={
                  selectedSidebarVendor === "usd"
                    ? "border-b border-zinc-600 text-[#015FF1] hover:text-[#015FF1] w-max cursor-pointer"
                    : "hover:text-[#015FF1] cursor-pointer"
                }
              >
                USD
              </p>
              <p
                onClick={() => handleSidebarVendorClick("inr")}
                className={
                  selectedSidebarVendor === "inr"
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
