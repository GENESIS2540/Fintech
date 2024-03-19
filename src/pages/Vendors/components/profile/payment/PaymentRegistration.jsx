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
      <div className="py-4">
        <div className="w-full max-w-lg mx-auto">
          <Card className="py-4">
            <p className="font-semibold text-xl mb-4">Update Payment Information</p>
            <hr className="my-4" />
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(paymentInfo).map(([key, value]) => (
                  <div key={key}>
                    <div className="flex gap-2">
                      <label>{key}</label>
                      <FontAwesomeIcon className="text-red-500 mt-1" icon={faAsterisk} />
                    </div>
                    <Input
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleChange}
                      placeholder={key}
                      required
                      className="py-2 px-3 rounded-lg border-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-6 py-4">
                <button
                  type="submit"
                  className="shadow-btn transition-all ease-in-out duration-500 w-[150px] font-semibold px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700"
                >
                  Save
                </button>
                </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentRegistration;
