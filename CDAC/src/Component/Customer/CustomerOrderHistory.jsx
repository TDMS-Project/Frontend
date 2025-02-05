import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerOrderHistory = () => {
  // State to store orders data
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Function to convert the orderDate array to a human-readable date
  const convertToDate = (dateArray) => {
    // The date array is of the form: [year, month, day, hour, minute, second, nano]
    const [year, month, day, hour, minute, second] = dateArray;
    const date = new Date(year, month - 1, day, hour, minute, second); // month is 0-based in JavaScript Date
    return date.toLocaleString(); // Returns the date and time in a readable format
  };

  // Fetch the order history data from the API
  useEffect(() => {
    const userId = 3; // Replace with the actual customer ID dynamically (e.g., from the logged-in user)
    axios
      .get(`http://localhost:8080/api/customers/orders/${userId}`) // Replace with your actual API URL
      .then((response) => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching order history:', err);
        setError('Failed to load orders.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Order History</h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-danger">{error}</p>
      ) : orders.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Items</th>
              <th>Order Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderID}>
                <td>{order.orderID}</td>
                <td>{order.orderItems.map(item => item.menuItem ? item.menuItem.name : 'N/A').join(', ')}</td>
                <td>{convertToDate(order.orderDate)}</td>
                <td>{order.orderStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default CustomerOrderHistory;
