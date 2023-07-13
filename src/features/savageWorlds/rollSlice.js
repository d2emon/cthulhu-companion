import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchDice, fetchRollData, fetchRolls } from './api/diceAPI';

const initialState = {
  diceId: 'd4',
  difficulty: 4,
  modifiers: [],
  rolls: [],
  withAces: true,
};

const updateRollBlock = (rolls, id, updater) => {
  const recalculate = (roll) => {
    const {
      difficulty,
      modifiers,
      result,
    } = roll;
  
    const modifier = modifiers
      ? modifiers.reduce((total, modifier) => (total + modifier.value), 0)
      : 0;
    const total = result.reduce((total, roll) => (total + roll.value), modifier);
    const success = total >= difficulty;
  
    return {
      ...roll,
      total,
      success,
    };
  };
  
  return rolls.map((roll) => (
    (roll.id === id)
      ? recalculate({
          ...roll,
          result: updater(roll),
        })
      : roll
  ));
};

export const setDice = createAsyncThunk(
  'roll/setDice',
  async (diceId) => {
    const result = await fetchDice({
      query: {
        diceId,
      },
    });
    return {
      diceId,
      dice: result.data,
    };    
  },
);


export const doRoll = createAsyncThunk(
  'roll/doRoll',
  async (options, thunkAPI) => {
    const {
      difficulty,
      modifiers,
      withAces,
    } = options;
    
    const {
      diceId,
      rolls,
    } = thunkAPI.getState().roll;

    const result = await fetchRollData({
      query: {
        diceId,
      },
      data: {
        difficulty,
        modifiers,
        withAces,
      }
    });
    return [
      ...rolls,
      result.data,
    ];    
  },
);

export const addRollResult = createAsyncThunk(
  'roll/addRollResult',
  async (payload, thunkAPI) => {
    const {
      id,
      options,
    } = payload;
    
    const result = await fetchRolls({
      query: options,
    });

    const {
      rolls,
    } = thunkAPI.getState().roll;

    return updateRollBlock(
      rolls,
      id,
      (roll) => ([
        ...roll.result,
        ...result.data,
      ]),
    );
  },
);

export const deleteRollResult = createAsyncThunk(
  'roll/deleteRollResult',
  (payload, thunkAPI) => {
    const {
      id,
      value,
    } = payload;
    
    const {
      rolls,
    } = thunkAPI.getState().roll;

    return updateRollBlock(
      rolls,
      id,
      roll => roll.result.filter((item) => (item.id !== value)),
    );
  },
);

export const updateRollResult = createAsyncThunk(
  'roll/updateRollResult',
  (payload, thunkAPI) => {
    const {
      id,
      value,
    } = payload;
    
    const {
      rolls,
    } = thunkAPI.getState().roll;

    return updateRollBlock(
      rolls,
      id,
      roll => roll.result.map((result) => ((result.id === value.id) ? value : result)),
    );
  },
);
  
export const rollSlice = createSlice({
  name: 'roll',
  initialState,
  reducers: {
    setRolls: (state, action) => ({
      ...state,
      rolls: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(setDice.fulfilled, (state, action) => ({
        ...state,
        diceId: action.payload.diceId,
        dice: action.payload.dice,
      }))
      .addCase(addRollResult.fulfilled, (state, action) => ({
        ...state,
        rolls: action.payload,
      }))
      .addCase(deleteRollResult.fulfilled, (state, action) => ({
        ...state,
        rolls: action.payload,
      }))
      .addCase(updateRollResult.fulfilled, (state, action) => ({
        ...state,
        rolls: action.payload,
      }))      
      .addCase(doRoll.fulfilled, (state, action) => ({
        ...state,
        rolls: action.payload,
      }));
  },
});

export const {
  setRolls,
} = rollSlice.actions;
  
export const selectDice = (state) => state.roll.dice;
export const selectRolls = (state) => state.roll.rolls;

export default rollSlice.reducer;
