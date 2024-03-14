import * as characterStatuses from './statuses';

export const selectCharacterGroups = store => store.character.groups;
export const selectCharacterTags = store => store.character.tags;

export const selectCharactersByGroup = store => ({
  npc: store.character.npc,
  pc: store.character.pc,
});
export const selectCharactersIsReady = (store) => (
  (store.character.charactersStatus === characterStatuses.CHARACTERS_REQUEST)
    || (store.character.charactersStatus === characterStatuses.CHARACTERS_SUCCESS)
    || (store.character.charactersStatus === characterStatuses.CHARACTERS_ERROR)
);

export const selectCharacterFilters = store => ({
  groups: store.character.selectedGroups,
  name: store.character.searchString,
  tags: store.character.selectedTags,
});
