import React from "react";
import vector_1 from "../../../assets/vector_1.svg";
import vector_2 from "../../../assets/vector_1.svg";
import vector_3 from "../../../assets/vector_1.svg";
import emoji_warning from "../../../assets/warning.svg";
import check_balance from "../../../assets/check_balance.jpeg";

const CheckBalance = () => {
  return (
    <div className="grid grid-cols-2 p-[20px] gap-[40px]">
      <div className="grid p-[10px]">
        <h3 className="font-bold text-[20px] text-[#015FF1]">
          Account Balance
        </h3>
        <h2 className="font-bold text-[20px] text-[#535353]">
          Account Statistics
        </h2>
        <div className="flex justify-between">
          <div className="relative">
            <img src={vector_1} alt="vector_1" />
            <p className="absolute top-[23px] left-[18px] text-[25px] font-semibold text-[#696464]">
              99%
            </p>
            <p className="text-[12px] text-[#6D6D6D]">Account Balance</p>
          </div>

          <div className="relative">
            <img src={vector_2} alt="vector_2" />
            <p className="absolute top-[23px] left-[15px] text-[25px] font-semibold text-[#696464]">
              0.9%
            </p>
            <p className="text-[12px] text-[#6D6D6D]">Make Payments</p>
          </div>
          <div className="relative">
            <img src={vector_3} alt="vector_3" />
            <p className="absolute top-[23px] left-[18px] text-[25px] font-semibold text-[#696464]">
              0.0%
            </p>
            <p className="text-[12px] text-[#6D6D6D]">Maintainance</p>
          </div>
        </div>

        <div className="flex gap-[10px] items-center text-[12px] text-[#D7D7D7] border mb-[30px]">
          <img src={emoji_warning} alt="emoji_warning" />
          <p>
            Your Account may be Blocked as no activity has taken place for a
            long time Plese Login to prevent this from Happening.
          </p>
        </div>
        <p className="font-semibold text-[24px]">$4,500</p>
        <hr className="bg-[#D7D7D7]" />
        <p className="text-[#84DA97] text-[14px]">Credit Balance</p>
        <p className="font-semibold text-[24px]">$4,800</p>
        <hr className="bg-[#D7D7D7]" />
        <p className="text-[#DC6D6D] text-[14px]">Ledger Balance</p>
      </div>
      <div>
        <img src={check_balance} alt="check_balance" />
      </div>
    </div>
  );
};

export default CheckBalance;
