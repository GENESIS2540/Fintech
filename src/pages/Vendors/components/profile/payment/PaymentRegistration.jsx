import React, { useState } from "react";
import Header from "../../common/Header";
import { Card, Input } from "antd";


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
    <>
      <Header title={"Payment Integration Page"} category={"Register"} />

      <div className="flex h-screen items-center justify-center">
        <div className="grid bg-white rounded-lg shadow-2xl w-11/12">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center py-4"></div>

            <div className="flex justify-center">
              <div className="flex">
                <h1 className="text-[#015FF1] font-bold md:text-2xl text-xl">
                  REGISTER
                </h1>
              </div>
            </div>

            <Card>
              <div className="grid grid-cols-1">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                  Preferred Payment Methods
                </label>
                <input
                  name="preferredMethods"
                  onChange={handleChange}
                  className="py-2 px-3 rounded-xl border-2  mt-1 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent"
                  type="text"
                  placeholder="Preferred Payment Methods"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5">
                <div className="grid grid-cols-1">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Currency Options
                  </label>
                  <select
                    name="currencyOptions"
                    onChange={handleChange}
                    className="py-2 px-3 rounded-lg border-2  mt-1 focus:outline-none focus:ring-1 focus:ring-blue-600 "
                  >
                    <option>USD</option>
                    <option>KES</option>
                    <option>INR</option>
                  </select>
                </div>
                <div className="grid grid-cols-1">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Payout Schedule
                  </label>
                  <input
                    name="payoutSchedule"
                    onChange={handleChange}
                    className="py-2 px-3 rounded-lg border-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent"
                    type="text"
                    placeholder="Payout Schedule"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 mt-5">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                  Bank Account
                </label>
                <input
                  name="bankAccount"
                  onChange={handleChange}
                  className="py-2 px-3 rounded-lg border-2  mt-1 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent"
                  type="text"
                  placeholder="Bank Account"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5">
                <div className="grid grid-cols-1">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Account Holder Name
                  </label>
                  <input
                    name="accountHolderName"
                    onChange={handleChange}
                    className="py-2 px-3 rounded-lg border-2  mt-1 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent"
                    type="text"
                    placeholder="Account Holder Name"
                  />
                </div>
                <div className="grid grid-cols-1">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Account Number
                  </label>
                  <input
                    name="accountNumber"
                    onChange={handleChange}
                    className="py-2 px-3 rounded-lg border-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent"
                    type="text"
                    placeholder="Account Number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 mt-5">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                  Routing Number
                </label>
                <input
                  name="routingNumber"
                  onChange={handleChange}
                  className="py-2 px-3 rounded-lg border-2  mt-1 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent"
                  type="text"
                  placeholder="Routing Number"
                />
              </div>
            </Card>

            <div className="flex items-center justify-center md:gap-8 gap-4 pt-5 pb-5">
              <button className="w-auto bg-[#015FF1] hover:bg-[#015FF1] rounded-lg shadow-xl font-medium text-white px-4 py-2">
                Update
              </button>
              <button
                className="w-auto bg-[#015FF1] hover:bg-[#015FF1] rounded-lg shadow-xl font-medium text-white px-4 py-2"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PaymentRegistration;
