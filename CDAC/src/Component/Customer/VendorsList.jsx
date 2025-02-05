import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const VendorsList = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch vendors from backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/customers/vendorList/4") // Replace with actual backend API
      .then((response) => {
        setVendors(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching vendors:", error);
        setError("Failed to load vendors.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Vendor List</h1>

      {loading ? (
        <p className="text-center">Loading vendors...</p>
      ) : error ? (
        <p className="text-center text-danger">{error}</p>
      ) : vendors.length === 0 ? (
        <p className="text-center">No vendors available.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Vendor Name</th>
              <th>Address</th>
              <th>Menu</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor, index) => (
              <tr key={vendor.userID}>
                <td>{index + 1}</td>
                <td>{vendor.businessName}</td>
                <td>{vendor.businessAddress}</td>
                <td>
                  {/* Button visible for all vendors */}
                  <Link 
                    to={`/menu/${vendor.userID}`} 
                    className="btn btn-primary"
                  >
                    View Menu
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VendorsList;
