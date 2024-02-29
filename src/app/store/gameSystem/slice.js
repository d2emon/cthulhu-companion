import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gameSystem: null,
  status: null,
};

export const gameSystemSlice = createSlice({
  name: 'gameSystem',
  initialState,
  reducers: {
    setStatus: (state, action) => ({
      ...state,
      status: action.payload,
    }),
    setGameSystem: (state, action) => {
      const gameSystem = action.payload;

      if (!gameSystem) {
        return initialState;
      }

      const {
        id,
        logo,
        title,
        url,
      } = gameSystem;

      return {
        ...state,
        gameSystem: {
          id,
          logo,
          title,
          url,
        },
      };
    },
  },
});

export const {
  setStatus,
  setGameSystem,
} = gameSystemSlice.actions;

export default gameSystemSlice.reducer;
