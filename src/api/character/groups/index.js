import { createDb, mockAPI } from '../../helpers';
import data from './data';

const {
  // getItem,
  getItems,
} = createDb({
  data,
});

export const fetchCharacterGroups = mockAPI('/api/character/group', () => getItems({}));
// export const fetchCharacterGroup = mockAPI('/api/character/group/:itemId', ({ itemId }) => getItem(itemId));
