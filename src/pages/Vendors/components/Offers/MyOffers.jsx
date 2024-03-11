// CombinedOffersPage.js
import React, { useState } from "react";

const MyOffers = () => {
  const [offerList, setOfferList] = useState([]);
  const [offerTitle, setOfferTitle] = useState("");
  const [offerDescription, setOfferDescription] = useState("");
  const [offerDiscount, setOfferDiscount] = useState("");

  const handleTitleChange = (e) => {
    setOfferTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setOfferDescription(e.target.value);
  };

  const handleDiscountChange = (e) => {
    setOfferDiscount(e.target.value);
  };

  const handleOfferSubmit = (e) => {
    e.preventDefault();

   
    const newOffer = {
      title: offerTitle,
      description: offerDescription,
      discount: offerDiscount,
    };

    setOfferList([...offerList, newOffer]);


    setOfferTitle("");
    setOfferDescription("");
    setOfferDiscount("");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Offers Page</h2>

     
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Create New Offer:</h3>
        <form onSubmit={handleOfferSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Title:</label>
            <input
              type="text"
              value={offerTitle}
              onChange={handleTitleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Description:</label>
            <textarea
              value={offerDescription}
              onChange={handleDescriptionChange}
              className="mt-1 p-2 w-full border rounded-md"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Discount:</label>
            <input
              type="text"
              value={offerDiscount}
              onChange={handleDiscountChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Create Offer
          </button>
        </form>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Your Offers:</h3>
        <ul>
          {offerList.map((offer, index) => (
            <li key={index} className="mb-4">
              <h4 className="text-lg font-semibold">{offer.title}</h4>
              <p>{offer.description}</p>
              <p className="text-green-500">Discount: {offer.discount}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyOffers;
