import { configureStore } from '@reduxjs/toolkit';
import MessageBoxSlider from './sliders/messageBoxSlider';
import UserSlider from './sliders/userSlider';

export const store = configureStore({
  reducer: {
    messageBox: MessageBoxSlider,
    user: UserSlider,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
