import React from "react";
import { columns, dataSource } from "./data";
import { Table } from "antd";

const Customers = () => {
  return (
    <div className="pl-[5px]">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 10 }}
        style={{ height: "88vh", overflowY: 'auto' }}
      />
    </div>
  );
};

export default Customers;
