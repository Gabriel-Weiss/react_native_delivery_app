import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./redux/cartSlice";
import restaurantReducer from "./redux/restaurantSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantReducer,
  },
});
