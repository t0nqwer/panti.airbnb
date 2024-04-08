import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search/searchSlice";
import roompostReducer from "./roompost/roompostSlice";
import roomSelectReducer from "./roomselect/roomselectSlice";
import mobileMenuReducer from "./mobilemenu/mobileSlice";

export const store = configureStore({
  reducer: {
    roomPost: roompostReducer,
    search: searchReducer,
    roomSelect: roomSelectReducer,
    mobileMenu: mobileMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
