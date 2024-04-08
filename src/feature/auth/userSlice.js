import { createSlice } from "@reduxjs/toolkit";
import { getUser, removeUser, setUser } from "../../hooks/storage";




export const userSlice = createSlice({

  name: 'userSlice',
  initialState: {
    user: getUser()
  },
  reducers: {
    setUserToLocal: (state, action) => {
      state.user = action.payload;
      setUser(state.user);
    },
    clearUser: (state, action) => {
      state.user = null;
      removeUser();
    }
  }
})

export const { setUserToLocal, clearUser } = userSlice.actions;