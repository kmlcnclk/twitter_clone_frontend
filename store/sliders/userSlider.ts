import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface StatusType {
  id: string;
}

export interface UserType {
  name: string;
  username: string;
  status: StatusType[];
  profileText: string;
  location: string;
  profileWebsiteLink: string;
  birthDate: string;
  joinDate: string;
}

interface InitialState {
  value: UserType;
}

const initialState: InitialState = {
  value: {
    name: 'Kamilcan Çelik',
    username: 'kmlcnclk',
    status: [{ id: '1' }],
    profileText: 'Frontend developer & Backend for Frontend developer',
    location: 'Turkey',
    profileWebsiteLink: 'https://github.com/kmlcnclk',
    birthDate: 'May 2, 2001',
    joinDate: 'December 2021',
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
