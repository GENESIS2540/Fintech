import { ArrowLeftOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Checkbox, Table } from "antd";
import React from "react";

const Pending = ({ handleSidebarClickSecond }) => {
  return (
    <div>
        <div className="flex mx-[20px] my-[30px] gap-[20px]">
            <button onClick={() => handleSidebarClickSecond("shipping") } className="border shadow-lg px-[10px] py-[5px] bg-white">
              <ArrowLeftOutlined />
            </button>
          <p className="text-[24px] font-semibold">Pending Orders</p>
        </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 10 }}
        className="overflow-auto bg-white"
      />
    </div>
  );
};

export default Pending;

const dataSource = [
  {
    key: "1",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "Pending",
    paymentStatus: {
      icon: <ClockCircleOutlined style={{ color: 'orange' }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "2",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "Pending",
    paymentStatus: {
      icon: <ClockCircleOutlined style={{ color: 'orange' }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "3",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "Pending",
    paymentStatus: {
      icon: <ClockCircleOutlined style={{ color: 'orange' }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "4",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "Pending",
    paymentStatus: {
      icon: <ClockCircleOutlined style={{ color: 'orange' }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "5",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "Pending",
    paymentStatus: {
      icon: <ClockCircleOutlined style={{ color: 'orange' }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "6",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "Pending",
    paymentStatus: {
      icon: <ClockCircleOutlined style={{ color: 'orange' }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "7",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "Pending",
    paymentStatus: {
      icon: <ClockCircleOutlined style={{ color: 'orange' }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "8",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "Pending",
    paymentStatus: {
      icon: <ClockCircleOutlined style={{ color: 'orange' }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "9",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "Pending",
    paymentStatus: {
      icon: <ClockCircleOutlined style={{ color: 'orange' }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "10",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "Pending",
    paymentStatus: {
      icon: <ClockCircleOutlined style={{ color: 'orange' }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "11",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "Pending",
    paymentStatus: {
      icon: <ClockCircleOutlined style={{ color: 'orange' }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "12",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "Pending",
    paymentStatus: {
      icon: <ClockCircleOutlined style={{ color: 'orange' }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "13",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "Pending",
    paymentStatus: {
      icon: <ClockCircleOutlined style={{ color: 'orange' }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "14",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "Pending",
    paymentStatus: {
      icon: <ClockCircleOutlined style={{ color: 'orange' }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "15",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "Pending",
    paymentStatus: {
      icon: <ClockCircleOutlined style={{ color: 'orange' }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "16",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "Pending",
    paymentStatus: {
      icon: <ClockCircleOutlined style={{ color: 'orange' }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "17",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "Pending",
    paymentStatus: {
      icon: <ClockCircleOutlined style={{ color: 'orange' }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "18",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "Pending",
    paymentStatus: {
      icon: <ClockCircleOutlined style={{ color: 'orange' }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "19",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "Pending",
    paymentStatus: {
      icon: <ClockCircleOutlined style={{ color: 'orange' }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "20",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "Pending",
    paymentStatus: {
      icon: <ClockCircleOutlined style={{ color: 'orange' }} />,
      text: "Paid",
    },
    total: "$400",
  },
  {
    key: "21",
    checkbox: <Checkbox />,
    name: "Demo user",
    orderNumber: "#232",
    date: new Date(),
    email: "user@gmail.com",
    shipmentStatus: "Pending",
    paymentStatus: {
      icon: <ClockCircleOutlined style={{ color: 'orange' }} />,
      text: "Paid",
    },
    total: "$400",
  },
];

const columns = [
  {
    title: "Select",
    dataIndex: "checkbox",
  },
  {
    title: "Order Number",
    dataIndex: "orderNumber",
  },
  {
    title: "Date",
    dataIndex: "date",
    render: (date) => date.toLocaleDateString(),
  },
  {
    title: "Customer Email",
    dataIndex: "email",
  },
  {
    title: "Shipment Status",
    dataIndex: "shipmentStatus",
  },
  {
    title: "Payment Status",
    dataIndex: "paymentStatus",
    render: (paymentStatus) => (
      <>
        {paymentStatus.icon} {paymentStatus.text}
      </>
    ),
  },
  {
    title: "Total",
    dataIndex: "total",
  },
];
