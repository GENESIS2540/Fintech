import { Table, Tag, Space, Image } from "antd";
import React from "react";
import Header from "../common/Header";
import shoe from "../../assets/shoe.jpeg";

const Orders = () => {
  return (
    <div className="p-6">
import { Table } from "antd";
import shoe from "../../assets/shoe.jpeg";
import React from "react";
import Header from "../common/Header";

const Orders = () => {
  return (
    <div>
      <Header title={"My Orders"} category={"Orders"} />
      <Table
        bordered={true}
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 10 }}
        style={{ height: "88vh", overflow: "auto" }}
      />

      />

    </div>
  );
};

const dataSource = [
  {
    key: "1",
    order: {
      orderId: "O46BHVGYTGYT",
      date: "12/10/2023",
    },
    details: {
      image: { shoe },
      name: "Comfort Sneakers",
      brand: "Nike",
      qty: 2,
      orderNo: "O46BHVGYTGYT",
    },
    amount: "$270.00",
    status: {
      text: "Shipped",
      tag: "success",
    },
    shippingInfo: {
      address: "123 Main St, Cityville",
      trackingNumber: "123456789",
    },
    specialInstructions: "Handle with care",
  },

  {
    key: "1",
      name: "Name of the Product",
      brand: "Brand: ",
      qty: "Quantity:",
      orderNo: "Part of order NO: ",
    },
    amount: "$270.00",
    status: {
      text: "Cancelled",
    },
  },
  {
    key: "2",
    order: {
      orderId: "O46BHVGYTGYT",
      date: "12/10/2023",
    },
    details: {
      image: { shoe },
      name: "Comfort Sneakers",
      brand: "Nike",
      qty: 2,
      orderNo: "O46BHVGYTGYT",
    },
    amount: "$270.00",
    status: {
      text: "Shipped",
      tag: "success",
    },
    shippingInfo: {
      address: "123 Main St, Cityville",
      trackingNumber: "123456789",
    },
    specialInstructions: "Handle with care",
  },
 
      name: "Name of the Product",
      brand: "Brand: ",
      qty: "Quantity:",
      orderNo: "Part of order NO: ",
    },
    amount: "$270.00",
    status: {
      text: "Cancelled",
    },
  },
  {
    key: "3",
    order: {
      orderId: "O46BHVGYTGYT",
      date: "12/10/2023",
    },
    details: {
      image: { shoe },
      name: "Name of the Product",
      brand: "Brand: ",
      qty: "Quantity:",
      orderNo: "Part of order NO: ",
    },
    amount: "$270.00",
    status: {
      text: "Cancelled",
    },
  },
];

const columns = [
  {
    title: "Order ID & Date",
    title: "Service ID & Date",
    dataIndex: "order",
    render: (date) => (
      <div className="grid">
        <p>{date.orderId}</p>
        <p>{date.date}</p>
      </div>
    ),
  },
  {

    title: "Product Details",
    dataIndex: "details",
    render: (details) => (
      <div className="flex gap-4 items-center">
        <Image src={details.image} alt={details.name} preview={false} width={50} />
        <div>
          <p className="font-bold">{details.name}</p>
          <p>{details.brand}</p>
          <p>Quantity: {details.qty}</p>
          <p>Order No: {details.orderNo}</p>
    title: "Details",
    dataIndex: "details",
    fixed: "left",
    render: (details) => (
      <div className="flex gap-[8px]">
        <img className="h-[50px] w-[50px]" src={shoe} alt="" />
        <div>
          <p>{details.name}</p>
          <p>{details.brand}</p>
          <p>{details.qty}</p>
          <p>{details.orderNo}</p>
        </div>
      </div>
    ),
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (text) => <Tag color={text.tag}>{text.text}</Tag>,
  },
  {
    title: "Shipping Info",
    dataIndex: "shippingInfo",
    render: (shippingInfo) => (
      <div>
        <p>{shippingInfo.address}</p>
        <p>Tracking #: {shippingInfo.trackingNumber}</p>
      </div>
    ),
  },
  {
    title: "Special Instructions",
    dataIndex: "specialInstructions",
  },
  {
    title: "Actions",
    key: "actions",
    render: (text, record) => (
      <Space size="middle">
        <a href="#">Update Status</a>
        <a href="#">Generate Invoice</a>
        <a href="#">Contact User</a>
      </Space>
    render: (text) => (
      <p className="bg-[#dee5fb] flex rounded py-[3px] justify-center text-[#015FF1] ">
        {text.text}
      </p>
    ),
  },
];

export default Orders;
