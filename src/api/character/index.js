import { createDb, mockAPI } from '../helpers';
import data from './data';
import { tagAPI } from './tags';

const {
  addItem,
  // getItem,
  getItems,
} = createDb({
  key: 'charactersDB',
  data,
  filterQuery: (query) => (item) => {
    if (!query) {
      return true;
    }

    const {
      groups = [],
      name = '',
      tags = [],
    } = query;

    if (groups) {
      if (groups.indexOf(item.groupId) < 0) {
        return false;
      }  
    }

    if (name) {
      if (!item.name.includes(name)) {
        return false;
      }  
    }

    if (tags && tags.length) {
      if (tags.some(tag => item.tags.indexOf(tag) < 0)) {
        return false;
      }
    }

    return true;
  },
});

export const pushCharacter = mockAPI('POST /api/character', ({ character }) => addItem(character));
export const fetchCharacters = mockAPI('GET /api/character', async (filters = null) => {
  const characters = await getItems({
    query: filters,
  });

  const byGroups = characters.reduce(
    (byGroups, character) => {
      if (Array.isArray(byGroups[character.groupId])) {
        byGroups[character.groupId].push(character);
      }
      return byGroups;
    },
    {
      pc: [],
      npc: [],
    },
  );

  const tags = await tagAPI.getItems({});

  return {
    tags,
    ...byGroups,
  }
});
// export const fetchCharacterGroup = mockAPI('/api/character/:itemId', ({ itemId }) => getItem(itemId));
