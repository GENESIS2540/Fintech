import React, { useContext, useState } from 'react';
import { Drawer, Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { AlignJustify } from 'lucide-react';
import { departments, shoppingIdeas } from '../data';
import { CartContext } from '../../../context';

const MobileLeftDrawer = ({ handleClick }) => {
  const [open, setOpen] = useState(false);

  const { loggedInUser } = useContext(CartContext);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <div
          onClick={showDrawer}
          className="flex gap-1  cursor-pointer"
        >
          <AlignJustify />
        </div>
      </Space>
      <Drawer
        title={`Hello, ${loggedInUser.firstName}`}
        placement="left"
        width={300}
        onClose={onClose}
        open={open}
        closeIcon={<CloseOutlined />}
      >
        <div className="p-4">
          <p className="font-semibold text-xl">Shopping Ideas</p>
          {shoppingIdeas.map((shop) => (
            <button
              className="grid my-2 hover:text-primary transition-all duration-200"
              key={shop.value}
              onClick={() => handleClick(shop.value)}
            >
              {shop.text}
            </button>
          ))}
          <p className="font-semibold text-xl">Departments </p>
          {departments.map((department) => (
            <button
              className="grid my-2 hover:text-primary transition-all duration-200"
              key={department.value}
              onClick={() => handleClick(department.value)}
            >
              {department.text}
            </button>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default MobileLeftDrawer;
