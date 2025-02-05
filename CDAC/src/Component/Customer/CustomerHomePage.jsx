import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CustomerCart from "./CustomerCart"; // Import Cart display component

const CustomerHomePage = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [addedToCart, setAddedToCart] = useState(null); // Track added item for feedback

  const userId = 3; // Assume customer is logged in as user 1
  const vendorId = 5; // Assume vendorId is 1, or you can fetch dynamically

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/customers") // Adjust endpoint based on your backend
      .then((response) => {
        setFoodItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching menu items:", error);
        setError("Failed to load menu items.");
        setLoading(false);
      });
  }, []);

  // Add item to cart
  const handleAddToCart = (item) => {
    console.log("Adding item to cart:", item); // Debug log to see if it's being called

    setAddedToCart(item); // Set the item added to cart for feedback

    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.menuItemID === item.menuItemID);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.menuItemID === item.menuItemID
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });

    setTimeout(() => setAddedToCart(null), 2000); // Reset the added item feedback after 2 seconds
  };

  // Handle order placement
  const handleOrderNow = (item) => {
    setCart((prevCart) => [...prevCart, item]);

    axios
      .post(
        `http://localhost:8080/api/customers/place/${userId}/${vendorId}`,
        [{ menuItemID: item.menuItemID, quantity: 1 }]
      )
      .then((response) => {
        alert(`Order placed for ${item.name}`);
      })
      .catch((error) => {
        console.error("There was an error placing the order!", error);
        alert("Failed to place the order.");
      });
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">FoodHub</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/VendorsList">Vendor List</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/CustomerProfile">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/CustomerOrderHistory">Order History</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/CustomerFeedback">Feedback</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Show Cart</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/SignIn">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content - Food Items List */}
      <div className="container mt-4">
        <h1 className="text-center mb-4">Welcome to FoodHub</h1>

        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <p className="text-danger text-center">{error}</p>
        ) : (
          <div className="row">
            {foodItems.length > 0 ? (
              foodItems.map((item) => (
                <div key={item.menuItemID} className="col-md-4 mb-4">
                  <div className="card shadow-sm">
                    <img
                      src={`http://localhost:8080/images/${item.image}`}
                      alt={item.name}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text text-muted">${item.price.toFixed(2)}</p>
                      <div className="d-flex justify-content-between">
                        <button
                          className="btn btn-success"
                          onClick={() => handleOrderNow(item)}
                        >
                          Order Now
                        </button>
                        <button
                          className="btn btn-primary"
                          onClick={() => handleAddToCart(item)}
                        >
                          {addedToCart && addedToCart.menuItemID === item.menuItemID
                            ? "Added"
                            : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No menu items available.</p>
            )}
          </div>
        )}

        {/* Display Cart Items */}
        <div className="mt-4">
          <CustomerCart cartItems={cart} />
        </div>
      </div>
    </div>
  );
};

export default CustomerHomePage;
