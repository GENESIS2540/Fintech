import React from "react";
import StoreSettings from "./StoreSettings";
import PaymentSettings from "./PaymentSettings";
import ShippingSettings from "./ShippingSettings";
import TaxSettings from "./TaxSettings";
import SidebarSettings from "./SidebarSettings";

const Settings = () => {
  const [selectedSetting, setSelectedSetting] = React.useState("store")
  return (
    <div className="overflow-aut w-[95%] mx-[auto]">
      <div className="grid md:grid-cols-3 gap-[20px] sm:mx-[20px] mt-[30px]">
        <div className="">
          <SidebarSettings setSelectedSetting={setSelectedSetting}/>
        </div>
        <div className="md:col-span-2">
          {selectedSetting === "store" && <StoreSettings />}
          {selectedSetting === "payment" && <PaymentSettings />}
          {selectedSetting === "shipping" && <ShippingSettings />}
          {selectedSetting === "tax" && <TaxSettings />}
        </div>
      </div>
    </div>
  );
};

export default Settings;
