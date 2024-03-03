import { EnvironmentFilled, PlusOutlined } from "@ant-design/icons";
import { Table } from "antd";
import React from "react";

const ShippingSettings = () => {
  return (
    <div className="">
      <div className="bg-white p-[25px] grid gap-[10px] shadow-custom mb-[50px]">
        <p className="uppercase text-[24=0px] font-semibold">Shipping</p>
        <p>Choose where you ship and how much you charge for shipping</p>
        <hr className="mt-[5px]" />
        <div>
          <div className="flex pb-[10px] gap-[10px]">
            <p>Gym</p>
            <p className="uppecase text-[#015FF1] cursor-pointer">Edit Zone</p>
          </div>
          <div className="border">
            <div className="flex gap-[20px] p-[25px]">
              <EnvironmentFilled
                style={{ color: "#015FF1", fontSize: "20px" }}
              />
              <div className="grid">
                <p className="font-semibold">South Korea</p>
                <p>Gyeonggi-do</p>
              </div>
            </div>
          </div>
          <div className="border p-[20px]">
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
            />
            <div className="flex mt-[10px] gap-[5px] text-[#015FF1] cursor-pointer">
              <PlusOutlined style={{ fontSize: "12px" }} />
              <p>Add Method</p>
            </div>
          </div>
        </div>
        <hr className="mt-[5px]" />
        <div>
          <div className="flex pb-[10px] gap-[10px]">
            <p>Gym</p>
            <p className="uppecase text-[#015FF1] cursor-pointer">Edit Zone</p>
          </div>
          <div className="border">
            <div className="flex gap-[20px] p-[25px]">
              <EnvironmentFilled
                style={{ color: "#015FF1", fontSize: "20px" }}
              />
              <div className="grid">
                <p className="font-semibold">South Korea</p>
                <p>Gyeonggi-do</p>
              </div>
            </div>
          </div>
          <div className="border p-[20px] overflow-auto">
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              scroll={{ x: true }}
            />
            <div className="flex mt-[10px] gap-[5px] text-[#015FF1] cursor-pointer">
              <PlusOutlined style={{ fontSize: "12px" }} />
              <p>Add Method</p>
            </div>
          </div>
        </div>
        <hr className="mt-[5px]" />
        <button className="border-2 mt-[10px] w-max font-semibold px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white">
          Create new shipping zone
        </button>
      </div>
    </div>
  );
};

const dataSource = [
  {
    key: "1",
    method: "Standard Delivery",
    status: "Enabled",
    cost: "$34.00",
    condition: "none",
    action: "Edit",
  },
  {
    key: "2",
    method: "Standard Delivery",
    status: "Enabled",
    cost: "$34.00",
    condition: "none",
    action: "Edit",
  },
];

const columns = [
  {
    title: "Method",
    dataIndex: "method",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Cost",
    dataIndex: "cost",
  },
  {
    title: "Condition",
    dataIndex: "condition",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

export default ShippingSettings;
