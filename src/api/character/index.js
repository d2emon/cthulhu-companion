import { createDb, mockAPI } from '../helpers';
import data from './data';
import * as tagAPI from './tags';

const {
  addItem,
  // getItem,
  getItems,
} = createDb({
  key: 'charactersDB',
  data,
});

export const pushCharacter = mockAPI('POST /api/character', ({ character }) => addItem(character));
export const fetchCharacters = mockAPI('GET /api/character', async () => {
  const tags = await tagAPI.fetchCharacterTags();
  const characters = await getItems({});
  return {
    characters,
    tags: tags?.data,
  }
});
// export const fetchCharacterGroup = mockAPI('/api/character/:itemId', ({ itemId }) => getItem(itemId));
