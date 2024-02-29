import * as campaignStatuses from './statuses';

export const selectCampaign = store => store.campaign.campaign;
export const selectGameSystem = store => store.campaign.gameSystem;
export const selectMaster = store => store.campaign.master;
export const selectPlayers = store => store.campaign.players;

export const selectCampaignIsReady = (store) => (
  (store.campaign.status === campaignStatuses.CAMPAIGN_REQUEST)
    || (store.campaign.status === campaignStatuses.CAMPAIGN_SUCCESS)
    || (store.campaign.status === campaignStatuses.CAMPAIGN_ERROR)
);
