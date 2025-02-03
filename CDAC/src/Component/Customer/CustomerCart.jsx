import React from 'react';

const CustomerCart = ({ itemName }) => {
  const handleAddToCart = () => {
    alert(`${itemName} added to cart!`);
  };

  return (
    <button className="btn btn-primary" onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
};

export default CustomerCart;