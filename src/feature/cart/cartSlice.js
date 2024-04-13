import { createSlice } from "@reduxjs/toolkit";
import { clearAll, getCarts, setCarts } from "../../hooks/storage";
import { removeAll } from "../auth/userSlice";



export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    carts: getCarts()
  },
  reducers: {

    setCartToLocal: (state, action) => {
      const isExist = state.carts.find((cart) => cart.product === action.payload.product);
      if (isExist) {
        state.carts = state.carts.map((cart) => cart.product === action.payload.product ? action.payload : cart);
        setCarts(state.carts);
      } else {
        state.carts = [...state.carts, action.payload];
        setCarts(state.carts);
      }
    },

    removeSingleCart: (state, action) => {
      state.carts.splice(action.payload, 1);
      state.carts = [...state.carts];
      setCarts(state.carts);
    },
    clearCart: (state, action) => {
      state.carts = [];
      setCarts(state.carts);
    },



  },
  extraReducers: (builder) => {
    builder.addCase(removeAll, (state, action) => {
      state.carts = null;
      clearAll();
    })
  }
});

export const { setCartToLocal, removeSingleCart, clearCart } = cartSlice.actions;