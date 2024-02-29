import * as characterStatuses from './statuses';

// API
import { fetchCharacterGroups } from '../../../api/character/groups';

// Slice
import {
  setCharacters,
  setCharactersError,
  setCharactersStatus,
  setGroups,
  setGroupsError,
  setGroupsStatus,
  setTags,
  setTagsError,
  setTagsStatus,
} from './slice';
import { fetchCharacterTags } from '../../../api/character/tags';
import { fetchCharacters, pushCharacter } from '../../../api/character';

export const loadCharacterGroups = async (dispatch) => {
  dispatch(setGroupsStatus(characterStatuses.CHARACTER_GROUPS_REQUEST));

  try {
    const response = await fetchCharacterGroups();
    const characterGroups = response?.data;

    dispatch(setGroupsStatus(characterStatuses.CHARACTER_GROUPS_SUCCESS));
    dispatch(setGroups(characterGroups));
  } catch (error) {
    dispatch(setGroupsStatus(characterStatuses.CHARACTER_GROUPS_ERROR));
    dispatch(setGroupsError(error));
  }
};

export const loadCharacterTags = async (dispatch) => {
  dispatch(setTagsStatus(characterStatuses.CHARACTER_TAGS_REQUEST));

  try {
    const response = await fetchCharacterTags();
    const characterTags = response?.data;

    dispatch(setTagsStatus(characterStatuses.CHARACTER_TAGS_SUCCESS));
    dispatch(setTags(characterTags));
  } catch (error) {
    dispatch(setTagsStatus(characterStatuses.CHARACTER_TAGS_ERROR));
    dispatch(setTagsError(error));
  }
};

export const loadCharacters = async (dispatch) => {
  dispatch(setCharactersStatus(characterStatuses.CHARACTERS_REQUEST));

  try {
    const response = await fetchCharacters();
    const characters = response?.data?.characters;
    const tags = response?.data?.tags;
  
    dispatch(setCharactersStatus(characterStatuses.CHARACTERS_SUCCESS));
    dispatch(setCharacters(characters));
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
