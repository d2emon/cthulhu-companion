import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  groups: [],
  groupsError: null,
  groupsStatus: null,

  tags: [],
  tagsError: null,
  tagsStatus: null,

  selectedGroups: [],
  selectedTags: [],

  character: null,

  characters: [],
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
    setTagsError: (state, action) => ({
      ...state,
      tagsError: action.payload,
    }),
    setTagsStatus: (state, action) => ({
      ...state,
      tagsStatus: action.payload,
    }),

    // Filters
    setSelectedGroups: (state, action) => ({
      ...state,
      selectedGroups: action.payload,
    }),
    setSelectedTags: (state, action) => ({
      ...state,
      selectedTags: action.payload,
    }),

    // Characters
    setCharacters: (state, action) => ({
      ...state,
      characters: action.payload,
    }),
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
  setTagsError,
  setTagsStatus,

  setSelectedGroups,
  setSelectedTags,

  setCharacter,

  setCharacters,
  setCharactersError,
  setCharactersStatus,
} = characterSlice.actions;

export default characterSlice.reducer;
