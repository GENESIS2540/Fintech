// CreditsPage.js
import React, { useState } from "react";

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

    setCreditList([...creditList, newCredit]);

  
    setCreditAmount("");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Credits Page</h2>

    
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Request or Redeem Credits:</h3>
        <form onSubmit={handleCreditSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Transaction Type:</label>
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
            <label className="block text-sm font-medium text-gray-600">Amount:</label>
            <input
              type="text"
              value={creditAmount}
              onChange={handleAmountChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
          >
            Submit Transaction
          </button>
        </form>
      </div>

    
      <div>
        <h3 className="text-lg font-semibold mb-2">Your Credit Transaction History:</h3>
        <ul>
          {creditList.map((credit, index) => (
            <li key={index} className="mb-4">
              <p>
                {credit.type === "Earn" ? "Earned" : "Redeemed"} {credit.amount} credits on{" "}
                {credit.date}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyCredits;
