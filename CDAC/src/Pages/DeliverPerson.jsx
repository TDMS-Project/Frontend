import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DeliveryPersonAxios from "../Axios/DeliveryPersonAxios.js"; // import the axios instance

function DeliverPerson() {
  const [deliveryPersons, setDeliveryPersons] = useState([]);
  const [showForm, setShowForm] = useState(false); // Manage the visibility of the form
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    contactNo: "",
    address: "",
  });

  useEffect(() => {
    // Fetch the list of delivery persons when the component mounts
    const fetchDeliveryPersons = async () => {
      try {
        const response = await DeliveryPersonAxios.get("/api/admin/deliveryPersonList/5"); // Adjust the endpoint as per your backend
        setDeliveryPersons(response.data); // Update the state with the received data
      } catch (error) {
        console.error("Error fetching delivery persons", error);
      }
    };

    fetchDeliveryPersons(); // Call the function to fetch data
  }, []);

  const handleRemove = async (id) => {
    try {
      // Implement remove functionality here
      await DeliveryPersonAxios.delete(`/api/admin/delivery/${id}`); // Adjust the endpoint to remove the delivery person
      setDeliveryPersons(deliveryPersons.filter((person) => person.userID !== id));
    } catch (error) {
      console.error("Error removing delivery person", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await DeliveryPersonAxios.post("/api/admin/add-delivery-person", formData); // Adjust the endpoint to add the delivery person
      setShowForm(false); // Hide the form after submission
      setFormData({ fname: "", lname: "", email: "", contactNo: "", address: "" }); // Reset the form data
      // Fetch the updated list of delivery persons
      const response = await DeliveryPersonAxios.get("/list");
      setDeliveryPersons(response.data);
    } catch (error) {
      console.error("Error adding delivery person", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Delivery Person Table</h2>

      {/* Button to Show the Add Delivery Person Form */}
      
      <div className="mb-3 text-end">
        <center>
        <button
          className="btn btn-success"
          onClick={() => setShowForm(true)} // Show the form when clicked
        >
          Add Delivery Person
        </button>
        </center>
      </div>
       
      {/* Form to Add Delivery Person */}
      {showForm && (
        <div className="mb-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="fname"
                className="form-control"
                value={formData.fname}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lname"
                className="form-control"
                value={formData.lname}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Contact No</label>
              <input
                type="text"
                name="contactNo"
                className="form-control"
                value={formData.contactNo}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <textarea
                name="address"
                className="form-control"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group text-end">
              <button type="submit" className="btn btn-primary">Submit</button>
              <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={() => setShowForm(false)} // Hide the form without submitting
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Table to Display Delivery Persons */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact No</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {deliveryPersons.map((person, index) => (
              <tr key={person.userID}>
                <td>{index + 1}</td>
                <td>{`${person.fname} ${person.lname}`}</td>
                <td>{person.email}</td>
                <td>{person.contactNo}</td>
                <td>{person.address}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemove(person.userID)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DeliverPerson;
