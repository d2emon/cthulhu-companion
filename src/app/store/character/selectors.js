import * as characterStatuses from './statuses';

export const selectCharacterGroups = store => store.character.groups;
export const selectCharacterGroupsIsReady = (store) => (
  (store.character.groupsStatus === characterStatuses.CHARACTER_GROUPS_REQUEST)
    || (store.character.groupsStatus === characterStatuses.CHARACTER_GROUPS_SUCCESS)
    || (store.character.groupsStatus === characterStatuses.CHARACTER_GROUPS_ERROR)
);

export const selectCharacterTags = store => store.character.tags;
export const selectCharacterTagsIsReady = (store) => (
  (store.character.tagsStatus === characterStatuses.CHARACTER_TAGS_REQUEST)
    || (store.character.tagsStatus === characterStatuses.CHARACTER_TAGS_SUCCESS)
    || (store.character.tagsStatus === characterStatuses.CHARACTER_TAGS_ERROR)
);


export const selectCharacters = store => store.character.characters;
export const selectCharactersIsReady = (store) => (
  (store.character.charactersStatus === characterStatuses.CHARACTERS_REQUEST)
    || (store.character.charactersStatus === characterStatuses.CHARACTERS_SUCCESS)
    || (store.character.charactersStatus === characterStatuses.CHARACTERS_ERROR)
);

export const selectSelectedCharacterGroups = store => store.character.selectedGroups;
export const selectSelectedCharacterTags = store => store.character.selectedTags;
