import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItem, updateQuantity } from '../store/CartSlice';

function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleCheckout = () => {
    alert('🚀 Coming Soon!');
  };

  const handleContinueShopping = () => {
    navigate('/plants');
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">
        🛒 Your Shopping Cart ({totalQuantity} items)
      </h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <button onClick={handleContinueShopping}>
            Browse Plants
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-card">

                <img src={item.image} alt={item.name} width="80" />

                <div>
                  <h3>{item.name}</h3>
                  <p>Unit Price: ${item.price}</p>
                </div>

                <div>
                  <button
                    onClick={() =>
                      dispatch(updateQuantity({ id: item.id, type: 'decrease' }))
                    }
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      dispatch(updateQuantity({ id: item.id, type: 'increase' }))
                    }
                  >
                    +
                  </button>
                </div>

                <div>
                  <p>Total: ${item.totalPrice}</p>
                </div>

                <button
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <h2>Total Amount: ${totalAmount}</h2>

          <button onClick={handleCheckout}>Checkout</button>
          <button onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </>
      )}
    </div>
  );
}

export default CartItem;
