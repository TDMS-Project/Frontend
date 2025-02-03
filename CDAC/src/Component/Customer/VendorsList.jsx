import React from 'react';
import { Link } from 'react-router-dom'; // For navigation

const sampleVendors = [
  { id: 1, name: 'Tasty Bites', address: '123 Main St, NY' },
  { id: 2, name: 'Foodie Haven', address: '456 Elm St, CA' },
  { id: 3, name: 'Gourmet Grill', address: '789 Oak St, TX' },
];

const VendorsList = ({ vendors = sampleVendors }) => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Vendor List</h1>

      {vendors.length === 0 ? (
        <p className="text-center">No vendors available.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Menu</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor) => (
              <tr key={vendor.id}>
                <td>{vendor.id}</td>
                <td>{vendor.name}</td>
                <td>{vendor.address}</td>
                <td>
                  {/* ✅ "View Menu" button for each vendor */}
                  <Link to={`/menu/${vendor.id}`} className="btn btn-primary">
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
