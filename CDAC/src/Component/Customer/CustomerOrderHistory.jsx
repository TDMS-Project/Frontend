import React, { useState, useEffect } from 'react';

const CustomerOrderHistory = () => {
  // Sample order data
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate fetching order history data
    const fetchedOrders = [
      {
        id: 1,
        items: ['Pizza', 'Burger'],
        orderDate: '2025-01-15',
        status: 'Delivered',
      },
      {
        id: 2,
        items: ['Pasta', 'Ice Cream'],
        orderDate: '2025-01-18',
        status: 'In Progress',
      },
      {
        id: 3,
        items: ['Beverage'],
        orderDate: '2025-01-20',
        status: 'Delivered',
      },
    ];

    // Simulating a delay to mimic fetching data
    setTimeout(() => {
      setOrders(fetchedOrders);
    }, 1000);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Order History</h2>
      {orders.length > 0 ? (
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
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.items.join(', ')}</td>
                <td>{order.orderDate}</td>
                <td>{order.status}</td>
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

export default CustomerOrderHistory;
