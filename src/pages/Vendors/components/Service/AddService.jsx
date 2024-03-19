import React, { useState } from "react";
import { Card, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import Header from "../common/Header";

const AddService = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    serviceName: "",
    serviceDescription: "",
    regularPrice: "",
    salePrice: "",
    itemImage: "",
    quantity: "",
    bankAccount: "",
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
      <Header title={"Add Service"} category={" Service"} />

      <div className="grid md:grid-cols-2 gap-[10px] items-center">
        <Card>
          <p className="font-semibold text-18px">Add Service Details </p>
          <hr className="my-[10px]" />
          <form className="grid gap-[10px]" onSubmit={handleSubmit}>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>Service Name</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input
                type="text"
                name="serviceName"
                value={paymentInfo.serviceName}
                onChange={handleChange}
                placeholder="Service Name"
                required
                className="py-2 px-3 rounded-xl border-2  mt-1 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>Service Description</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input
                type="text"
                name="serviceDescription"
                value={paymentInfo.serviceDescription}
                onChange={handleChange}
                placeholder="Service Description"
                required
                className="py-2 px-3 rounded-xl border-2  mt-1 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>Regular Price</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input
                type="text"
                name="regularPrice"
                value={paymentInfo.regularPrice}
                onChange={handleChange}
                placeholder="Regular Price"
                required
                className="py-2 px-3 rounded-xl border-2  mt-1 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>Sale Price</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input
                type="text"
                name="salePrice"
                value={paymentInfo.salePrice}
                onChange={handleChange}
                placeholder="Sale Price"
                required
                className="py-2 px-3 rounded-xl border-2  mt-1 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>Item Image</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input
                type="file"
                name="itemImage"
                onChange={handleChange}
                placeholder="Item Image"
                required
                className="py-2 px-3 rounded-xl border-2  mt-1 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>Quantity</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input
                type="text"
                name="quantity"
                value={paymentInfo.quantity}
                onChange={handleChange}
                placeholder="Quantity"
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

export default AddService;
