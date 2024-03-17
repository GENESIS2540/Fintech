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
import { Typography } from "antd";
import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

const SidebarResponsive = ({
  handleSidebarClick,
  setIsCollapsed,
  isCollapsed,
}) => {
  const [broken, setBroken] = React.useState(
    window.matchMedia("(max-width: 800px)").matches
  );

  return (
    <div className="flex h-[100%] relative sidebar w-max">
      <Sidebar
        onBackdropClick={() => setIsCollapsed(false)}
        customBreakPoint="800px"
        onBreakPoint={setBroken}
        toggled={isCollapsed}
      
        backgroundColor="white"
      >
        <div className="uppercase mt-[10px] mx-[10px] h-[20px] font-semibold text-[11px] font-semibold">
          <Typography variant="body2" fontWeight={600}>
            Quick links
          </Typography>
        </div>
        <Menu>
          <MenuItem
            onClick={() => handleSidebarClick("dashboard")}
            icon={<FontAwesomeIcon className="text-[16px]" icon={faHome} />}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            onClick={() => handleSidebarClick("newProduct")}
            icon={<FontAwesomeIcon className="text-[16px]" icon={faBox} />}
          >
            New Product
          </MenuItem>
          <MenuItem
            onClick={() => handleSidebarClick("newCoupon")}
            icon={<FontAwesomeIcon className="text-[16px]" icon={faGift} />}
          >
            New Coupon
          </MenuItem>
        </Menu>
        <div className="uppercase mt-[10px] mx-[10px] h-[20px] font-semibold text-[11px] font-semibold">
          <Typography variant="body2" fontWeight={600}>
            Catalog
          </Typography>
        </div>
        <Menu>
          <MenuItem
            onClick={() => handleSidebarClick("products")}
            icon={<FontAwesomeIcon className="text-[16px]" icon={faBox} />}
          >
            Products
          </MenuItem>
          <MenuItem
            onClick={() => handleSidebarClick("categories")}
            icon={
              <FontAwesomeIcon className="text-[16px]" icon={faCubesStacked} />
            }
          >
            Categories
          </MenuItem>
          <MenuItem
            onClick={() => handleSidebarClick("collections")}
            icon={
              <FontAwesomeIcon className="text-[16px]" icon={faBoxesStacked} />
            }
          >
            Collections
          </MenuItem>
        </Menu>
        <div className="uppercase mt-[10px] mx-[10px] h-[20px] font-semibold text-[11px] font-semibold">
          <Typography variant="body2" fontWeight={600}>
            Sale
          </Typography>
        </div>
        <Menu>
          <MenuItem
            onClick={() => handleSidebarClick("orders")}
            icon={
              <FontAwesomeIcon className="text-[16px]" icon={faCartShopping} />
            }
          >
            Orders
          </MenuItem>
        </Menu>
        <div className="uppercase mt-[10px] mx-[10px] h-[20px] font-semibold text-[11px] font-semibold">
          <Typography variant="body2" fontWeight={600}>
            Customer
          </Typography>
        </div>
        <Menu>
          <MenuItem
            onClick={() => handleSidebarClick("customers")}
            icon={<FontAwesomeIcon className="text-[16px]" icon={faUsers} />}
          >
            Customers
          </MenuItem>
        </Menu>
        <div className="uppercase mt-[10px] mx-[10px] h-[20px] font-semibold text-[11px] font-semibold">
          <Typography
            variant="body2"
            fontWeight={600}
          >
            Promotion
          </Typography>
        </div>
        <Menu>
          <MenuItem
            onClick={() => handleSidebarClick("coupons")}
            icon={<FontAwesomeIcon className="text-[16px]" icon={faGift} />}
          >
            Coupons
          </MenuItem>
        </Menu>
        <div className="uppercase mt-[10px] mx-[10px] h-[20px] font-semibold text-[11px] font-semibold">
          <Typography variant="body2" fontWeight={600}>
            settings
          </Typography>
        </div>
        <div className="pb-[20px]">
          <Menu>
            <MenuItem
              onClick={() => handleSidebarClick("settings")}
              icon={<FontAwesomeIcon className="text-[16px]" icon={faGear} />}
            >
              Setting
            </MenuItem>
          </Menu>
        </div>
      </Sidebar>
    </div>
  );
};

export default SidebarResponsive;
