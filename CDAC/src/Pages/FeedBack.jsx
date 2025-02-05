import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function FeedBack() {
  const [feedbackList, setFeedbackList] = useState([]);  // Initialize state for dynamic feedback list

  useEffect(() => {
    // Fetch feedback from the backend on component mount
    axios
      .get("http://localhost:8080/api/admin/feedBack")  // URL of your backend API
      .then((response) => {
        setFeedbackList(response.data);  // Set feedback list from API response
      })
      .catch((error) => {
        console.error("There was an error fetching the feedback!", error);
      });
  }, []);  // Empty dependency array to run once when component mounts

  // Function to remove feedback
  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      // Remove feedback from the backend (optional)
      axios
        .delete(`http://localhost:8080/feedbacks/${id}`)  // URL of your backend API for deleting feedback
        .then(() => {
          setFeedbackList((prevList) => prevList.filter((item) => item.id !== id));  // Remove from local state
        })
        .catch((error) => {
          console.error("There was an error deleting the feedback!", error);
        });
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Customer Feedback</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Email</th>
              <th scope="col">Message</th>
              <th scope="col">Rating</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {feedbackList.length > 0 ? (
              feedbackList.map((feedback) => (
                <tr key={feedback.id}>
                  <td>{feedback.id}</td>
                  <td>{feedback.email}</td>
                  <td>{feedback.message}</td>
                  <td>{feedback.rating}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemove(feedback.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No feedback available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FeedBack;
