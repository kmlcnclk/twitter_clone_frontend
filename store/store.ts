import { configureStore } from '@reduxjs/toolkit';
import MessageBoxSlider from './sliders/messageBoxSlider';

export const store = configureStore({
  reducer: {
    messageBox: MessageBoxSlider,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
