import * as characterStatuses from './statuses';

// API
import { fetchCharacterGroups } from '../../../api/character/groups';

// Slice
import {
  setCharacterFilters,
  setCharactersByGroup,
  setCharactersError,
  setCharactersStatus,
  setGroups,
  setGroupsError,
  setGroupsStatus,
  setTags,
} from './slice';
import { fetchCharacters, pushCharacter } from '../../../api/character';

export const loadCharacterGroups = async (dispatch) => {
  dispatch(setGroupsStatus(characterStatuses.CHARACTER_GROUPS_REQUEST));

  try {
    const response = await fetchCharacterGroups();
    dispatch(setGroupsStatus(characterStatuses.CHARACTER_GROUPS_SUCCESS));

    const characterGroups = response?.data;
    dispatch(setGroups(characterGroups));
  } catch (error) {
    dispatch(setGroupsStatus(characterStatuses.CHARACTER_GROUPS_ERROR));
    dispatch(setGroupsError(error));
  }
};

export const loadCharacters = (filters) => async (dispatch) => {
  if (filters) {
    dispatch(setCharacterFilters(filters));
  }

  dispatch(setCharactersStatus(characterStatuses.CHARACTERS_REQUEST));

  try {
    const response = await fetchCharacters(filters);
    dispatch(setCharactersStatus(characterStatuses.CHARACTERS_SUCCESS));

    const byGroups = {
      npc: response?.data?.npc,
      pc: response?.data?.pc,
    };
    dispatch(setCharactersByGroup(byGroups));

    const tags = response?.data?.tags;
    dispatch(setTags(tags));
  } catch (error) {
    dispatch(setCharactersStatus(characterStatuses.CHARACTERS_ERROR));
    dispatch(setCharactersError(error));
  }  
};

export const newCharacter = (character) => async (dispatch) => {
  dispatch(setCharactersStatus(characterStatuses.CHARACTERS_REQUEST));

  try {
    await pushCharacter({ character });
    dispatch(setCharactersStatus(characterStatuses.CHARACTERS_SUCCESS));

    dispatch(loadCharacters);
  } catch (error) {
    dispatch(setCharactersStatus(characterStatuses.CHARACTERS_ERROR));
    dispatch(setCharactersError(error));
  }
};
