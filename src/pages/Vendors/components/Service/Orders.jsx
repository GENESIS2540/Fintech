import { Table, Tag, Space, Image } from "antd";
import React from "react";
import Header from "../common/Header";
import shoe from "../../assets/shoe.jpeg";

const Orders = () => {
  return (
    <div className="p-6">
      <Header title={"My Orders"} category={"Orders"} />
      <Table
        bordered={true}
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 10 }}
        style={{ height: "88vh", overflow: "auto" }}
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
 
];

const columns = [
  {
    title: "Order ID & Date",
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
    ),
  },
];

export default Orders;
