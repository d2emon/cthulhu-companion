import { createDb, mockAPI } from '../helpers';
import data from './data';

const {
  getItem,
  getItems,
} = createDb({
  data,
});

export const fetchCampaigns = mockAPI('/api/campaign', ({ query }) => getItems(query));
export const fetchCampaign = mockAPI('/api/campaign/:itemId', ({ itemId }) => getItem(itemId));
