import { ArrowLeftOutlined } from "@ant-design/icons";
import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import MyButton from "../button/Button";

const NewCollection = ({ handleSidebarClickSecond }) => {
  return (
    <div className="md:w-[600px] w-[95%] mx-[auto]">
      <div className="flex my-[30px] gap-[20px]">
          <button onClick={() => handleSidebarClickSecond("collections")}>
          <MyButton />
          </button>
        <p className="text-[24px] font-semibold">Create A New Collection</p>
      </div>
      <div className="bg-white shadow-custom rounded-xl p-[25px] grid gap-[10px]">
        <p className="text-[20px] font-semibold">General</p>
        <label>Name</label>
        <Input placeholder="Featured Vendors" type="text" />
        <label>Unique ID</label>
        <Input placeholder="featuredVendors" type="text" />
        <label>Description</label>
        <TextArea />
      </div>
      <hr />
      <div className="flex justify-between my-[20px]">
        <button className="text-white font-semibold bg-red-500 px-[20px] py-[5px] rounded-lg">
          Cancel
        </button>
        <button className="border-2 px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white">
          Save
        </button>
      </div>
    </div>
  );
};

export default NewCollection;
