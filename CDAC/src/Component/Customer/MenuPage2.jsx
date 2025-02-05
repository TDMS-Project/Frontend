import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MenuPage2 = () => {
  const { vendorId } = useParams(); // Get vendorId from the URL
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const userId = 3; // Default userId
  const defaultVendorId = 5; // Default vendorId if not provided
  const resolvedVendorId = vendorId || defaultVendorId;

  // Fetch the menu items of the vendor when the page loads
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/vendors/${resolvedVendorId}/menu-items`)
      .then((response) => {
        setMenuItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching menu items:", error);
        setError("Failed to load menu items.");
        setLoading(false);
      });
  }, [resolvedVendorId]);

  // Function to place an order
  const handleOrderNow = async (menuItem) => {
    if (!userId || !resolvedVendorId) {
      alert("User or Vendor information is missing.");
      return;
    }

    const orderData = [
      {
        menuItemID: menuItem.menuItemID,
        quantity: 1, // Default quantity
      },
    ];

    try {
      const response = await axios.post(
        `http://localhost:8080/api/customers/place/${userId}/${resolvedVendorId}`,
        orderData
      );

      alert(`Order placed successfully for ${menuItem.name}`);
      console.log("Order response:", response.data);
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place the order.");
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Menu for Vendor {resolvedVendorId}</h1>

      {loading ? (
        <p className="text-center">Loading menu...</p>
      ) : error ? (
        <p className="text-center text-danger">{error}</p>
      ) : menuItems.length === 0 ? (
        <p className="text-center">No menu available.</p>
      ) : (
        <div className="row">
          {menuItems.map((menuItem) => (
            <div className="col-md-4 mb-4" key={menuItem.menuItemID}>
              <div className="card">
                <img
                  src={`/path_to_your_images/${menuItem.image}`}
                  alt={menuItem.name}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{menuItem.name}</h5>
                  <p className="card-text">Price: ${menuItem.price}</p>
                  <p className="card-text">
                    {menuItem.availability ? "Available" : "Not Available"}
                  </p>
                  <button
                    className="btn btn-success"
                    onClick={() => handleOrderNow(menuItem)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuPage2;