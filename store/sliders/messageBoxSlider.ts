import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface CounterState {
  value: boolean;
}

const initialState: CounterState = {
  value: false,
};

export const messageBoxSlice = createSlice({
  name: 'messageBox',
  initialState,
  reducers: {
    changeValue: (state) => {
      state.value = !state.value;
    },
  },
});

export const { changeValue } = messageBoxSlice.actions;

export const selectMessageBox = (state: RootState) => state.messageBox.value;

export default messageBoxSlice.reducer;
