import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="navbar" id="main-navbar">
      <div className="navbar-brand">
        <Link to="/" id="navbar-logo-link">
          <span className="navbar-logo">🌿</span>
          <span className="navbar-title">Paradise Nursery</span>
        </Link>
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link" id="nav-home">
          Home
        </Link>
        <Link to="/plants" className="nav-link" id="nav-plants">
          Plants
        </Link>
        <Link to="/cart" className="nav-link cart-link" id="nav-cart">
          🛒 Cart
          {totalQuantity > 0 && (
            <span className="cart-badge" id="cart-count-badge">
              {totalQuantity}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
