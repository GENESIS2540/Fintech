import React from "react";
import Header from "../common/Header";

const Offers = () => {
  return (
    <div>
      <Header title={"My Offers"} category={"Offers"} />
      <div className="grid gap-[10px] shadow-custom p-[20px]">
        <div className="flex gap-[20px]">
          <div className="w-[150px] h-[150px] border"></div>
          <div className="grid">
            <p className="font-semibold text-[20px]">
              10.00 % OFF <span>Christmas</span>
            </p>
            <p className="opacity-75 text-[14px]">Min Order : C$127.77</p>
            <p>Expires On: 12/04/2082</p>
          </div>
        </div>
        <button className="hover:border-[black] border hover:opacity-100 opacity-75 hover:border-dashed rounded-[100vw] w-max px-[20px] py-[2px]">
          Christmas
        </button>
      </div>
    </div>
  );
};

export default Offers;
