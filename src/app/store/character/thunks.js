import * as characterStatuses from './statuses';

// API
import { fetchCharacters, pushCharacter } from '../../../api/character';

// Slice
import {
  setCharacterFilters,
  setCharactersByGroup,
  setCharactersError,
  setCharactersStatus,
  setTags,
} from './slice';

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
