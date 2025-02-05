import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchOrders, updateOrderStatus } from "../Axios/OrderService";

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  // Fetch Orders from Backend
  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await fetchOrders();
        setOrders(response);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    getOrders();
  }, []);

  // Handle Order Status Update
  const handleUpdateStatus = async (id, newStatus) => {
    try {
      await updateOrderStatus(id, newStatus);
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.orderID === id ? { ...order, orderStatus: newStatus } : order
        )
      );
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  // Export Orders as CSV
  const handleExport = () => {
    const csvContent = [
      ["Order ID", "Customer Name", "Address", "Date", "Status"],
      ...orders.map((order) => [
        order.orderID,
        `${order.user.fname} ${order.user.lname}`,
        order.user.address,
        order.orderDate,
        order.orderStatus,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "order_history.csv";
    a.click();
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Order History</h2>
      <div className="mb-3 text-end">
        <center>
          <button className="btn btn-primary" onClick={handleExport}>
            Export as CSV
          </button>
        </center>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderID}>
                <td>{order.orderID}</td>
                <td>{`${order.user.fname} ${order.user.lname}`}</td>
                <td>{order.user.address}</td>
                <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                <td>{order.orderStatus}</td>
                <td>
                  {order.orderStatus !== "Delivered" && (
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() =>
                        handleUpdateStatus(order.orderID, "Delivered")
                      }
                    >
                      Mark as Delivered
                    </button>
                  )}
                  {order.orderStatus !== "Canceled" && (
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        handleUpdateStatus(order.orderID, "Canceled")
                      }
                    >
                      Cancel Order
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderHistory;
