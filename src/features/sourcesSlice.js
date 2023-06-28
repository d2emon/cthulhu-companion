import { createSlice } from '@reduxjs/toolkit';

export const STATUS_IDLE = 'STATUS_IDLE';
export const STATUS_LOADING = 'STATUS_LOADING';

const initialState = {
  sources: [
    {
      id: '1',
      title: 'SRD'
    },
    {
      id: '2',
      title: 'Custom Source'
    },
  ],
  status: STATUS_IDLE,
};

export const sourcesSlice = createSlice({
  name: 'sources',
  initialState,
  reducers: {
  },
});

export const selectSources = (state) => state.sources.sources;

export default sourcesSlice.reducer;
