import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignUpAxios from "../Axios/SignUpAxios";

export function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    contactNo: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await SignUpAxios.post("/Register", formData);
      console.log("Registration Successful:", response.data);
      setSuccessMessage("Registration successful! Redirecting...");
      
      setTimeout(() => {
        navigate("/SignIn"); // Redirect to SignIn Page after success
      }, 2000);
    } catch (error) {
      setErrorMessage("Registration failed. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {/* Background Section */}
      <div
        style={{
          height: "40vh",
          backgroundImage: "url('/b.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "white", fontSize: "3rem", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
          Sign Up
        </h1>
      </div>

      {/* Form Section */}
      <div className="row mt-4">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label>First Name</label>
              <input
                type="text"
                name="fname"
                className="form-control"
                placeholder="First Name"
                value={formData.fname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>Last Name</label>
              <input
                type="text"
                name="lname"
                className="form-control"
                placeholder="Last Name"
                value={formData.lname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>Mobile No</label>
              <input
                type="number"
                name="contactNo"
                className="form-control"
                placeholder="1234567890"
                value={formData.contactNo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>Address</label>
              <textarea
                name="address"
                className="form-control"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                placeholder="Re-enter password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <div>
                Already have an account? <Link to="/SignIn">Sign In here</Link>
              </div>
              <button className="btn btn-primary mt-3" onClick={handleSubmit}>
                Submit
              </button>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
              {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default SignUp;