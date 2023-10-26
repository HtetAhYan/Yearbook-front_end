"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthFormReducer from "./slices/AuthFormSlice";
import baseApi from "./features/baseApi";
import AuthReducer from "./features/AuthSlice";
const rootReducer = combineReducers({
  authForm: AuthFormReducer,
  [baseApi.reducerPath]: baseApi.reducer,
  auth: AuthReducer,
  // add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
