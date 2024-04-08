import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { random } from "./roomPostAction";

interface RoomPostState {
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

const initialState: RoomPostState = {
  value: random(),
};

const roompostSlice = createSlice({
  name: "roompost",
  initialState,
  reducers: {
    updateRoomPost: (state): void => {
      state.value = random();
    },
  },
});

export default roompostSlice.reducer;
export const { updateRoomPost } = roompostSlice.actions;
