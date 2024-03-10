import React from "react";
import Header from "../common/Header";
import { Input } from "antd";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import iphone from '../../assets/iphone.jpg'

const Wishlist = () => {
  const [selected, setSelected] = React.useState("wishlist");

  const handleSelected = (setting) => {
    setSelected(setting);
  };
  return (
    <div>
      <Header title={"Wishlist"} category={"Wishlist"} />
      <div className="shadow-custom">
        <div className="flex gap-[20px]">
          <button
            className="p-[20px] border-b-2 border-gray-300"
            onClick={() => handleSelected("wishlist")}
          >
            Wishlist
          </button>
          <button
            className="p-[20px]"
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
    <div className="grid grid-cols-3 gap-[10px]">
      <div className="shadow-custom p-[20px]">
        <p className="font-semibold">Create New List</p>
        <Input className="my-[10px]" placeholder="Enter List Name" required />
        <button className="shadow-btn rounded w-max bg-[#015FF1] text-white px-[20px] py-[5px]">
          Create
        </button>
      </div>
      <div className="shadow-custom p-[20px] min-h-[300px]">
        <div className="flex justify-between">
          <p className="font-semibold">Iphone</p>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <EyeOutlined />
          </div>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <DeleteOutlined />
          </div>
        </div>
        <img className="h-[100px] w-[100px]" src={iphone} alt="iphone" />
      </div>
      <div className="shadow-custom p-[20px] min-h-[300px]">
        <div className="flex justify-between">
          <p className="font-semibold">Iphone</p>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <EyeOutlined />
          </div>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <DeleteOutlined />
          </div>
        </div>
        <img className="h-[100px] w-[100px]" src={iphone} alt="iphone" />
      </div>
      <div className="shadow-custom p-[20px] min-h-[300px]">
        <div className="flex justify-between">
          <p className="font-semibold">Iphone</p>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <EyeOutlined />
          </div>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <DeleteOutlined />
          </div>
        </div>
        <img className="h-[100px] w-[100px]" src={iphone} alt="iphone" />
      </div>
      <div className="shadow-custom p-[20px] min-h-[300px]">
        <div className="flex justify-between">
          <p className="font-semibold">Iphone</p>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <EyeOutlined />
          </div>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <DeleteOutlined />
          </div>
        </div>
        <img className="h-[100px] w-[100px]" src={iphone} alt="iphone" />
      </div>
    </div>
  );
};

const Vendors = () => {
  return (
    <div className="grid sm:grid-cols-3 gap-[10px]">
    <div className="shadow-custom p-[20px]">
        <div className="flex justify-between">
          <p className="font-semibold">Punjab Shell</p>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <EyeOutlined />
          </div>
          <div className="hover:text-[#015FF1] transition-all ease-in-out duration-300 cursor-pointer text-[20px]">
            <DeleteOutlined />
          </div>
        </div>
        <img className="h-[100px] w-[100px]" src={iphone} alt="iphone" />
      </div>
    </div>
  );
};
