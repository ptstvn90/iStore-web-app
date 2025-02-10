import { createSelector, createSlice } from "@reduxjs/toolkit";


const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");
  
  try {
    const parsedCart = savedCart ? JSON.parse(savedCart) : null;

    
    if (parsedCart && Array.isArray(parsedCart.itemList)) {
      return {
        itemList: parsedCart.itemList,
        totalQuantity: parsedCart.totalQuantity || 0,
      };
    }
  } catch (error) {
    
    console.error("Error parsing cart from localStorage", error);
  }

  
  return { itemList: [], totalQuantity: 0 };
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromLocalStorage(), 
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.itemList.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          cover: newItem.image,
        });
      }

      state.totalQuantity++;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.itemList.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.itemList = state.itemList.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }

        state.totalQuantity--;
      }
    },

    removeFromAllCart: (state, action) => {
      const id = action.payload;
      const itemToRemove = state.itemList.find((item) => item.id === id);

      if (itemToRemove) {
        state.totalQuantity -= itemToRemove.quantity;
        state.itemList = state.itemList.filter((item) => item.id !== id);
      }
    },

    clearCart: (state) => {
      state.itemList = [];
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, removeFromAllCart, clearCart } = cartSlice.actions;

export const selectTotalQuantity = createSelector(
  (state) => state.cart.itemList,
  (itemList) => itemList.reduce((acc, item) => acc + item.quantity, 0) 
);

export const selectTotalPrice = createSelector(
  (state) => state.cart.itemList,
  (itemList) => itemList.reduce((acc, item) => acc + item.totalPrice, 0) 
);

export const cartReducer = cartSlice.reducer;

export const CartActions = {
  addToCart,
  removeFromCart,
  removeFromAllCart,
  clearCart,
};
