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
      <div className="grid md:grid-cols-2 gap-[10px] item-center">
        <Card>
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
              />
            </div>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>Routing Number</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input
                type="text"
                name="routingNumber"
                value={paymentInfo.routingNumber}
                onChange={handleChange}
                placeholder="Routing Number"
                required
              />
            </div>
            <button
              type="submit"
              className="shadow-btn transition-all ease-in-out duration-500 mt-[10px] w-max font-semibold px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white"
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
