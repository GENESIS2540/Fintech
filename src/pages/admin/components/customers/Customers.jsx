import React from "react";
import { columns, dataSource } from "./data";
import { Table } from "antd";

const Customers = () => {
  return (
    <div className="pl-[5px] w-[95%] mx-auto">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 10 }}
        className="overflow-auto bg-white"
      />
    </div>
  );
};

export default Customers;
