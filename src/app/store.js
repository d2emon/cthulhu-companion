import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import bestiaryReducer from '../features/bestiarySlice';
import sourcesReducer from '../features/sourcesSlice';

export const store = configureStore({
  reducer: {
    bestiary: bestiaryReducer,
    counter: counterReducer,
    sources: sourcesReducer,
  },
});
