import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { batchDispatchMiddleware } from "redux-batched-actions";
import { alienslReducer } from "./aliens/slice";
import { arsenalReducer } from "./arsenal/slice";
import { canvasReducer } from "./canvas/slice";
import { HUDReducer } from "./HUD/slice";
import { shipReducer } from "./ship/slice";

const reducer = combineReducers({
  aliens: alienslReducer,
  arsenal: arsenalReducer,
  canvas: canvasReducer,
  HUD: HUDReducer,
  ship: shipReducer
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(batchDispatchMiddleware),
});

const { dispatch, getState } = store;

export type StoreType = ReturnType<typeof reducer>;

export { dispatch, getState };
