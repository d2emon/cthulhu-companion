// Data
import campaigns from '../../../data/campaigns';

// Slice
import { setCampaign } from './slice';

export const loadCampaign = (campaignId) => async (dispatch) => {
  if (!campaignId) {
    dispatch(setCampaign(null));
    return;
  }

  const campaign = campaigns.find((item) => (item.id === campaignId));
  dispatch(setCampaign(campaign));
};
