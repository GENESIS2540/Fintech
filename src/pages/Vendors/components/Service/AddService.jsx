import React from "react";
import Header from "../common/Header";

const AddService = () => {

  
  return (
    <div>
      <Header title={"Add Service"} category={"Add"} />
      <form className="w-full max-w-lg mx-auto mt-8 p-8 bg-white rounded shadow-lg">

  <div className="mb-6">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="vendor-service">
      Service Description
    </label>
    <input
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="vendor-service"
      type="text"
      placeholder="Photography, Catering, Event Planning, etc."
    />
    <p className="text-red-500 text-xs italic">Please provide a service description.</p>
  </div>

 
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="vendor-price">
        Pricing
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="vendor-price"
        type="text"
        placeholder="Enter pricing details (e.g., $100 per hour)"
      />
      <p className="text-red-500 text-xs italic">Please specify pricing information.</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="vendor-options">
        Available Options
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="vendor-options"
        type="text"
        placeholder="List available options (e.g., gold package, silver package)"
      />
    </div>
  </div>


  <div className="mb-6">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="vendor-additional-info">
      Additional Information
    </label>
    <textarea
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="vendor-additional-info"
      placeholder="Add any additional information relevant to your offerings."
      rows="4"
    ></textarea>
  </div>


  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3 mb-6">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="item-name">
        Item Name
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="item-name"
        type="text"
        placeholder="E.g., Wedding Package, Corporate Catering, etc."
      />
      <p className="text-red-500 text-xs italic">Please provide an item name.</p>
    </div>
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="item-price">
        Item Price
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="item-price"
        type="text"
        placeholder="Enter item price"
      />
    </div>
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="item-image">
        Item Image (URL)
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="item-image"
        type="text"
        placeholder="Enter the URL of the item image"
      />
    </div>
    <div className="w-full px-3 mb-6">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="item-description">
        Item Description
      </label>
      <textarea
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="item-description"
        placeholder="Add a description for the item."
        rows="4"
      ></textarea>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="vendor-city">
        City
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="vendor-city"
        type="text"
        placeholder="City"
      />
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="vendor-state">
        State
      </label>
      <div className="relative">
        <select
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="vendor-state"
        >
          <option>Select State</option>
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="vendor-zip">
        Zip
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="vendor-zip"
        type="text"
        placeholder="Zip"
      />
    </div>
  </div>


  <div className="flex justify-center">
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
    >
      Submit
    </button>
  </div>
</form>
    </div>
  );
};

export default AddService;
