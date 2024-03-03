import { Collapse } from "antd";
import React from "react";

const CustomCollapse = ({ icon, title, children }) => {
  return (
    <Collapse
      className="bg-white"
      expandIconPosition="end"
      bordered={false}
      size="small"
      items={[
        {
          key: "1",
          label: (
            <div className="flex text-[16px] font-semibold items-center gap-[5px]">
              {icon}
              {title}
            </div>
          ),
          children: (
            <div className="text-zinc-700">
            {children}
          </div>
          ),
        },
      ]}
    />
  );
};

export default CustomCollapse;
