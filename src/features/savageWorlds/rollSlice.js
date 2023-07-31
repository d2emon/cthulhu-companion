import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchDice, fetchDiceList, fetchRollData, fetchRolls } from './api/diceAPI';
import { createId } from './api/APIhelper';

const initialState = {
  dice: null,
  diceId: 'd4',
  dices: [],
  difficulty: 4,
  modifiers: [],
  rolls: [],
  wildDice: null,
  wildDiceId: 'd6',
  withAces: true,
};

const updateRollBlock = (rolls, id, updater, isWild) => {
  const recalculateBlock = (block, modifier, difficulty) => {
    const total = block.rolls.reduce((total, roll) => (total + roll.value), 0);
    const success = total >= difficulty;
    const raises = success ? Math.floor((total - difficulty) / 4) : 0;

    return {
      ...block,
      raises,
      success,
      total,
      modified: total + modifier,
    };
  };
  
  const recalculate = (roll) => {
    const {
      difficulty,
      modifiers,
      rolls,
      wildRolls,
    } = roll;
  
    const modifier = modifiers
      ? modifiers.reduce((total, modifier) => (total + modifier.value), 0)
      : 0;

    const calculatedRolls = recalculateBlock(rolls, modifier, difficulty);
    const calculatedWildRolls = recalculateBlock(wildRolls, modifier, difficulty);
    const wildIsBetter = calculatedWildRolls.total > calculatedRolls.total;

    return {
      ...roll,
      rolls: calculatedRolls,
      wildRolls: calculatedWildRolls,
      wildIsBetter,
    };
  };
  
  const blockId = isWild ? 'wildRolls' : 'rolls';
  const toUpdate = (roll) => ({
    ...roll,
    [blockId]: {
      ...roll[blockId],
      rolls: updater(roll[blockId].rolls)
    },
  });

  return rolls.map((roll) => (
    (roll.id === id)
      ? recalculate({
          ...roll,
          ...toUpdate(roll),
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

export const setWildDice = createAsyncThunk(
  'roll/setWildDice',
  async (diceId) => {
    if (!diceId) {
      return {
        diceId: '',
        dice: null,
      };      
    }

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

export const loadDiceList = createAsyncThunk(
  'roll/loadDiceList',
  async (force, thunkAPI) => {
    const {
      dices,
    } = thunkAPI.getState().roll;

    if (!force && dices) {
      return dices;
    }

    const result = await fetchDiceList({});
    return result.data;
  },
)

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
      wildDiceId,
    } = thunkAPI.getState().roll;

    const result = await fetchRollData({
      query: {
        diceId,
      },
      data: {
        difficulty,
        modifiers,
        wildDiceId,
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
      isWild,
    } = payload;
    
    const result = await fetchRolls({
      query: {
        ...options,
        withAces: false,
      }
    });

    const {
      rolls,
    } = thunkAPI.getState().roll;

    return updateRollBlock(
      rolls,
      id,
      (roll) => ([
        ...roll,
        ...result.data,
      ]),
      isWild,
    );
  },
);

export const deleteRollResult = createAsyncThunk(
  'roll/deleteRollResult',
  (payload, thunkAPI) => {
    const {
      id,
      value,
      isWild,
    } = payload;
    
    const {
      rolls,
    } = thunkAPI.getState().roll;

    return updateRollBlock(
      rolls,
      id,
      roll => roll.filter((item) => (item.id !== value)),
      isWild,
    );
  },
);

export const updateRollResult = createAsyncThunk(
  'roll/updateRollResult',
  (payload, thunkAPI) => {
    const {
      id,
      value,
      isWild,
    } = payload;
    
    const {
      rolls,
    } = thunkAPI.getState().roll;

    return updateRollBlock(
      rolls,
      id,
      roll => roll.map((result) => ((result.id === value.id) ? value : result)),
      isWild,
    );
  },
);
  
export const rollSlice = createSlice({
  name: 'roll',
  initialState,
  reducers: {
    setDifficulty: (state, action) => ({
      ...state,
      difficulty: action.payload,
    }),
    setModifiers: (state, action) => ({
      ...state,
      modifiers: action.payload,
    }),
    setRolls: (state, action) => ({
      ...state,
      rolls: action.payload,
    }),
    setWithAces: (state, action) => ({
      ...state,
      withAces: action.payload,
    }),
    setUntrainedRoll: (state) => ({
      ...state,
      diceId: 'd4',
      modifiers: [
        {
          id: createId(),
          title: 'Неумелая попытка',
          value: -2,
        },
      ],
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadDiceList.pending, (state) => ({
        ...state,
        dices: null,
      }))
      .addCase(loadDiceList.fulfilled, (state, action) => ({
        ...state,
        dices: action.payload,
      }))
      .addCase(setDice.fulfilled, (state, action) => ({
        ...state,
        diceId: action.payload.diceId,
        dice: action.payload.dice,
      }))
      .addCase(setWildDice.fulfilled, (state, action) => ({
        ...state,
        wildDiceId: action.payload.diceId,
        wildDice: action.payload.dice,
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
  setDifficulty,
  setModifiers,
  setRolls,
  setWithAces,
  setUntrainedRoll,
} = rollSlice.actions;
  
export const selectDices = (state) => state.roll.dices;
export const selectDiceId = (state) => state.roll.diceId;
export const selectDifficulty = (state) => state.roll.difficulty;
export const selectModifiers = (state) => state.roll.modifiers;
export const selectRolls = (state) => state.roll.rolls;
export const selectWildDiceId = (state) => state.roll.wildDiceId;
export const selectWithAces = (state) => state.roll.withAces;

export default rollSlice.reducer;
