import { createAction, createSlice } from "@reduxjs/toolkit";
import { clearAll, getUser, setUser } from "../../hooks/storage";


export const removeAll = createAction('app/clear');

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
  },
  extraReducers: (builder) => {
    builder.addCase(removeAll, (state, action) => {
      state.user = null;
      clearAll();
    })
  }
})

export const { setUserToLocal } = userSlice.actions;