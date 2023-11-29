import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { authApiSlice } from "./AuthApiSlice";
import { setTokenCookie, getTokenCookie, removeTokenCookie, setUserCookie, removeUserCookie, getUserCookie } from "@/security/Cookies"; // Import the cookie functions

const initialState = {
  user: getUserCookie() || null,
  token: getTokenCookie() || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<any>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      setUserCookie(user);
      setTokenCookie(token); 
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      removeUserCookie(); 
      removeTokenCookie(); 
    },
    setUser:(state,action:PayloadAction<any>)=>{
      state.user = action.payload
      setUserCookie(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApiSlice.endpoints.login.matchFulfilled,
      (state, action: PayloadAction<any>) => {
        const { user, token } = action.payload;
        state.user = user;
        state.token = token;
        setUserCookie(user);
        setTokenCookie(token); 
      }
    )
  },
});

export const { setCredentials, logOut,setUser } = authSlice.actions;
export default authSlice.reducer;

export const currentUser = (state: RootState) => state.auth.user;
export const currentToken = (state: RootState) => state.auth.token;
