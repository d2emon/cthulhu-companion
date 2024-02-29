import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  campaign: null,
  campaignId: 'default-campaign',
  campaigns: [],
  gameSystem: null,
  master: null,
  players: [],
  stream: [],
  status: null,
};

export const campaignSlice = createSlice({
  name: 'campaign',
  initialState,
  reducers: {
    setStatus: (state, action) => ({
      ...state,
      status: action.payload,
    }),
    setCampaign: (state, action) => {
      const campaign = action.payload;

      if (!campaign) {
        return initialState;
      }

      const {
        id,
        background,
        banner,
        comments,
        description,
        fans,
        gameSystem,
        isLookingForPlayers,
        lastUpdate,
        status,
        title,
      } = campaign;

      return {
        ...state,
        campaign: {
          id,
          background,
          banner,
          comments,
          description,
          fans,
          isLookingForPlayers,
          lastUpdate,
          status,
          title,  
        },
        gameSystem,
      };
    },
    setMaster: (state, action) => {
      const master = action.payload;

      if (!master) {
        return state;
      }

      return {
        ...state,
        master,
      };
    },
    setPlayers: (state, action) => {
      const players = action.payload;

      if (!players) {
        return state;
      }

      return {
        ...state,
        players,
      };
    },
    setStream: (state, action) => {
      const stream = action.payload;

      if (!stream) {
        return state;
      }

      return {
        ...state,
        stream,
      };
    },
  },
});

export const {
  setStatus,
  setCampaign,
  setMaster,
  setPlayers,
  setStream,
} = campaignSlice.actions;

export default campaignSlice.reducer;
