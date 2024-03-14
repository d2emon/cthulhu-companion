import { createSelector } from '@reduxjs/toolkit';
import * as characterStatuses from './statuses';

const characterSelector = store => store.character;

export const selectCharactersIsReady = (store) => (
  (store.character.charactersStatus === characterStatuses.CHARACTERS_REQUEST)
    || (store.character.charactersStatus === characterStatuses.CHARACTERS_SUCCESS)
    || (store.character.charactersStatus === characterStatuses.CHARACTERS_ERROR)
);

export const selectCharacterGroups = store => store.character.groups;
export const selectCharacterTags = store => store.character.tags;

export const selectCharactersByGroup = createSelector(
  [
    characterSelector,
  ],
  (character) => ({
    npc: character.npc,
    pc: character.pc,
  }),
);

export const selectCharacterFilters = createSelector(
  [
    characterSelector,
  ],
  (character) => ({
    groups: character.selectedGroups,
    name: character.searchString,
    tags: character.selectedTags,
  }),
);
