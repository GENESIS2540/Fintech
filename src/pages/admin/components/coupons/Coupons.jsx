import { Badge, Checkbox, Table } from "antd";
import React from "react";

const Coupons = ({ handleSidebarClickSecond }) => {
  return (
    <div className="overflow-auto">
      <div className="mx-[20px]">
        <div className="flex justify-between my-[20px]">
          <p className="text-[24px] font-semibold">Coupons</p>
            <button onClick={() => handleSidebarClickSecond("newCoupon")} className="border-2 px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white">
              New Coupon
            </button>
        </div>
        <div>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{ pageSize: 10 }}
          />
        </div>
      </div>
    </div>
  );
};

const dataSource = [
  {
    key: "1",
    checkbox: <Checkbox />,
    couponCode: "BUYYGETX345",
    startDate: "2024-02-03",
    endDate: "2024-02-25",
    status: <Badge status="default" />,
    usedTimes: "12",
  },
  {
    key: "2",
    checkbox: <Checkbox />,
    couponCode: "BUYYGETX345",
    startDate: "2024-02-03",
    endDate: "2024-02-25",
    status: <Badge status="default" />,
    usedTimes: "12",
  },
  {
    key: "3",
    checkbox: <Checkbox />,
    couponCode: "BUYYGETX345",
    startDate: "2024-02-03",
    endDate: "2024-02-25",
    status: <Badge status="default" />,
    usedTimes: "12",
  },
  {
    key: "4",
    checkbox: <Checkbox />,
    couponCode: "BUYYGETX345",
    startDate: "2024-02-03",
    endDate: "2024-02-25",
    status: <Badge status="default" />,
    usedTimes: "12",
  },
  {
    key: "5",
    checkbox: <Checkbox />,
    couponCode: "BUYYGETX345",
    startDate: "2024-02-03",
    endDate: "2024-02-25",
    status: <Badge status="default" />,
    usedTimes: "12",
  },
  {
    key: "6",
    checkbox: <Checkbox />,
    couponCode: "BUYYGETX345",
    startDate: "2024-02-03",
    endDate: "2024-02-25",
    status: <Badge status="default" />,
    usedTimes: "12",
  },
];

const columns = [
  {
    title: "Select",
    dataIndex: "checkbox",
  },
  {
    title: "Coupon Code",
    dataIndex: "couponCode",
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
  },
  {
    title: "End Date",
    dataIndex: "endDate",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Used Times",
    dataIndex: "usedTimes",
  },
];

export default Coupons;
