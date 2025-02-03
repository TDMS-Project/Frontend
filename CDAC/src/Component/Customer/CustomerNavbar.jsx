import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          FoodHub
        </Link>
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
              <a className="nav-link" href="#profile">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#vendors">
                Vendors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#filters">
                Filters
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cart">
                Cart
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#orders">
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#feedback">
                Feedback
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;