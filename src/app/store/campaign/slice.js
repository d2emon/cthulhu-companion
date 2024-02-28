import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  campaign: null,
  campaignId: 'default-campaign',
  campaigns: [],
};

export const campaignSlice = createSlice({
  name: 'campaign',
  initialState,
  reducers: {
    setCampaign: (state, action) => {
      const campaign = action.payload;

      if (!campaign) {
        return initialState;
      }

      return {
        ...state,
        campaign,
      };
    },
  },
});

export const {
  setCampaign,
} = campaignSlice.actions;

export default campaignSlice.reducer;
