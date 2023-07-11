import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import dices from './dice/dices';

const initialState = {
  diceId: 'd4',
  difficulty: 4,
  modifiers: [],
  rolls: [],
  withAces: true,
};

export const getDice = (diceId) => dices.find(({ id }) => (id === diceId));
export const getRoller = (dice) => (id) => {
  if (!dice) {
    return null;
  }

  const value = Math.floor(Math.random() * dice.value) + 1;
  return {
    id,
    value,
    isAce: (value === dice.value),
  };
};

export const doRoll = createAsyncThunk(
  'roll/doRoll',
  (options, thunkAPI) => {
    const {
      diceId,
      difficulty,
      modifiers,
      withAces,
    } = options;
    
    const {
      dice,
      rolls,
    } = thunkAPI.getState().roll;
    const roller = getRoller(dice);
    const modifier = modifiers
      ? modifiers.reduce(
        (total, modifier) => (total + modifier.value),
        0,
      )
      : 0;
        
    const result = [];
    let reroll = true;
    while (reroll) {
      const roll = roller(rolls.length);
      result.push(roll);
    
      reroll = withAces && roll && roll.isAce;
   
      if (reroll) {
        console.log('ACE!', diceId, roll, difficulty, modifiers);
      }
    }
    
    return [
      ...rolls,
      {
        id: rolls.length,
        dice,
        modifier,
        result,
      },
    ];    
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
    setDice: (state, action) => ({
      ...state,
      diceId: action.payload,
      dice: getDice(action.payload),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(doRoll.fulfilled, (state, action) => ({
        ...state,
        rolls: action.payload,
      }));
  },
});

export const {
  setDice,
  setRolls,
} = rollSlice.actions;
  
export const selectDice = (state) => state.roll.dice;
export const selectRolls = (state) => state.roll.rolls;

export default rollSlice.reducer;
