import { createSlice } from "@reduxjs/toolkit";

interface MobileMenuState {
  isOpen: boolean;
}

const initialState: MobileMenuState = {
  isOpen: false,
};

const mobileSlice = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export default mobileSlice.reducer;

export const { toggleMenu } = mobileSlice.actions;
