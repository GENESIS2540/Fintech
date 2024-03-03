import React from "react";

const SidebarSettings = ({ setSelectedSetting }) => {
  const handleSettingClick = (setting) => {
    setSelectedSetting(setting)
  };

  return (
    <div className="bg-white shadow-custom p-[25px] grid gap-[15px]">
      <div>
        <button onClick={() => handleSettingClick("store")}>
          <p className="uppercase text-[24=0px] font-semibold hover:underline hover:text-[#015FF1]">
            Store Setting
          </p>
        </button>
        <p className="text-[14px] mt-[10px]">
          Configure your store information
        </p>
      </div>
      <hr />
      <div>
        <button onClick={() => handleSettingClick("payment")}>
          <p className="uppercase text-[24=0px] font-semibold hover:underline hover:text-[#015FF1]">
            Payment setting
          </p>
        </button>
        <p className="text-[14px] mt-[10px]">
          Configure the available payment methods
        </p>
      </div>
      <hr />
      <div>
        <button onClick={() => handleSettingClick("shipping")}>
          <p className="uppercase text-[24=0px] font-semibold hover:underline hover:text-[#015FF1]">
            Shipping Setting
          </p>
        </button>
        <p className="text-[14px] mt-[10px]">
          Where you ship, shipping methods and delivery fee
        </p>
      </div>
      <hr />
      <div>
        <button onClick={() => handleSettingClick("tax")}>
          <p className="uppercase text-[24=0px] font-semibold hover:underline hover:text-[#015FF1]">
            Tax Setting
          </p>
        </button>
        <p className="text-[14px] mt-[10px]">
          Configure tax classes and tax rates
        </p>
      </div>
    </div>
  );
};

export default SidebarSettings;
