import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    deleteCart: (state) => {
      state.items = [];
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newCart = [...state.items];
      index >= 0
        ? newCart.splice(index, 1)
        : console.warn(`Item id:(${action.payload.id}) not present`);
      state.items = newCart;
    },
  },
});

export const selectCartItems = (state) => state.cart.items;
export const selectCartItemsById = (state, id) =>
  state.cart.items.filter((item) => item.id === id);
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => (total += item.price), 0);

export const { addToCart, removeFromCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
