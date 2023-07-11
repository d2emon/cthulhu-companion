import { configureStore } from '@reduxjs/toolkit';
import bestiaryReducer from '../features/bestiary/bestiarySlice';
import counterReducer from '../features/counter/counterSlice';
import sourcesReducer from '../features/bestiary/sourcesSlice';
import rollReducer from '../features/savageWorlds/rollSlice';

export const store = configureStore({
  reducer: {
    bestiary: bestiaryReducer,
    counter: counterReducer,
    roll: rollReducer,
    sources: sourcesReducer,
  },
});
