import { createDb, mockAPI } from '../helpers';
import data from './data';

const {
  getItem,
  getItems,
} = createDb({
  data,
});

export const fetchGameSystems = mockAPI('/api/game-system', ({ query }) => getItems(query));
export const fetchGameSystem = mockAPI('/api/game-system/:itemId', ({ itemId }) => getItem(itemId));
