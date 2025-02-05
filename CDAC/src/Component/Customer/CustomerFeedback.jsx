import React, { useState } from 'react';
import axios from 'axios';

const CustomerFeedback = () => {
  // State variables for feedback form
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const feedbackData = {
      email,
      rating: parseInt(rating, 10),
      message:comment,
    };

    try {
      // Replace with your actual API endpoint
      const response = await axios.post('http://localhost:8080/api/customers/feedBack', feedbackData);
      
      if (response.status === 200 || response.status === 201) {
        setFeedbackSubmitted(true);
      } else {
        alert('Failed to submit feedback. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('An error occurred while submitting feedback.');
    }
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
          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Rating Dropdown */}
          <div className="mb-3">
            <label htmlFor="rating" className="form-label">
              Rating (1 to 5)
            </label>
            <select
              id="rating"
              className="form-select"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            >
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>

          {/* Comment Field */}
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
              required
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

export default CustomerFeedback;
