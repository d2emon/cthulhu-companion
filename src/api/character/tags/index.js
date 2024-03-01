import { createDb, mockAPI } from '../../helpers';
import data from './data';

const {
  // getItem,
  getItems,
} = createDb({
  key: 'characterTagsDB',
  data,
});

export const tagAPI = {
  getItems,
};

export const fetchCharacterTags = mockAPI('GET /api/character/tags', () => getItems({}));
// export const fetchCharacterGroup = mockAPI('/api/character/tag/:itemId', ({ itemId }) => getItem(itemId));
