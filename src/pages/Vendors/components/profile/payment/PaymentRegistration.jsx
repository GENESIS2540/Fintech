import React, { useState } from "react";
import Header from "../../common/Header";
import { Card, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

const PaymentRegistration = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    preferredMethods: "",
    currencyOptions: "",
    payoutSchedule: "",
    bankAccount: "",
    accountHolderName: "",
    accountNumber: "",
    routingNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment information submitted:", paymentInfo);
  };

  return (
    <div>
      <Header title={"Update Credentials"} category={"Update Credentials"} />
      <div className="grid md:grid-cols-2 gap-[10px] items-center">
        <Card >
          <p className="font-semibold text-18px">Update Payment Information</p>
          <hr className="my-[10px]" />
          <form className="grid gap-[10px]" onSubmit={handleSubmit}>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>Preferred Payment Methods</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input
                type="text"
                name="preferredMethods"
                value={paymentInfo.preferredMethods}
                onChange={handleChange}
                placeholder="Preferred Payment Methods"
                required
                className="py-2 px-3 rounded-xl border-2  mt-1 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>Currency Options</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input
                type="text"
                name="currencyOptions"
                value={paymentInfo.currencyOptions}
                onChange={handleChange}
                placeholder="Currency Options"
                required
                className="py-2 px-3 rounded-xl border-2  mt-1 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>Payout Schedule</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input
                type="text"
                name="payoutSchedule"
                value={paymentInfo.payoutSchedule}
                onChange={handleChange}
                placeholder="Payout Schedule"
                required
                className="py-2 px-3 rounded-xl border-2  mt-1 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>Bank Account</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input
                type="text"
                name="bankAccount"
                value={paymentInfo.bankAccount}
                onChange={handleChange}
                placeholder="Bank Account"
                required
                className="py-2 px-3 rounded-xl border-2  mt-1 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>Account Holder Name</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input
                type="text"
                name="accountHolderName"
                value={paymentInfo.accountHolderName}
                onChange={handleChange}
                placeholder="Account Holder Name"
                required
                className="py-2 px-3 rounded-xl border-2  mt-1 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>Account Number</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input
                type="text"
                name="accountNumber"
                value={paymentInfo.accountNumber}
                onChange={handleChange}
                placeholder="Account Number"
                required
                className="py-2 px-3 rounded-xl border-2  mt-1 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent"
              />
            </div>


            <button
              type="submit"
              className="shadow-btn transition-all ease-in-out duration-500 mt-[10px] w-max font-semibold px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white flex items-center justify-center mx-auto"
            >
              Save
            </button>


          </form>
        </Card>
      </div>
    </div>
  );
};

export default PaymentRegistration;
