import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function DeliverPerson() {
  const [deliveryPersons, setDeliveryPersons] = useState([
    { id: 1, name: "John Doe", age: 30, address: "123 Main St", mobile: "9876543210", status: "Active" },
    { id: 2, name: "Jane Smith", age: 28, address: "456 Oak St", mobile: "8765432109", status: "Inactive" },
    { id: 3, name: "Sam Wilson", age: 35, address: "789 Pine St", mobile: "7654321098", status: "Active" },
  ]);

  const handleAdd = () => {
    const newPerson = {
      id: deliveryPersons.length + 1,
      name: "New Person",
      age: 25,
      address: "New Address",
      mobile: "1234567890",
      status: "Active",
    };
    setDeliveryPersons([...deliveryPersons, newPerson]);
  };

  const handleRemove = (id) => {
    const updatedPersons = deliveryPersons.filter((person) => person.id !== id);
    setDeliveryPersons(updatedPersons);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      <div className="mb-3 text-end">
        <center>
        <button className="btn btn-success" onClick={handleAdd}>
          Add Delivery Person
        </button>
        </center>
       
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Address</th>
              <th scope="col">Mobile No</th>
              <th scope="col">Profile Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {deliveryPersons.map((person, index) => (
              <tr key={person.id}>
                <th scope="row">{index + 1}</th>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.address}</td>
                <td>{person.mobile}</td>
                <td>{person.status}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemove(person.id)}
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

export default DeliverPerson;
