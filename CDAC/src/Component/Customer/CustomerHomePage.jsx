import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure JS is imported
import CustomerCart from './CustomerCart'; // Import AddToCart component

const CustomerHomePage = () => {
  const [foodItems] = useState([
    {
      id: 1,
      name: "Pizza",
      image: "https://via.placeholder.com/300x200/FF5733?text=Pizza",
      price: 12.99,
    },
    {
      id: 2,
      name: "Burger",
      image: "https://via.placeholder.com/300x200/FFC300?text=Burger",
      price: 8.99,
    },
    {
      id: 3,
      name: "Pasta",
      image: "https://via.placeholder.com/300x200/DAF7A6?text=Pasta",
      price: 10.99,
    },
    {
      id: 4,
      name: "Ice Cream",
      image: "https://via.placeholder.com/300x200/C70039?text=Ice+Cream",
      price: 5.99,
    },
    {
      id: 5,
      name: "Beverage",
      image: "https://via.placeholder.com/300x200/900C3F?text=Beverage",
      price: 3.99,
    },
  ]);

  const handleOrderNow = (itemName) => {
    alert(`Order placed for ${itemName}`);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            FoodHub
          </a>
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
                <a className="nav-link" href="/VendorsList">
                  Vendor List
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/CustomerProfile">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/CustomerOrderHistory">
                  Order History
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/CustomerFeedback">
                  Feedback
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Show Cart
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Filters
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content - Food Items List */}
      <div className="container mt-4">
        <h1 className="text-center mb-4">Welcome to FoodHub</h1>
        <div className="row">
          {foodItems.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <img
                  src={item.image}
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
                      onClick={() => handleOrderNow(item.name)}
                    >
                      Order Now
                    </button>
                    {/* Use AddToCart component here */}
                    <CustomerCart itemName={item.name} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerHomePage;