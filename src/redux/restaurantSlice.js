import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: {
    id: null,
    image: null,
    title: null,
    rating: null,
    category: null,
    address: null,
    description: null,
    dishes: null,
    longitude: null,
    latitude: null,
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const selectRestaurant = (state) => state.restaurant.restaurant;

export const { setRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;
