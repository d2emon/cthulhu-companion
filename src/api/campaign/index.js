import { createDb, mockAPI } from '../helpers';
import data from '../../data/campaigns';

const {
  getItem,
  getItems,
} = createDb({
  data,
});

export const fetchCampaign = mockAPI((itemId) => getItem(itemId));
export const fetchCampaigns = mockAPI(({ query }) => getItems(query));
