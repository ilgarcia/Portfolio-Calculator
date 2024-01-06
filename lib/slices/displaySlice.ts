import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IDisplayState {
  history: number[];
  value: string;
}

const initialState: IDisplayState = {
  history: [],
  value: "0",
};

export const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    setHistory: (state, action: PayloadAction<number[]>) => {
      state.history = action.payload;
    },
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHistory, setValue } = displaySlice.actions;

export const displayReducer = displaySlice.reducer;