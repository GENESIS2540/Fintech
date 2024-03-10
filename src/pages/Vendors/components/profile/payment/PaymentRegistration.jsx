import React, { useState } from "react";


    const PaymentRegistration = () => {
        const [paymentInfo, setPaymentInfo] = useState({
          preferredMethods: "",
          currencyOptions: "",
          payoutSchedule: "",
          bankAccount: "",
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setPaymentInfo({ ...paymentInfo, [name]: value });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          // Add logic to submit payment information to the server
          console.log("Payment information submitted:", paymentInfo);
          // You may want to send this data to your backend for further processing
        };
  return (
  
    
    <div className="container mx-auto p-6 bg-white rounded-md shadow-md mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Payment Registration</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="preferredMethods" className="block text-sm font-medium text-gray-600">
            Preferred Payment Methods
          </label>
          <input
            type="text"
            id="preferredMethods"
            name="preferredMethods"
            value={paymentInfo.preferredMethods}
            onChange={handleChange}
            className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="currencyOptions" className="block text-sm font-medium text-gray-600">
            Currency Options
          </label>
          <input
            type="text"
            id="currencyOptions"
            name="currencyOptions"
            value={paymentInfo.currencyOptions}
            onChange={handleChange}
            className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="payoutSchedule" className="block text-sm font-medium text-gray-600">
            Payout Schedule
          </label>
          <input
            type="text"
            id="payoutSchedule"
            name="payoutSchedule"
            value={paymentInfo.payoutSchedule}
            onChange={handleChange}
            className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="bankAccount" className="block text-sm font-medium text-gray-600">
            Bank Account
          </label>
          <input
            type="text"
            id="bankAccount"
            name="bankAccount"
            value={paymentInfo.bankAccount}
            onChange={handleChange}
            className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="accountHolderName" className="block text-sm font-medium text-gray-600">
            Account Holder Name
          </label>
          <input
            type="text"
            id="accountHolderName"
            name="accountHolderName"
            value={paymentInfo.accountHolderName}
            onChange={handleChange}
            className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-600">
              Account Number
            </label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              value={paymentInfo.accountNumber}
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="routingNumber" className="block text-sm font-medium text-gray-600">
              Routing Number
            </label>
            <input
              type="text"
              id="routingNumber"
              name="routingNumber"
              value={paymentInfo.routingNumber}
              onChange={handleChange}
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-6 w-full"
        >
          Submit
        </button>
      </form>
    </div>

  )
}

export default PaymentRegistration