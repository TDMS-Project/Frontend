

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AdminProfile() {
  const adminData = {
    id: 1,
    name: "Saurabh",
    age: 23,
    address: "Kopargaon",
    mobile: "9876543210",
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-8 col-lg-6">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white text-center">
              <h3>Customer Profile</h3>
            </div>
            <div className="card-body">
              {/* Profile Picture */}
             
              {/* Key-Value Layout */}
              <table className="table">
                <tbody>
                  <tr>
                    <th className="text-start">Customer ID:</th>
                    <td className="text-end">{adminData.id}</td>
                  </tr>
                  <tr>
                    <th className="text-start">Name:</th>
                    <td className="text-end">{adminData.name}</td>
                  </tr>
                  <tr>
                    <th className="text-start">Age:</th>
                    <td className="text-end">{adminData.age}</td>
                  </tr>
                  <tr>
                    <th className="text-start">Address:</th>
                    <td className="text-end">{adminData.address}</td>
                  </tr>
                  <tr>
                    <th className="text-start">Mobile Number:</th>
                    <td className="text-end">{adminData.mobile}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer text-center">
              <button className="btn btn-primary me-2" title="Edit your profile">
                Edit Profile
              </button>
              <button className="btn btn-danger" title="Logout from your account" href="/SignI">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
