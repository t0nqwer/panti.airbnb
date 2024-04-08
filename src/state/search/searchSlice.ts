import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchFilter } from "./searchAction";

interface SearchState {
  value: any;
}

const initialState: SearchState = {
  value: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearch: (state, action: PayloadAction<string>): void => {
      state.value = searchFilter(action.payload);
    },

    resetSearch: (state): void => {
      state.value = initialState.value;
    },
  },
});

export default searchSlice.reducer;
export const { updateSearch, resetSearch } = searchSlice.actions;
