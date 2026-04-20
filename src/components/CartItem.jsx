import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../store/CartSlice';

function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  // Handle checkout — show "Coming Soon" alert
  const handleCheckout = () => {
    alert('🚀 Coming Soon! Our checkout feature is under development.');
  };

  // Navigate back to the plants page
  const handleContinueShopping = () => {
    navigate('/plants');
  };

  return (
    <div className="cart-container" id="cart-page">
      <h1 className="cart-title">
        🛒 Your Shopping Cart
        {totalQuantity > 0 && (
          <span className="cart-item-count">
            ({totalQuantity} {totalQuantity === 1 ? 'item' : 'items'})
          </span>
        )}
      </h1>

      {cartItems.length === 0 ? (
        /* Empty cart message */
        <div className="empty-cart" id="empty-cart-message">
          <p className="empty-cart-icon">🌱</p>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any plants yet!</p>
          <button
            className="continue-shopping-btn"
            onClick={handleContinueShopping}
            id="continue-shopping-empty"
          >
            Browse Plants
          </button>
        </div>
      ) : (
        /* Cart with items */
        <>
          <div className="cart-items-list" id="cart-items-list">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="cart-item-card"
                id={`cart-item-${item.name
                  .replace(/\s+/g, '-')
                  .toLowerCase()}`}
              >
                <div className="cart-item-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                </div>

                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-unit-price">
                    Unit Price: ${item.price}
                  </p>
                </div>

                <div className="cart-item-quantity">
                  <button
                    className="qty-btn decrease-btn"
                    onClick={() => dispatch(decreaseQuantity(item.name))}
                    id={`decrease-${item.name
                      .replace(/\s+/g, '-')
                      .toLowerCase()}`}
                  >
                    −
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    className="qty-btn increase-btn"
                    onClick={() => dispatch(increaseQuantity(item.name))}
                    id={`increase-${item.name
                      .replace(/\s+/g, '-')
                      .toLowerCase()}`}
                  >
                    +
                  </button>
                </div>

                <div className="cart-item-total">
                  <p className="item-total-label">Total</p>
                  <p className="item-total-price">${item.totalPrice}</p>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => dispatch(removeFromCart(item.name))}
                  id={`delete-${item.name
                    .replace(/\s+/g, '-')
                    .toLowerCase()}`}
                  title="Remove item"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="cart-summary" id="cart-summary">
            <div className="cart-summary-row">
              <span>Total Items:</span>
              <span>{totalQuantity}</span>
            </div>
            <div className="cart-summary-row cart-summary-total">
              <span>Total Amount:</span>
              <span>${totalAmount}</span>
            </div>

            <div className="cart-actions">
              <button
                className="checkout-btn"
                onClick={handleCheckout}
                id="checkout-btn"
              >
                Checkout
              </button>
              <button
                className="continue-shopping-btn"
                onClick={handleContinueShopping}
                id="continue-shopping-btn"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;
