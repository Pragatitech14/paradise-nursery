import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    // ADD ITEM
    addItem(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === newItem.id
      );

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice += existingItem.price;
      }

      state.totalQuantity += 1;
      state.totalAmount += newItem.price;
    },

    // REMOVE ITEM COMPLETELY
    removeItem(state, action) {
      const id = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === id
      );

      if (!existingItem) return;

      state.totalQuantity -= existingItem.quantity;
      state.totalAmount -= existingItem.totalPrice;

      state.items = state.items.filter((item) => item.id !== id);
    },

    // UPDATE QUANTITY (INCREASE / DECREASE)
    updateQuantity(state, action) {
      const { id, type } = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === id
      );

      if (!existingItem) return;

      if (type === 'increase') {
        existingItem.quantity += 1;
        existingItem.totalPrice += existingItem.price;

        state.totalQuantity += 1;
        state.totalAmount += existingItem.price;
      }

      if (type === 'decrease') {
        if (existingItem.quantity === 1) {
          state.totalQuantity -= 1;
          state.totalAmount -= existingItem.price;

          state.items = state.items.filter((item) => item.id !== id);
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

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
