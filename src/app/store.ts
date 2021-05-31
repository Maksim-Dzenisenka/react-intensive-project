import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authSliceReducer from '../components/Entry/authSlise';
import episodesSliceReducer from '../components/Episodes/episodesSlice';

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    episodes: episodesSliceReducer, 
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
