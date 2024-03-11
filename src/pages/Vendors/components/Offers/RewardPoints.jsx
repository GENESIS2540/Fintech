
import React, { useState } from "react";

const RewardPoints = () => {
  const [rewardList, setRewardList] = useState([]);
  const [rewardTitle, setRewardTitle] = useState("");
  const [rewardDescription, setRewardDescription] = useState("");
  const [rewardPoints, setRewardPoints] = useState("");

  const handleTitleChange = (e) => {
    setRewardTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setRewardDescription(e.target.value);
  };

  const handlePointsChange = (e) => {
    setRewardPoints(e.target.value);
  };

  const handleRewardSubmit = (e) => {
    e.preventDefault();

   
    const newReward = {
      title: rewardTitle,
      description: rewardDescription,
      points: rewardPoints,
    };

    setRewardList([...rewardList, newReward]);

    setRewardTitle("");
    setRewardDescription("");
    setRewardPoints("");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Rewards Page</h2>

   
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Create New Reward:</h3>
        <form onSubmit={handleRewardSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Title:</label>
            <input
              type="text"
              value={rewardTitle}
              onChange={handleTitleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Description:</label>
            <textarea
              value={rewardDescription}
              onChange={handleDescriptionChange}
              className="mt-1 p-2 w-full border rounded-md"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Points:</label>
            <input
              type="text"
              value={rewardPoints}
              onChange={handlePointsChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
          >
            Create Reward
          </button>
        </form>
      </div>

  
      <div>
        <h3 className="text-lg font-semibold mb-2">Your Rewards:</h3>
        <ul>
          {rewardList.map((reward, index) => (
            <li key={index} className="mb-4">
              <h4 className="text-lg font-semibold">{reward.title}</h4>
              <p>{reward.description}</p>
              <p className="text-yellow-500">Points: {reward.points}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RewardPoints;
