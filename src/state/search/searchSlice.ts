import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchFilter } from "./searchAction";

interface SearchState {
  value: {
    topic_id: number;
    title: string;
    topic_type: number;
    created_time: string;
    thumbnail_url: string | undefined;
    views_count: number;
    comments_count: number;
    votes_count: number;
    author: {
      id: number;
      name: string;
      avatar_url: string | undefined;
    };
    tags: [];
    ranking_time: string;
    uid_ranking: number;
  }[];
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
