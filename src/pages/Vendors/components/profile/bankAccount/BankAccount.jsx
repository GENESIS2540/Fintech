import React from "react";
import Header from "../../common/Header";
import { Alert, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import TextArea from "antd/es/input/TextArea";

export default function BankAccount() {
  return (
    <div className="mb-[20px]">
      <Header title={"Bank Account"} category={"Bank account information"} />
      <form className="grid gap-[20px]">
        <div className="flex gap-[40px] justify-between">
          <div className="grid gap-[10px] w-[100%]">
            <div className="flex gap-[5px]">
              <label>Bank name</label>
              <FontAwesomeIcon
                className="text-[red] mt-[5px] text-[8px] "
                icon={faAsterisk}
              />
            </div>

            <Input type="text" required />
          </div>
          <div className="grid gap-[10px] w-[100%]">
            <div className="flex gap-[5px]">
              <label>Account holder name</label>
              <FontAwesomeIcon
                className="text-[red] mt-[5px] text-[8px] "
                icon={faAsterisk}
              />
            </div>
            <Input type="text" required />
          </div>
        </div>
        <div className="flex gap-[40px] justify-between">
          <div className="grid gap-[10px] w-[100%]">
            <div className="flex gap-[5px]">
              <label>Account number</label>
              <FontAwesomeIcon
                className="text-[red] mt-[5px] text-[8px] "
                icon={faAsterisk}
              />
            </div>
            <Input type="number" required />
          </div>
          <div className="grid gap-[10px] w-[100%]">
            <div className="flex gap-[5px]">
              <label>IFSC/Swift code</label>
              <FontAwesomeIcon
                className="text-[red] mt-[5px] text-[8px] "
                icon={faAsterisk}
              />
            </div>
            <Input required />
          </div>
        </div>
        <div className=" grid gap-[10px]">
          <label>Bank Address</label>
          <TextArea />
        </div>
        <div className="flex w-max">
          <Alert
            description="Your bank information is safe with us"
            type="info"
            showIcon
          />
        </div>
        <button type="submit" className="border-2 font-semibold px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white">
            Save Changes
          </button>
      </form>
    </div>
  );
}
