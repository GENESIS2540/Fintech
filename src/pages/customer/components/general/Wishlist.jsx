import React from "react";
import Header from "../common/Header";
import { Input } from "antd";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import iphone from "../../assets/iphone.jpg";

const Wishlist = () => {
  const [selected, setSelected] = React.useState("wishlist");

  const handleSelected = (setting) => {
    setSelected(setting);
  };
  return (
    <div>
      <Header title={"Wishlist"} category={"Wishlist"} />
      <div className="shadow-custom">
        <div className="flex px-[20px] gap-[20px]">
          <button
            className={
              selected === "wishlist"
                ? "border-b-2 border-[#015FF1] py-[20px]"
                : "py-[20px]"
            }
            onClick={() => handleSelected("wishlist")}
          >
            Wishlist
          </button>
          <button
            className={
              selected === "vendors" ? "border-b-2 border-[#015FF1]" : ""
            }
            onClick={() => handleSelected("vendors")}
          >
            Vendors
          </button>
        </div>
        <hr />
        <div>
          {selected === "wishlist" && <WishlistComponent />}
          {selected === "vendors" && <Vendors />}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;

const WishlistComponent = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-[10px]">
      <div className="shadow-custom p-[20px]">
        <p className="font-semibold">Create New List</p>
        <Input className="my-[10px]" placeholder="Enter List Name" required />
        <button className="shadow-btn transition-all ease-in-out duration-500 rounded w-max bg-[#015FF1] text-white px-[20px] py-[5px]">
          Create
        </button>
      </div>
      <div className="shadow-custom p-[20px] min-h-[250px]">
        <div className="flex justify-between">
          <p className="font-semibold">Iphone</p>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <EyeOutlined />
          </div>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <DeleteOutlined />
          </div>
        </div>
        <div className="flex gap-[20px]">
          <img className="h-[150px] w-[100px]" src={iphone} alt="iphone" />
          <div className="pt-[10px]">
            <p className="text-18px font-bold">Iphone 12 pro</p>
            <p className="opacity-75 my-[10px]">Cost: KSh 120,000</p>
            <p>Stock: 2 Units Available</p>
          </div>
        </div>
      </div>
      <div className="shadow-custom p-[20px] min-h-[250px]">
        <div className="flex justify-between">
          <p className="font-semibold">Iphone</p>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <EyeOutlined />
          </div>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <DeleteOutlined />
          </div>
        </div>
        <div className="flex gap-[20px]">
          <img className="h-[150px] w-[100px]" src={iphone} alt="iphone" />
          <div className="pt-[10px]">
            <p className="text-18px font-bold">Iphone 12 pro</p>
            <p className="opacity-75 my-[10px]">Cost: KSh 120,000</p>
            <p>Stock: 2 Units Available</p>
          </div>
        </div>
      </div>
      <div className="shadow-custom p-[20px] min-h-[250px]">
        <div className="flex justify-between">
          <p className="font-semibold">Iphone</p>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <EyeOutlined />
          </div>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <DeleteOutlined />
          </div>
        </div>
        <div className="flex gap-[20px]">
          <img className="h-[150px] w-[100px]" src={iphone} alt="iphone" />
          <div className="pt-[10px]">
            <p className="text-18px font-bold">Iphone 12 pro</p>
            <p className="opacity-75 my-[10px]">Cost: KSh 120,000</p>
            <p>Stock: 2 Units Available</p>
          </div>
        </div>
      </div>
      <div className="shadow-custom p-[20px] min-h-[250px]">
        <div className="flex justify-between">
          <p className="font-semibold">Iphone</p>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <EyeOutlined />
          </div>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <DeleteOutlined />
          </div>
        </div>
        <div className="flex gap-[20px]">
          <img className="h-[150px] w-[100px]" src={iphone} alt="iphone" />
          <div className="pt-[10px]">
            <p className="text-18px font-bold">Iphone 12 pro</p>
            <p className="opacity-75 my-[10px]">Cost: KSh 120,000</p>
            <p>Stock: 2 Units Available</p>
          </div>
        </div>
      </div>
      <div className="shadow-custom p-[20px] min-h-[250px]">
        <div className="flex justify-between">
          <p className="font-semibold">Iphone</p>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <EyeOutlined />
          </div>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <DeleteOutlined />
          </div>
        </div>
        <div className="flex gap-[20px]">
          <img className="h-[150px] w-[100px]" src={iphone} alt="iphone" />
          <div className="pt-[10px]">
            <p className="text-18px font-bold">Iphone 12 pro</p>
            <p className="opacity-75 my-[10px]">Cost: KSh 120,000</p>
            <p>Stock: 2 Units Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Vendors = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-[10px]">
      <div className="shadow-custom p-[20px]">
        <div className="flex justify-between">
          <p className="font-semibold">Punjab Shop</p>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <EyeOutlined />
          </div>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <DeleteOutlined />
          </div>
        </div>
        <div className="flex gap-[20px]">
          <img className="h-[150px] w-[100px]" src={iphone} alt="iphone" />
          <div className="pt-[10px]">
            <p className="text-18px font-bold">Punjab Household collections</p>
            <p className="opacity-75 my-[10px]">Verification: Verified</p>
            <p>Category: Households</p>
          </div>
        </div>
      </div>
      <div className="shadow-custom p-[20px]">
        <div className="flex justify-between">
          <p className="font-semibold">Punjab Shop</p>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <EyeOutlined />
          </div>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <DeleteOutlined />
          </div>
        </div>
        <div className="flex gap-[20px]">
          <img className="h-[150px] w-[100px]" src={iphone} alt="iphone" />
          <div className="pt-[10px]">
            <p className="text-18px font-bold">Punjab Household collections</p>
            <p className="opacity-75 my-[10px]">Verification: Verified</p>
            <p>Category: Households</p>
          </div>
        </div>
      </div>
      <div className="shadow-custom p-[20px]">
        <div className="flex justify-between">
          <p className="font-semibold">Punjab Shop</p>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <EyeOutlined />
          </div>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <DeleteOutlined />
          </div>
        </div>
        <div className="flex gap-[20px]">
          <img className="h-[150px] w-[100px]" src={iphone} alt="iphone" />
          <div className="pt-[10px]">
            <p className="text-18px font-bold">Punjab Household collections</p>
            <p className="opacity-75 my-[10px]">Verification: Verified</p>
            <p>Category: Households</p>
          </div>
        </div>
      </div>
      <div className="shadow-custom p-[20px]">
        <div className="flex justify-between">
          <p className="font-semibold">Punjab Shop</p>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <EyeOutlined />
          </div>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <DeleteOutlined />
          </div>
        </div>
        <div className="flex gap-[20px]">
          <img className="h-[150px] w-[100px]" src={iphone} alt="iphone" />
          <div className="pt-[10px]">
            <p className="text-18px font-bold">Punjab Household collections</p>
            <p className="opacity-75 my-[10px]">Verification: Verified</p>
            <p>Category: Households</p>
          </div>
        </div>
      </div>
    </div>
  );
};
