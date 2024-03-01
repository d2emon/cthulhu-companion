import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  groups: [],
  groupsError: null,
  groupsStatus: null,

  tags: [],

  searchString: '',
  selectedGroups: [],
  selectedTags: [],

  character: null,
  npc: [],
  pc: [],

  charactersError: null,
  charactersStatus: null,
};

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    // Groups
    setGroups: (state, action) => ({
      ...state,
      groups: action.payload,
      selectedGroups: action.payload.map((group) => (group.id)),
    }),
    setGroupsError: (state, action) => ({
      ...state,
      groupsError: action.payload,
    }),
    setGroupsStatus: (state, action) => ({
      ...state,
      groupsStatus: action.payload,
    }),

    // Tags
    setTags: (state, action) => ({
      ...state,
      tags: action.payload,
    }),

    // Filters
    setCharacterFilters: (state, action) => ({
      ...state,
      searchString: action?.payload?.name || '',
      selectedGroups: action?.payload?.groups || [],
      selectedTags: action?.payload?.tags || [],
    }),

    // Characters
    setCharactersByGroup: (state, action) => {
      const groups = action.payload;

      state.pc = groups?.pc;
      state.npc = groups?.npc;
    },
    setCharactersError: (state, action) => ({
      ...state,
      charactersError: action.payload,
    }),
    setCharactersStatus: (state, action) => ({
      ...state,
      charactersStatus: action.payload,
    }),

    // Character
    setCharacter: (state, action) => ({
      ...state,
      character: action.payload,
    }),
  },
});

export const {
  setGroups,
  setGroupsError,
  setGroupsStatus,

  setTags,

  setCharacterFilters,

  setCharacter,

  setCharactersByGroup,
  setCharactersError,
  setCharactersStatus,
} = characterSlice.actions;

export default characterSlice.reducer;
