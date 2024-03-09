import React, { useState } from "react";
import Header from "../../common/Header";

const Return = () => {
  const [formData, setFormData] = useState({
    orderNumber: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Form submitted:", formData);
  
    setFormData({
      orderNumber: "",
      reason: "",
    });
  };

  return (
    <div>
      <Header title={"Order Return Requests"} category={"Order Return Requests"} />

      <div className="container mx-auto mt-8">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Submit Return Request</h2>

          <div className="mb-4">
            <label htmlFor="orderNumber" className="block text-gray-700 font-bold mb-2">
              Order Number:
            </label>
            <input
              type="text"
              id="orderNumber"
              name="orderNumber"
              value={formData.orderNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="reason" className="block text-gray-700 font-bold mb-2">
              Reason for Return:
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Return;
