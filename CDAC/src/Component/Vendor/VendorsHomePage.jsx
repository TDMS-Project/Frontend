import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Table, Button } from "react-bootstrap";
import axios from "axios";

const VendorDashboard = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch the orders from the backend
        axios.get("http://localhost:8080/api/vendors/vendor/8") 
            .then((response) => {
                console.log("Fetched Orders: ", response.data);  // Log the data
                setOrders(response.data);  // Set orders state
            })
            .catch((error) => {
                console.error("Error fetching orders:", error);
            });
    }, []);

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
                                    {/* Accessing customer name */}
                                    <td>{order.user ? `${order.user.fname} ${order.user.lname}` : "No Customer"}</td>
                                    {/* Accessing order status */}
                                    <td>{order.orderStatus}</td>
                                    <td>
                                        <Button variant="success" size="sm" className="me-2">View</Button>
                                        <Button variant="danger" size="sm">Cancel</Button>
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
        </div>
    );
};

export default VendorDashboard;
