import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface RoomSelectState {
  value: number;
}

const initialState: RoomSelectState = {
  value: 2,
};

const roomselectSlice = createSlice({
  name: "roomselect",
  initialState,
  reducers: {
    updateRoomSelect: (state, action: PayloadAction<number>): void => {
      state.value = action.payload;
    },
  },
});

export default roomselectSlice.reducer;
export const { updateRoomSelect } = roomselectSlice.actions;
