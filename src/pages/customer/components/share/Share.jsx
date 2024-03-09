import React from "react";
import Header from "../common/Header";
import { Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const Share = () => {
  return (
    <div>
      <Header title={"Share And Earn"} category={"Share Earn"} />
      <div className="shadow-custom">
        <div className="text-center">
        <p className="font-semibold text-[20px]">Invite your friends</p>
        <p className="opacity-75">
          Invite your friends to join BNPL and earn once they sign up.
        </p>
        </div>
        <Input placeholder="Email Address"/>
        <div className="text-center">
        <div className="border-2 h-[40px] w-[40px] rounded-[50%] flex justify-center items-center cursor-pointer">
        <FontAwesomeIcon className="" icon={faCopy}/>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default Share;
