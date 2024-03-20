import { Checkbox, Table } from "antd";
import React from "react";

const Collections = ({ handleSidebarClickSecond }) => {
  return (
    <div className="overflow-auto w-[95%] mx-[auto]">
      <div className=" md:mx-[70px]">
        <div className="flex justify-between my-[30px]">
          <p className="text-[24px] font-semibold">Collections</p>
            <button onClick={() => handleSidebarClickSecond("newCollection")} className="border-2 px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white">
              New Collection
            </button>
        </div>
        <div>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{ pageSize: 10 }}
            className="overflow-auto bg-white shadow-custom rounded-xl"
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
    id: "12",
    collectionName: "New Vendors",
    code: "NEWVENDOR-Y",
  },
  {
    key: "2",
    checkbox: <Checkbox />,
    id: "12",
    collectionName: "New Vendors",
    code: "NEWVENDOR-Y",
  },
  {
    key: "3",
    checkbox: <Checkbox />,
    id: "12",
    collectionName: "New Vendors",
    code: "NEWVENDOR-Y",
  },
];

const columns = [
  {
    title: "Select",
    dataIndex: "checkbox",
  },
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Collection Name",
    dataIndex: "collectionName",
  },
  {
    title: "Code",
    dataIndex: "code",
  },
];

export default Collections;
