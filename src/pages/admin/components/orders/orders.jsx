import { Table } from "antd";
import React from "react";
import { columns, dataSource } from "./data";

const orders = () => {
  return (
    <div  className="pl-[5px] w-[95%] mx-auto">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 10 }}
        className="h-[88vh] overflow-auto bg-white"
      />
    </div>
  );
};

export default orders;
