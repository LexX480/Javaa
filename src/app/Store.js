import { configureStore } from "@reduxjs/toolkit";
import { addUser, userSlice } from "../features/userSlice";
import { postSlice } from "../features/postSlice";


export const store = configureStore({
  reducer: {

  }
});
