import React from "react";
import Header from "../../common/Header";
import { Divider, Switch } from "antd";

const Cookie = () => {
  return (
    <div>
      <Header title={"Cookie Preferences"} category={"Cookie preferences"} />
      <div className=" p-[20px] shadow-custom">
        <div className="grid gap-[10px]">
          <div className="flex gap-[15px]">
            <Switch defaultChecked  className="shadow-custom"/>
            <p className="font-semibold text-[18px]">Functional</p>
          </div>
          <p className="opacity-75">
            These cookies are required for optimum operation of the website, and
            cannot be configured. They allow us to offer you the key functions
            of the website (language used, display resolution, account access,
            shopping bag, wish list, etc.), through various plugins and
            additional functions that helps in proper functioning of the website
            and acts as a safeguard against any attempted fraud.
          </p>
        </div>
        <Divider />
        <div className="grid gap-[10px]">
          <div className="flex gap-[15px]">
            <Switch defaultChecked  className="shadow-custom"/>
            <p className="font-semibold text-[18px]">Statistical analysis</p>
          </div>
          <p className="opacity-75">
            These cookies are used to measure and analyse our website audience
            (visitor volume, pages viewed, average browsing time, etc.) to help
            us improve its performance. By accepting these cookies, you are
            helping us to improve our website.
          </p>
        </div>
        <Divider />
        <div className="grid gap-[10px]">
          <div className="flex gap-[15px]">
            <Switch defaultChecked  className="shadow-custom"/>
            <p className="font-semibold text-[18px]">Personalize experience</p>
          </div>
          <p className="opacity-75">
            These cookies allow us to provide you with online or in-store
            recommendations of products, services and content that match your
            expectations and preferences. By accepting these cookies, you are
            opting for an enriched and personalized experience.
          </p>
        </div>
        <Divider />
        <button className="text-white font-semibold bg-red-500 px-[20px] py-[5px] rounded-lg">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Cookie;
