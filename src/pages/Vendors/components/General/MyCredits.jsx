import React, { useState } from "react";
import Header from "../common/Header";

const MyCredits = () => {
  const [creditList, setCreditList] = useState([]);
  const [creditAmount, setCreditAmount] = useState("");
  const [transactionType, setTransactionType] = useState("Earn");

  const handleAmountChange = (e) => {
    setCreditAmount(e.target.value);
  };

  const handleTransactionTypeChange = (e) => {
    setTransactionType(e.target.value);
  };

  const handleCreditSubmit = (e) => {
    e.preventDefault();

    const newCredit = {
      amount: creditAmount,
      type: transactionType,
      date: new Date().toLocaleDateString(),
    };

    setCreditList([newCredit, ...creditList.slice(0, 4)]); // Only keep the latest 5 transactions
    setCreditAmount("");
  };

  return (
    <div>
      <Header title={"My Credits"} category={"Credits"} />
      <div className="max-w-lg mx-auto mt-8 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-500 py-4 px-6">
          <h2 className="text-2xl font-bold text-white">Credits Page</h2>
        </div>
        <div className="p-6">
          <form onSubmit={handleCreditSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Transaction Type:
              </label>
              <select
                value={transactionType}
                onChange={handleTransactionTypeChange}
                className="mt-1 p-2 w-full border rounded-md"
              >
                <option value="Earn">Earn Credits</option>
                <option value="Redeem">Redeem Credits</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Amount:
              </label>
              <input
                type="text"
                value={creditAmount}
                onChange={handleAmountChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Submit Transaction
            </button>
          </form>
        </div>
        <div className="p-6 overflow-y-auto max-h-72">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Your Credit Transaction History
          </h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Transaction Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {creditList.map((credit, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {credit.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {credit.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {credit.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCredits;
