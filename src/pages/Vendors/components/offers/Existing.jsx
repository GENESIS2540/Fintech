import { Table } from "antd";
import React from "react";

const Existing = () => {
  return (
    <div className="pl-[5px] my-[20px] mx-auto">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 10 }}
        className="overflow-auto bg-white rounded-xl shadow-custom"
      />
    </div>
  );
};

export default Existing;

const dataSource = [
  {
    key: 1,
    offerName: "Summer Sale",
    type: "Discount",
    status: "Active",
    validityPeriod: "June 1, 2024 - June 30, 2024",
    redemtions: 150,
    actions: {
        edit: 'Edit',
        deactivate: 'deactivate',
        delete: 'delete',
    },
  },
];

const columns = [
  {
    title: "Offer Name",
    dataIndex: "offerName",
  },
  {
    title: "Type",
    dataIndex: "type",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Validity Period",
    dataIndex: "validityPeriod",
  },
  {
    title: "Redemtions",
    dataIndex: "redemtions",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    render: (v) => (
      <div>
        <Button />
        <button disabled>
          {v.edit}
        </button>
        <button class="btn delete">Delete</button>
      </div>
    ),
  },
];

const Button = () => {
    return (
        <button className="outline">
           ggg
        </button>
    )
}
