import { Table, Button, Space, Image } from "antd";
import React from "react";
import Header from "../common/Header";
import shoe from "../../assets/shoe.jpeg";

const ServiceList = () => {
  return (
    <div className="p-6">
      <Header title={"Service Listings"} category={"Services"} />
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
    service: {
      serviceId: "S123XYZ",
      date: "12/10/2023",
    },
    details: {
      image: { shoe },
      name: "Service Name",
      description: "Service Description",
      price: "$50.00",
    },
    status: {
      text: "Active",
    },
  },
  {
    key: "2",
    service: {
      serviceId: "S456ABC",
      date: "12/10/2023",
    },
    details: {
      image: { shoe },
      name: "Another Service",
      description: "Description of Another Service",
      price: "$75.00",
    },
    status: {
      text: "Inactive",
    },
  },
  {
    key: "3",
    service: {
      serviceId: "S789DEF",
      date: "12/10/2023",
    },
    details: {
      image: { shoe },
      name: "Service Three",
      description: "Description of Service Three",
      price: "$100.00",
    },
    status: {
      text: "Active",
    },
  },
];

const columns = [
  {
    title: "Service ID & Date",
    dataIndex: "service",
    render: (service) => (
      <div className="grid">
        <p>{service.serviceId}</p>
        <p>{service.date}</p>
      </div>
    ),
  },
  {
    title: "Details",
    dataIndex: "details",
    fixed: "left",
    render: (details) => (
      <div className="flex gap-[8px] items-center">
        <Image src={details.image} alt={details.name} preview={false} width={50} />
        <div>
          <p className="font-bold">{details.name}</p>
          <p>{details.description}</p>
          <p>{details.price}</p>
        </div>
      </div>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (text) => (
      <p className="bg-[#dee5fb] flex rounded py-[3px] justify-center text-[#015FF1] ">
        {text.text}
      </p>
    ),
  },

  {
    title: "Actions",
    key: "actions",
    render: (text, record) => (
      <Space size="middle">
        <Button type="primary" size="small">
          Edit
        </Button>
        <Button type="danger" size="small">
          Delete
        </Button>
      </Space>
    ),
  },

import { Table } from "antd";
import shoe from "../../assets/shoe.jpeg";
import React from "react";
import Header from "../common/Header";

const ServiceList = () => {
    return (
        <div>
            <Header title={"Service Listings"} category={"Services"} />
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
        service: {
            serviceId: "S123XYZ",
            date: "12/10/2023",
        },
        details: {
            image: { shoe },
            name: "Service Name",
            description: "Service Description",
            price: "$50.00",
        },
        status: {
            text: "Active",
        },
    },
    {
        key: "2",
        service: {
            serviceId: "S456ABC",
            date: "12/10/2023",
        },
        details: {
            image: { shoe },
            name: "Another Service",
            description: "Description of Another Service",
            price: "$75.00",
        },
        status: {
            text: "Inactive",
        },
    },
    {
        key: "3",
        service: {
            serviceId: "S789DEF",
            date: "12/10/2023",
        },
        details: {
            image: { shoe },
            name: "Service Three",
            description: "Description of Service Three",
            price: "$100.00",
        },
        status: {
            text: "Active",
        },
    },
];

const columns = [
    {
        title: "Service ID & Date",
        dataIndex: "service",
        render: (service) => (
            <div className="grid">
                <p>{service.serviceId}</p>
                <p>{service.date}</p>
            </div>
        ),
    },
    {
        title: "Details",
        dataIndex: "details",
        fixed: "left",
        render: (details) => (
            <div className="flex gap-[8px]">
                <img className="h-[50px] w-[50px]" src={shoe} alt="" />
                <div>
                    <p>{details.name}</p>
                    <p>{details.description}</p>
                    <p>{details.price}</p>
                </div>
            </div>
        ),
    },
    {
        title: "Status",
        dataIndex: "status",
        render: (text) => (
            <p className="bg-[#dee5fb] flex rounded py-[3px] justify-center text-[#015FF1] ">
                {text.text}
            </p>
        ),
    },
];

export default ServiceList;
