
import React, { useState } from 'react';

const CustomerFeedback = () => {
  // State variables for feedback form
  const [rating, setRating] = useState(1); // Default rating is 1
  const [comment, setComment] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // You can handle the feedback submission here (e.g., save it to a database or send to an API)
    console.log('Feedback Submitted:', { rating, comment });

    // Set state to show confirmation message after submission
    setFeedbackSubmitted(true);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Leave Your Feedback</h2>
      {feedbackSubmitted ? (
        <div className="alert alert-success" role="alert">
          Thank you for your feedback!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="rating" className="form-label">
              Rating (1 to 5)
            </label>
            <select
              id="rating"
              className="form-select"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="comment" className="form-label">
              Comment
            </label>
            <textarea
              id="comment"
              className="form-control"
              rows="4"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
};

export default CustomerFeedback;
