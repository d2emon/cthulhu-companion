import { configureStore } from '@reduxjs/toolkit';
import bestiaryReducer from '../features/bestiary/bestiarySlice';
import counterReducer from '../features/counter/counterSlice';
import sourcesReducer from '../features/bestiary/sourcesSlice';

export const store = configureStore({
  reducer: {
    bestiary: bestiaryReducer,
    counter: counterReducer,
    sources: sourcesReducer,
  },
});
