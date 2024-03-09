import React, { useState } from 'react';
import Header from "../../common/Header";

const Cancellation = () => {


  const [formData, setFormData] = useState({
    vendorName: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
    cancellationReason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  return (
    <div>
      <Header
        title={"Cancellation Requests"}
        category={"Order Cancellation Requests"}
      />
      <div className="container mx-auto mt-8">
        <p className="text-center font-bold mb-6">We're sorry to see you go. Please fill out the form below to initiate the cancellation process.</p>

        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <label className="block mb-2" htmlFor="vendorName">Vendor Name:</label>
          <input
            type="text"
            id="vendorName"
            name="vendorName"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            onChange={handleChange}
            required
          />

          <label className="block mb-2" htmlFor="contactPerson">Contact Person:</label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            onChange={handleChange}
            required
          />

          <label className="block mb-2" htmlFor="contactEmail">Contact Email:</label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            onChange={handleChange}
            required
          />

          <label className="block mb-2" htmlFor="contactPhone">Contact Phone:</label>
          <input
            type="tel"
            id="contactPhone"
            name="contactPhone"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            onChange={handleChange}
            required
          />

          <label className="block mb-2" htmlFor="cancellationReason">Reason for Cancellation:</label>
          <textarea
            id="cancellationReason"
            name="cancellationReason"
            rows="4"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
          >
            Submit Cancellation Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cancellation;
