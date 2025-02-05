import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Card, Button, Form, Row, Col, Image, Container } from "react-bootstrap";

const UpdateProfile = () => {
  const [user, setUser] = useState({
    id: 2,
    fname: "",
    lname: "",
    email: "",
    password: "",
    contactNo: "",
    address: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/customers/3")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching admin profile data", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8080/api/customers/update-profile/3", user)
      .then(() => {
        alert("Profile updated successfully");
      })
      .catch((error) => {
        console.error("Error updating profile!", error);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/SignIn");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="shadow-lg p-4 w-50 border-0 rounded-4" style={{ background: "#f8f9fa" }}>
        <div className="text-center mb-4">
          <Image
            src="https://via.placeholder.com/120"
            roundedCircle
            className="mb-3 border border-3 border-primary"
          />
          <h3 className="fw-bold text-primary">
            {user.fname} {user.lname}
          </h3>
          <p className="text-muted">{user.email}</p>
        </div>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Label className="fw-semibold">First Name</Form.Label>
              <Form.Control
                type="text"
                name="fname"
                value={user.fname}
                onChange={handleChange}
                placeholder="Enter First Name"
                className="rounded-3"
              />
            </Col>
            <Col md={6} className="mb-3">
              <Form.Label className="fw-semibold">Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lname"
                value={user.lname}
                onChange={handleChange}
                placeholder="Enter Last Name"
                className="rounded-3"
              />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="rounded-3"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="rounded-3"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Contact No</Form.Label>
            <Form.Control
              type="text"
              name="contactNo"
              value={user.contactNo}
              onChange={handleChange}
              placeholder="Enter Contact Number"
              className="rounded-3"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="address"
              value={user.address}
              onChange={handleChange}
              placeholder="Enter Address"
              className="rounded-3"
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100 py-2 rounded-3 fw-bold">
            Update Profile
          </Button>
        </Form>

        <Button
          onClick={handleLogout}
          variant="danger"
          className="w-100 mt-3 py-2 rounded-3 fw-bold"
        >
          Logout
        </Button>
      </Card>
    </Container>
  );
};

export default UpdateProfile;