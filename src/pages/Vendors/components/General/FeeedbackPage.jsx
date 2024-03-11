import React, { useState } from "react";

const FeedbackPage = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();

  
    const newFeedback = {
      rating,
      comment,
    };

    setFeedbackList([...feedbackList, newFeedback]);

 
    setRating(0);
    setComment("");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Feedback and Ratings Page</h2>

    
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Leave Feedback:</h3>
        <form onSubmit={handleFeedbackSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Rating:</label>
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => handleRatingChange(parseInt(e.target.value, 10))}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Comment:</label>
            <textarea
              value={comment}
              onChange={handleCommentChange}
              className="mt-1 p-2 w-full border rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit Feedback
          </button>
        </form>
      </div>

   
      <div>
        <h3 className="text-lg font-semibold mb-2">Your Feedback and Ratings:</h3>
        <ul>
          {feedbackList.map((feedback, index) => (
            <li key={index} className="mb-4">
              <p className="font-semibold">Rating: {feedback.rating}</p>
              <p>{feedback.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeedbackPage;
