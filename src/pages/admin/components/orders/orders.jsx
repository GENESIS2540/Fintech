import { Table } from "antd";
import React from "react";
import { columns, dataSource } from "./data";

const orders = () => {
  return (
    <div  className="pl-[5px]">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 10 }}
        style={{ height: "88vh", overflowY: "auto" }}
      />
    </div>
  );
};

export default orders;
