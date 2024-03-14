import React, { useState } from "react";
import Header from "../../common/Header";

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
      <Header title={"Payment Registration"} category={"Register"} />

      <div className="min-h-screen py-8 flex justify-center">
        <div className="bg-white rounded-md shadow-md overflow-hidden w-full max-w-lg">
          <div className="bg-blue-500 py-4 px-6 text-white font-bold text-xl">
            Payment Registration
          </div>
          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols- gap-6">
              <InputField
                label="Preferred Payment Methods"
                name="preferredMethods"
                value={paymentInfo.preferredMethods}
                onChange={handleChange}
              />
              <InputField
                label="Currency Options"
                name="currencyOptions"
                value={paymentInfo.currencyOptions}
                onChange={handleChange}
              />
              <InputField
                label="Payout Schedule"
                name="payoutSchedule"
                value={paymentInfo.payoutSchedule}
                onChange={handleChange}
              />
              <InputField
                label="Bank Account"
                name="bankAccount"
                value={paymentInfo.bankAccount}
                onChange={handleChange}
              />
              <InputField
                label="Account Holder Name"
                name="accountHolderName"
                value={paymentInfo.accountHolderName}
                onChange={handleChange}
              />
              <InputField
                label="Account Number"
                name="accountNumber"
                value={paymentInfo.accountNumber}
                onChange={handleChange}
              />
              <InputField
                label="Routing Number"
                name="routingNumber"
                value={paymentInfo.routingNumber}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6 w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

const InputField = ({ label, name, value, onChange }) => (
  <div>
    <label htmlFor={name} className="block text-gray-700 font-bold mb-1">
      {label}
    </label>
    <input
      type="text"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="input-field w-full border rounded-md px-3 py-2 outline-none focus:border-blue-500"
    />
  </div>
);

export default PaymentRegistration;
