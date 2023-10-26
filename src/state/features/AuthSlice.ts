import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { authApiSlice } from "./AuthApiSlice";

const initialState = {
  user: (typeof localStorage !== 'undefined' ? localStorage.getItem('user') : null) || null,
  token: (typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null) || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<any>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
      }
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    },
  },extraReducers: (builder) => {
      builder.addMatcher( 
          authApiSlice.endpoints.login.matchFulfilled,
          (state, action: PayloadAction<any>) => {
              const { user, token } = action.payload;
              state.user = user;
              state.token = token;
              if (typeof localStorage !== 'undefined') {
                  localStorage.setItem('token', token);
                  localStorage.setItem('user', JSON.stringify(user));
              }
          }
      )
      
  }
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

export const currentUser = (state: RootState) => state.auth.user;
export const currentToken = (state: RootState) => state.auth.token;
