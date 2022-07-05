import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface InitialState {
  value: string;
}

const initialState: InitialState = {
  value: 'home',
};

export const leftMenuSelectedSlice = createSlice({
  name: 'leftMenuSelected',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeValue } = leftMenuSelectedSlice.actions;

export const selectLeftMenuSelected = (state: RootState) => state.leftMenuSelected.value;

export default leftMenuSelectedSlice.reducer;
