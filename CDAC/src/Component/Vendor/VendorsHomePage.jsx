import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Table, Button, Modal } from "react-bootstrap";
import axios from "axios";

const VendorDashboard = () => {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8080/api/vendors/vendor/8") 
            .then((response) => {
                setOrders(response.data);
            })
            .catch((error) => {
                console.error("Error fetching orders:", error);
            });
    }, []);

    const handleView = (order) => {
        setSelectedOrder(order);
        setShowModal(true);
    };

    const handleUpdateStatus = (orderId, status) => {
        axios.put(`http://localhost:8080/api/vendors/updateStatus/${orderId}`, { status })
            .then((response) => {
                setOrders(orders.map(order => 
                    order.orderID === orderId ? { ...order, orderStatus: status } : order
                ));
            })
            .catch((error) => {
                console.error("Error updating order status:", error);
            });
    };

    return (
        <div>
            {/* Navbar */}
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#">Vendor Dashboard</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="/VendorsProfile">Profile</Nav.Link>
                        <Nav.Link href="/SignIn">Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* Main Content */}
            <Container className="mt-4">
                <h2 className="mb-3">Orders List</h2>
                <Table striped bordered hover>
                    <thead className="table-dark">
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <tr key={order.orderID}>
                                    <td>{order.orderID}</td>
                                    <td>{order.user ? `${order.user.fname} ${order.user.lname}` : "No Customer"}</td>
                                    <td>{order.orderStatus}</td>
                                    <td>
                                        <Button 
                                            variant="success" 
                                            size="sm" 
                                            className="me-2" 
                                            onClick={() => handleView(order)}
                                        >
                                            View
                                        </Button>
                                        <Button 
                                            variant="warning" 
                                            size="sm" 
                                            className="me-2" 
                                            onClick={() => handleUpdateStatus(order.orderID, "Accepted")}
                                            disabled={order.orderStatus === "Accepted"}
                                        >
                                            {order.orderStatus === "Accepted" ? "Accepted" : "Update Status"}
                                        </Button>
                                        <Button 
                                            variant="danger" 
                                            size="sm" 
                                            onClick={() => handleUpdateStatus(order.orderID, "Rejected")}
                                            disabled={order.orderStatus === "Rejected"}
                                        >
                                            {order.orderStatus === "Rejected" ? "Rejected" : "Reject"}
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">No orders found</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>

            {/* View Order Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Customer Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedOrder ? (
                        <div>
                            <p><strong>Name:</strong> {selectedOrder.user ? `${selectedOrder.user.fname} ${selectedOrder.user.lname}` : "N/A"}</p>
                            <p><strong>Address:</strong> {selectedOrder.user ? selectedOrder.user.address : "N/A"}</p>
                            <p><strong>Mobile:</strong> {selectedOrder.user ? selectedOrder.user.contactNo : "N/A"}</p>
                        </div>
                    ) : (
                        <p>No details available</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default VendorDashboard;
