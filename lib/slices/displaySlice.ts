import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IDisplayState {
  history: string[];
  operator: string[];
  value: string;
  lastOperator: boolean;
  result: boolean;
}

const initialState: IDisplayState = {
  history: [],
  operator: [],
  value: "0",
  lastOperator: false,
  result: false,
};

export const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    setHistory: (state, action: PayloadAction<string[]>) => {
      state.history = action.payload;
    },
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setOperator: (state, action: PayloadAction<string[]>) => {
      state.operator = action.payload;
    },
    setLastOperator: (state, action: PayloadAction<boolean>) => {
      state.lastOperator = action.payload;
    },
    setResult: (state, action: PayloadAction<boolean>) => {
      state.result = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHistory, setValue, setOperator, setLastOperator, setResult } =
  displaySlice.actions;

export const displayReducer = displaySlice.reducer;
