import { ArrowLeftOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input, Radio } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import MyButton from "../button/Button";

const NewCoupon = ({ handleSidebarClickSecond }) => {
  const [discountType, setDiscountType] = useState(1);

  const onDiscountTypeChange = (e) => {
    setDiscountType(e.target.value);
  };

  const { RangePicker } = DatePicker;
  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };
  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  return (
    <div className="overflow-auto">
      <div className="md:mx-[20px] w-[95%] mx-[auto] grid gap-[20px]">
        <div className="flex mt-[30px] my-[10px] gap-[20px]">
          <button onClick={() => handleSidebarClickSecond("coupons")}>
            <MyButton />
          </button>
          <p className="text-[24px] font-semibold">Create A New Coupon</p>
        </div>
        <form className="grid gap-[20px]">
          <div className="shadow-custom bg-white p-[25px] rounded-xl">
            <p className="text-[20px] font-semibold">General</p>
            <div className="grid gap-[15px]">
              <div className="grid gap-[5px]">
                <label>Coupon code</label>
                <Input placeholder="Enter coupon code" required />
              </div>
              <div className="grid">
                <label>Description</label>
                <TextArea placeholder="Enter description" required />
              </div>
              <div className="md:flex gap-[10px] justify-between">
                <div className="grid">
                  <label>Discount amount</label>
                  <Input type="text" placeholder="Discount amount" required />
                </div>
                <div className="grid w-[100%]">
                  <Space direction="vertical" size={12}>
                    <p>Pick start and end date</p>
                    <RangePicker
                      format="YYYY-MM-DD"
                      onChange={onChange}
                      onOk={onOk}
                    />
                  </Space>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <Checkbox />
                <p>Free shipping?</p>
              </div>
            </div>
          </div>
          <div className="shadow-custom bg-white rounded-xl p-[25px]">
            <p className="text-[20px] font-semibold mb-[10px]">Discount type</p>
            <Radio.Group
              onChange={onDiscountTypeChange}
              className="grid gap-[10px]"
              value={discountType}
            >
              <Radio value={1}>Fixed discount to entire order</Radio>
              <Radio value={2}>Percentage discount to entire order</Radio>
              <Radio value={3}>Fixed discount to specific products</Radio>
              <Radio value={4}>Percentage discount to specific products</Radio>
              <Radio value={5}>Buy X get Y</Radio>
            </Radio.Group>
          </div>
          <div className="shadow-custom bg-white rounded-xl p-[25px]">
            <p className="text-[20px] font-semibold mb-[15px]">
              Order Conditions
            </p>
            <label>Minimum purchase amount</label>
            <Input
              className="my-[10px]"
              type="number"
              min="1"
              placeholder="Enter minimum purchase amount"
              required
            />
            <label>Minimum purchase quantity</label>
            <Input
              className="my-[10px]"
              type="number"
              min="1"
              placeholder="Enter minimum purchase quantity"
              required
            />
          </div>
          <div className="flex justify-between md:mb-[50px]">
            <button className="text-white font-semibold bg-red-500 px-[20px] py-[5px] rounded-lg">
              Cancel
            </button>
            <button type="submit" className="border-2 font-semibold px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCoupon;
