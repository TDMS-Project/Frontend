import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignInAxios from "../Axios/SignInAxios";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useNavigate();
        
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the payload (login credentials)
    const loginData = { email, password };

    try {
      // Make a POST request to the backend login endpoint using the axios instance
      const response = await SignInAxios.post("/auth/login", loginData);
       console.log(response);
      // Handle successful login
      console.log("Login Successful:", response.data);

      const userRole = response.data.role.roleName; // Get the role name from the response

      // Redirect user based on their role
      if (userRole === "Admin") {
        history("/AdminHomePage");
      } else if (userRole === "Vendor") {
        history("/VendorsHomePage");
      } else if (userRole === "DeliveryPerson") {
        history("/DeliveryPersonHomePage");
      } else if (userRole === "Customer") {
        history("/CustomerHomePage");
      } else {
        setErrorMessage("Role not recognized");
      }
    } catch (error) {
      // Handle errors (e.g., wrong credentials)
      setErrorMessage("Invalid email or password");
      console.error("Login error:", error);
    }
  };

  return (
    <>
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
        <h1
          style={{
            color: "white",
            fontSize: "3rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          }}
        >
          Sign In
        </h1>
      </div>

      {/* Form Section */}
      <div className="row mt-4">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="something@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="xxxxxxxxxxx"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
              />
            </div>
            <div className="mb-3">
              <div>
                Don't have an account? <Link to="/SignUp">Sign Up here</Link>
              </div>
              <button className="btn btn-primary mt-3" onClick={handleSubmit}>
                Submit
              </button>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
}

export default SignIn;