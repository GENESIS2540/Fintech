import React from "react";
import { Table } from "antd";
import Header from "../../common/Header";

const Rewards = () => {
  return (
    <div className="grid gap-[10px]">
      <Header title={"Reward Points"} category={"Reward points"} />
      <div className="container text-white">
      <div className="card shadow-custom px-[20px] py-[30px] gap-[40px] w-max flex">
        <div className="grid">
          <p className="font-semibold text-[18px]">Current Reward Points</p>
          <p className="opacity-75">Reward point balance</p>
          <p className="font-semibold text-[18px] mt-[10px]">500</p>
        </div>
        <div className="justify-center flex flex-col">
          <p className="opacity-75">Worth:</p>
          <p className="font-semibold">C$319.41</p>
        </div>
      </div>
      </div>
      
      <div className="shadow-custom">
        <Table />
      </div>
    </div>
  );
};

export default Rewards;
