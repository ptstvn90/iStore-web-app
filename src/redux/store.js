import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import favoriteSlice from "./favouriteSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoriteSlice.reducer,
  },
});