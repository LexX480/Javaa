import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../feature/auth/authApi";
import { userSlice } from "../feature/auth/userSlice";
import { productApi } from "../feature/products/productApi";
import { cartSlice } from "../feature/cart/cartSlice";
import { userApi } from "../feature/user/userApi";



export const store = configureStore({
  reducer: {
    cartSlice: cartSlice.reducer,
    userSlice: userSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [userApi.reducerPath]: userApi.reducer


  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    authApi.middleware,
    productApi.middleware,
    userApi.middleware
  ])
})