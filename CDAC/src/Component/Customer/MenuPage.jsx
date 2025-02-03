import React from 'react';
import CustomerCart from './CustomerCart'; // Import AddToCart component

const MenuPage = ({ vendorName, menuItems }) => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">{vendorName} Menu</h1>
      <div className="row">
        {menuItems.map((item) => (
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
                    onClick={() => alert(`Order placed for ${item.name}`)}
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
  );
};

export default MenuPage;