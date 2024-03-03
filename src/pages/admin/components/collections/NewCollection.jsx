import { ArrowLeftOutlined } from "@ant-design/icons";
import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

const NewCollection = ({ handleSidebarClick }) => {
  return (
    <div className="w-[600px] mx-[auto]">
      <div className="flex my-[30px] gap-[20px]">
          <button onClick={() => handleSidebarClick("collections")} className="border px-[10px] py-[5px] bg-white">
            <ArrowLeftOutlined />
          </button>
        <p className="text-[24px] font-semibold">Create A New Collection</p>
      </div>
      <div className="bg-white shadow-custom p-[25px] grid gap-[10px]">
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
