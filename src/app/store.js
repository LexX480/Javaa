import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../feature/auth/authApi";
import { userSlice } from "../feature/auth/userSlice";
import { productApi } from "../feature/admin/productApi";




export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    userSlice: userSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    authApi.middleware,
    productApi.middleware
  ])
})