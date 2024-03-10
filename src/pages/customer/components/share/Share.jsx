import React from "react";
import Header from "../common/Header";
import { Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import shareEarn from "../../assets/share-earn.png";
import {
  LinkedinFilled,
  RedditOutlined,
  SkypeOutlined,
  WhatsAppOutlined,
  XOutlined,
} from "@ant-design/icons";

const Share = () => {
  return (
    <div>
      <Header title={"Share And Earn"} category={"Share Earn"} />
      <div className="shadow-custom grid gap-[20px]">
        <div className="text-center grid">
          <img
            className="h-[200px] place-self-center"
            src={shareEarn}
            alt="Share and Earn Img"
          />
          <p className="font-semibold text-[20px]">Invite your friends</p>
          <p className="opacity-75">
            Invite your friends to join BNPL and earn once they sign up.
          </p>
        </div>
        <Input
          className="w-[70%] place-self-center"
          placeholder="Email Address"
        />
        <div className="flex justify-center gap-[10px] flex-wrap p-[20px]">
          <div className="border-2 h-[40px] w-[40px] rounded-[50%] flex justify-center items-center cursor-pointer hover:bg-[#015FF1] hover:text-white transition-all ease-in-out duration-500">
            <FontAwesomeIcon className="" icon={faCopy} />
          </div>
          <div className="border-2 h-[40px] w-[40px] rounded-[50%] flex justify-center items-center cursor-pointer hover:bg-[#3b5998] hover:fill-white transition-all ease-in-out duration-500">
            <svg
              className="h-[20px] w-[20px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
            </svg>
          </div>
          <div className="border-2 text-[20px] h-[40px] w-[40px] rounded-[50%] flex justify-center items-center cursor-pointer hover:bg-[#0e76a8] hover:text-white transition-all ease-in-out duration-500">
            <LinkedinFilled />
          </div>
          <div className="border-2 text-[20px] h-[40px] w-[40px] rounded-[50%] flex justify-center items-center cursor-pointer hover:bg-[#000000] hover:text-white transition-all ease-in-out duration-500">
            <RedditOutlined />
          </div>
          <div className="border-2 text-[20px] h-[40px] w-[40px] rounded-[50%] flex justify-center items-center cursor-pointer hover:bg-[#00aff0] hover:text-white transition-all ease-in-out duration-500">
            <SkypeOutlined />
          </div>
          <div className="border-2 h-[40px] w-[40px] rounded-[50%] flex justify-center items-center cursor-pointer hover:bg-[#0088cc] hover:fill-white transition-all ease-in-out duration-500">
            <svg
              className="h-[20px] w-[20px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
            </svg>
          </div>
          <div className="border-2 text-[20px] h-[40px] w-[40px] rounded-[50%] flex justify-center items-center cursor-pointer hover:bg-[#00acee] hover:text-white transition-all ease-in-out duration-500">
            <XOutlined />
          </div>
          <div className="border-2 text-[20px] h-[40px] w-[40px] rounded-[50%] flex justify-center items-center cursor-pointer hover:bg-[#075e54] hover:text-white transition-all ease-in-out duration-500">
            <WhatsAppOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
