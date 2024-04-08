import { createSlice } from "@reduxjs/toolkit";
import { random } from "./roomPostAction";

interface RoomPostState {
  value: any;
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
