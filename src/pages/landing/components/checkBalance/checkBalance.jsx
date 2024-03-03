import React from "react";
import vector_1 from "../../Assets/SVGs/vector_1.svg";
import vector_2 from "../../Assets/SVGs/vector_2.svg";
import vector_3 from "../../Assets/SVGs/vector_3.svg";
import emoji_warning from "../../Assets/SVGs/warning.svg";
import check_balance from "../../Assets/Images/check_balance.jpeg";

const CheckBalance = () => {
  return (
    <div className="w-[80%] m-[auto] grid grid-cols-2	bg-[#F7F7F7] p-[20px] gap-[40px]">
      <div className="grid p-[10px]">
        <h2 className="font-bold text-[20px] text-[#535353]">Hello Brandon,</h2>
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
        <div className="flex justify-between">
          <button className="bg-[#015FF1] text-white px-[20px] py-[5px] rounded w-max justify-self-center   h-[40px] hover:bg-transparent hover:border-2 border-[#015FF1] hover:text-black">
            Make Payment
          </button>
          <button className="bg-[#015FF1] text-white px-[20px] py-[5px] rounded w-max justify-self-center   h-[40px] hover:bg-transparent hover:border-2 border-[#015FF1] hover:text-black">
            Transfer
          </button>
        </div>
      </div>
      <div>
        <img src={check_balance} alt="check_balance" />
      </div>
    </div>
  );
};

export default CheckBalance;
