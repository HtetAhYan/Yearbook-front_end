import cardStructureReducer from './../components/create/structure/CardStructureSlice';

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthFormReducer from "./slices/AuthFormSlice";
import baseApi from "./features/baseApi";
import AuthReducer from "./features/AuthSlice";
import { createWrapper } from "next-redux-wrapper";
import PrepareProfileReducer  from "./features/PrepareProfileSlice";
import yearbookReducer from "./features/yearbookSlices/yearbookSlice";
import ProfileSettingReducer from './features/ProfileSettingSlice';
import passwordForgotReducer from './features/passwordForgotSlice';
import LoaderReducer from './slices/LoaderSlice';

const rootReducer = combineReducers({
  authForm: AuthFormReducer,
  settings:ProfileSettingReducer,
  [baseApi.reducerPath]: baseApi.reducer,
  auth: AuthReducer,
  prepare: PrepareProfileReducer,
  cardStructur: cardStructureReducer,
  yearbook: yearbookReducer,
  forgotPassword: passwordForgotReducer,
  loader:LoaderReducer


});
const defaultMiddlewareConfig = {
  serializableCheck:false /* {
    ignoredPaths: ["prepare.profile","meta.baseQueryMeta.response"],
    ignoredActionPaths: ['meta.arg.originalArgs.file', 'meta.baseQueryMeta.request'],
    
  } */
};
export const store = () =>configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(defaultMiddlewareConfig).concat(baseApi.middleware),
  devTools: true,
});

export type AppStore = ReturnType<typeof store>;
export type AppDispatch =  AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;;
export const wrapper=createWrapper<AppStore>(store)