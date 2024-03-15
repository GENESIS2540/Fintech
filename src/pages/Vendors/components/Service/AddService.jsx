import React, { useState } from "react";
import { Card, Input } from "antd";
import Header from "../../../customer/components/common/Header";

const AddService = () => {
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
        <Header title={"Add Serive"} category={"Add"} />
      <div className="flex h-screen items-center justify-center">
        <div className="grid bg-white rounded-lg shadow-2xl w-11/12">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center py-4"></div>

            <div className="flex justify-center">
              <div className="flex">
                <h1 className="text-[#015FF1] font-bold md:text-2xl text-xl">
                  ADD SERVICE
                </h1>
              </div>
            </div>

            <Card>
              
              <div className="mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                  Service Name
                </label>
                <input
                  name="preferredMethods"
                  onChange={handleChange}
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="vendor-service"
                  type="text"
                  placeholder="Service Name"
                />
              </div>

             
              <div className="mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Service Description
                </label>
                <textarea
                  name="currencyOptions"
                  onChange={handleChange}
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="vendor-additional-info"
                  placeholder="Service Description"
                  rows="4"
                ></textarea>
              </div>

            
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Regular Price
                  </label>
                  <input
                    name="payoutSchedule"
                    onChange={handleChange}
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="vendor-price"
                    type="text"
                    placeholder="Regular Price"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Sale Price
                  </label>
                  <input
                    name="bankAccount"
                    onChange={handleChange}
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="vendor-options"
                    type="text"
                    placeholder="Sale Price"
                  />
                </div>
              </div>

            
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Item Image
                  </label>
                  <input
                    name="accountHolderName"
                    onChange={handleChange}
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="item-image"
                    type="file"
                    placeholder="Input Image"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Quantity
                  </label>
                  <input
                    name="accountNumber"
                    onChange={handleChange}
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="vendor-options"
                    type="text"
                    placeholder="Add Quantity"
                  />
                </div>
              </div>

            
              <div className="grid grid-cols-1 mt-5">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                  Bank Account
                </label>
                <input
                  name="routingNumber"
                  onChange={handleChange}
                  className="py-2 px-3 rounded-lg border-2  mt-1 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent"
                  type="text"
                  placeholder="Bank Account"
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

export default AddService;
