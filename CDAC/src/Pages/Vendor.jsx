import React, { useState, useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Vendor() {
  const [vendors, setVendors] = useState([]);
  const [showForm, setShowForm] = useState(false); // Toggle form visibility
  const [newVendor, setNewVendor] = useState({
    fname: "",
    lname: "",
    email: "",
    password:"",
    contactNo: "",
    address: "",
    businessName: "",
    businessAddress: "",
  });

  // Fetch vendors when the component mounts
  useEffect(() => {
    fetchVendors();
  }, []);

  // Fetch vendor data from backend
  const fetchVendors = async () => {
    try {
      const response = await Axios.get("http://localhost:8080/api/admin/vendorList/4"); // Adjust the URL accordingly
      setVendors(response.data); // Set the vendors data to state
    } catch (error) {
      console.error("Error fetching vendors:", error);
    }
  };

  // Handle remove vendor
  const handleRemove = async (id) => {
    try {
      await Axios.delete(`http://localhost:8080/api/admin/vendor/${id}`); // Send DELETE request to remove vendor
      fetchVendors(); // Refresh the vendor list
    } catch (error) {
      console.error("Error removing vendor:", error);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVendor((prevVendor) => ({
      ...prevVendor,
      [name]: value,
    }));
  };

  // Handle add vendor form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post("http://localhost:8080/api/admin/add-vendor", newVendor); // Send POST request to add vendor
      fetchVendors(); // Refresh the vendor list after adding
      setShowForm(false); // Hide the form after submission
      setNewVendor({
        fname: "",
        lname: "",
        email: "",
        password:"",
        contactNo: "",
        address: "",
        businessName: "",
        businessAddress: "",
      }); // Reset form fields
    } catch (error) {
      console.error("Error adding vendor:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Vendor Table</h2>

      {/* Add Vendor Button */}
      <center> <button
        className="btn btn-primary mb-3"
        onClick={() => setShowForm(!showForm)} // Toggle the form visibility
      >
        {showForm ? "Cancel" : "Add Vendor"}
      </button></center>
     

      {/* Add Vendor Form */}
      {showForm && (
        <div className="mb-4">
          <h3>Add New Vendor</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>First Name</label>
              <input
                type="text"
                name="fname"
                className="form-control"
                value={newVendor.fname}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>Last Name</label>
              <input
                type="text"
                name="lname"
                className="form-control"
                value={newVendor.lname}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={newVendor.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={newVendor.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Contact No</label>
              <input
                type="text"
                name="contactNo"
                className="form-control"
                value={newVendor.contactNo}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>Address</label>
              <textarea
                name="address"
                className="form-control"
                value={newVendor.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>Business Name</label>
              <input
                type="text"
                name="businessName"
                className="form-control"
                value={newVendor.businessName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>Business Address</label>
              <input
                type="text"
                name="businessAddress"
                className="form-control"
                value={newVendor.businessAddress}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      )}

      {/* Vendor Table */}
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor, index) => (
            <tr key={vendor.userID}>
              <td>{index + 1}</td>
              <td>{vendor.fname} {vendor.lname}</td>
              <td>{vendor.contactNo}</td>
              <td>{vendor.address}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm me-2"
                  onClick={() => handleRemove(vendor.userID)} // Call the remove function
                >
                  Remove
                </button>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => alert(`Update action for ID: ${vendor.userID}`)} // Placeholder for Update functionality
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Vendor;
