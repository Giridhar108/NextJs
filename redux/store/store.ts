import {
  configureStore,
  getDefaultMiddleware,
  EnhancedStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import {Action} from 'redux';
import { createWrapper, MakeStore } from "next-redux-wrapper";
import slice from "../slices";

const devMode = process.env.NODE_ENV === "development";

const store = configureStore({
  reducer: slice,
  middleware: [...getDefaultMiddleware()],
  devTools: devMode,
});

const setupStore = (context: any): EnhancedStore => store;

const makeStore: MakeStore<any> = (context: any) => setupStore(context);

export const wrapper = createWrapper(makeStore, {
  debug: devMode,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;
export default wrapper;
