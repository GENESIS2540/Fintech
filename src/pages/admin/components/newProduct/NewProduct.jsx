import { ArrowLeftOutlined } from "@ant-design/icons";
import { Input, Radio } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import UploadApp from "./UploadIMedia";

const NewProduct = ({ handleSidebarClick }) => {
  const [visibility, setVisibility] = useState(1);
  const [availability, setAvailability] = useState(1);

  const onVisibilityChange = (e) => {
    setVisibility(e.target.value);
  };
  const onAvailabilityChange = (e) => {
    setAvailability(e.target.value);
  };

  return (
    <div className="grid overflow-auto ">
      <div className="mb-[30px] w-[95%] md:mx-[20px] mx-[auto]">
        <div className="flex my-[30px] gap-[20px]">
            <button onClick={() => handleSidebarClick("products") } className="border px-[10px] py-[5px] bg-white">
              <ArrowLeftOutlined />
            </button>
          <p className="text-[24px] font-semibold">Create A New Product</p>
        </div>
        <div className="lg:flex gap-[30px]">
          <div className="grid gap-[20px] w-[100%]">
            <div className="mb-[10px] bg-white shadow-custom p-[10px] sm:p-[25px]">
              <p className="text-[20px] font-semibold">General</p>
              <form className="grid gap-[20px]">
                <div className="grid">
                  <label>Product Name</label>
                  <Input type="text" placeholder="Name" required />
                </div>
                <div className="flex gap-[10px]">
                  <div className="grid w-[100%]">
                    <label>SKU</label>
                    <Input type="text" placeholder="SKU" required />
                  </div>
                  <div className="grid w-[100%]">
                    <label>Price</label>
                    <Input type="number" min="1" placeholder="Price" required />
                  </div>
                </div>
                <div className="grid">
                  <label>Description</label>
                  <TextArea />
                </div>
              </form>
            </div>
            <div className="bg-white shadow-custom p-[20px] font-semibold h-max mb-[20px]">
              <p>Upload Product Image</p>
              <UploadApp />
            </div>
          </div>
          <div className="bg-white w-[100%] grid gap-[30px] shadow-custom p-[20px] h-max">
            <div className="text-[18px] font-semibold">
              <p>Visibility</p>
              <Radio.Group
                onChange={onVisibilityChange}
                value={visibility}
                className="grid font-normal gap-[10px] pt-[10px]"
              >
                <Radio value={1}>Not Visible</Radio>
                <Radio value={2}>Visible</Radio>
              </Radio.Group>
            </div>
            <div className="text-[18px] font-semibold">
              <p>Stock Availability</p>
              <Radio.Group
                onChange={onAvailabilityChange}
                value={availability}
                className="grid font-normal gap-[10px] pt-[10px]"
              >
                <Radio value={1}>No</Radio>
                <Radio value={2}>Yes</Radio>
              </Radio.Group>
            </div>
            <div>
              <label className="text-[18px] font-semibold">Quantity</label>
              <Input
                className="mt-[10px]"
                placeholder="Quantity"
                type="number"
                min="1"
                required
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between lg:mt-[0px] mt-[20px]">
          <button className="text-white font-semibold bg-red-500 px-[20px] py-[5px] rounded-lg">
            Cancel
          </button>
          <button className="border-2 font-semibold px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
