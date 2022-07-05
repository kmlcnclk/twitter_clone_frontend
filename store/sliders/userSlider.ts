import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface StatusType {
  id: string;
}

interface UserType {
  name: string;
  username: string;
  status: StatusType[];
}

interface InitialState {
  value: UserType;
}

const initialState: InitialState = {
  value: {
    name: '',
    username: '',
    status: [],
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.value.name = action.payload.name;
      state.value.username = action.payload.username;
      state.value.status = action.payload.status;
    },
  },
});

export const { changeValue } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.value;

export default userSlice.reducer;
