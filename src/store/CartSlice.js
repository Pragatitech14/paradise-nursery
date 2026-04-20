import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],        // Array of cart items
    totalQuantity: 0, // Total number of items in cart
    totalAmount: 0,   // Total price of all items
  },
  reducers: {
    // Add a new item to the cart
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.name === newItem.name);

      if (!existingItem) {
        // Item doesn't exist in cart, add it
        state.items.push({
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        // Item already exists, increase quantity
        existingItem.quantity += 1;
        existingItem.totalPrice += existingItem.price;
      }

      // Update totals
      state.totalQuantity += 1;
      state.totalAmount += newItem.price;
    },

    // Remove an item completely from the cart
    removeFromCart(state, action) {
      const name = action.payload;
      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;
        state.items = state.items.filter((item) => item.name !== name);
      }
    },

    // Increase quantity of an item by 1
    increaseQuantity(state, action) {
      const name = action.payload;
      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += existingItem.price;
        state.totalQuantity += 1;
        state.totalAmount += existingItem.price;
      }
    },

    // Decrease quantity of an item by 1 (remove if quantity reaches 0)
    decreaseQuantity(state, action) {
      const name = action.payload;
      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          // Remove the item entirely
          state.totalQuantity -= 1;
          state.totalAmount -= existingItem.price;
          state.items = state.items.filter((item) => item.name !== name);
        } else {
          existingItem.quantity -= 1;
          existingItem.totalPrice -= existingItem.price;
          state.totalQuantity -= 1;
          state.totalAmount -= existingItem.price;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
