import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function FeedBack() {
  // Sample feedback list
  const [feedbackList, setFeedbackList] = useState([
    {
      id: 1,
      customerName: "John Doe",
      email: "john.doe@example.com",
      type: "Feedback",
      message: "Great service! Keep it up.",
    },
    {
      id: 2,
      customerName: "Jane Smith",
      email: "jane.smith@example.com",
      type: "Complaint",
      message: "Delivery was delayed by 2 hours.",
    },
    {
      id: 3,
      customerName: "Sam Wilson",
      email: "sam.wilson@example.com",
      type: "Feedback",
      message: "Food quality was excellent!",
    },
  ]);

  // Function to remove feedback
  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedbackList((prevList) => prevList.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Customer Feedback and Complaints</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Email</th>
              <th scope="col">Type</th>
              <th scope="col">Message</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {feedbackList.length > 0 ? (
              feedbackList.map((feedback) => (
                <tr key={feedback.id}>
                  <td>{feedback.id}</td>
                  <td>{feedback.customerName}</td>
                  <td>{feedback.email}</td>
                  <td>{feedback.type}</td>
                  <td>{feedback.message}</td>
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
                <td colSpan="6" className="text-center">
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

export default FeedBack;
