import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function OrderHistory() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: "John Doe",
      address: "123 Main St",
      date: "2025-01-27",
      status: "Delivered",
      paymentStatus: "Paid",
      totalAmount: "$50",
    },
    {
      id: 2,
      customerName: "Jane Smith",
      address: "456 Oak St",
      date: "2025-01-26",
      status: "Pending",
      paymentStatus: "Unpaid",
      totalAmount: "$30",
    },
    {
      id: 3,
      customerName: "Sam Wilson",
      address: "789 Pine St",
      date: "2025-01-25",
      status: "Canceled",
      paymentStatus: "Refunded",
      totalAmount: "$40",
    },
  ]);

  const handleUpdateStatus = (id, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const handleExport = () => {
    const csvContent = [
      ["Order ID", "Customer Name", "Address", "Date", "Status", "Payment Status", "Total Amount"],
      ...orders.map((order) => [
        order.id,
        order.customerName,
        order.address,
        order.date,
        order.status,
        order.paymentStatus,
        order.totalAmount,
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
        <center><button className="btn btn-primary" onClick={handleExport}>
          Export as CSV
        </button></center>
        
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Address</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">Payment Status</th>
              <th scope="col">Total Amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.address}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
                <td>{order.paymentStatus}</td>
                <td>{order.totalAmount}</td>
                <td>
                  {order.status !== "Delivered" && (
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => handleUpdateStatus(order.id, "Delivered")}
                    >
                      Mark as Delivered
                    </button>
                  )}
                  {order.status !== "Canceled" && (
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleUpdateStatus(order.id, "Canceled")}
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

export default OrderHistory;