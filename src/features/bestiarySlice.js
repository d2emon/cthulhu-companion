import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchBestiary, setFavourite } from '../api/bestiary';

export const STATUS_IDLE = 'STATUS_IDLE';
export const STATUS_LOADING = 'STATUS_LOADING';

const initialState = {
  desc: false,
  favourite: false,
  order: 'title',
  monsters: [],
  sources: {},
  status: STATUS_IDLE,
  title: '',
};

const buildQuery = ({
  desc,
  favourite,
  order,
  sources,
  title,
}) => {
  const query = {};
  if (favourite) {
    query.favourite = true;
  }
  if (sources) {
    const sourcesList = Object.keys(sources).filter(sourceId => sources[sourceId]);
    if (sourcesList.length) {
        query.sources = sourcesList;
    }
  }
  if (title) {
    query.title = title;
  }
  if (order) {
    query.order = order;
  }
  if (desc) {
    query.desc = true;
  }
  return query;
};

export const getMonsters = createAsyncThunk(
  'bestiary/getMonsters',
  async (payload, thunkAPI) => {
    /*
    const query = buildQuery({
      desc,
      favourite: onlyFavourites,
      order,
      title: search,    
    });
    */
    const { bestiary } = thunkAPI.getState();
    const query = buildQuery(bestiary);
    const response = await fetchBestiary({ query });

    return response.data;
  }
);

export const switchFavourite = createAsyncThunk(
  'bestiary/switchFavourite',
  async ({
    id,
    favourite,
  }, thunkAPI) => {
    const { bestiary } = thunkAPI.getState();
    const query = buildQuery(bestiary);
    const response = await setFavourite({
      query,
      data: {
        id,
        favourite,  
      },
    });

    return response.data;
  }
);

export const bestiarySlice = createSlice({
  name: 'bestiary',
  initialState,
  reducers: {
    searchTitle: (state, action) => ({
      ...state,
      title: action.payload,
    }),
    setFavourites: (state, action) => ({
      ...state,
      favourite: action.payload,
    }),
    setOrder: (state, action) => ({
      ...state,
      order: action.payload.order,
      desc: action.payload.desc,
    }),
    setSources: (state, action) => ({
      ...state,
      sources: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMonsters.pending, (state) => ({
        ...state,
        status: STATUS_LOADING,
      }))
      .addCase(getMonsters.fulfilled, (state, action) => ({
        ...state,
        status: STATUS_IDLE,
        monsters: action.payload,
      }))
      .addCase(switchFavourite.pending, (state) => ({
        ...state,
        status: STATUS_LOADING,
      }))
      .addCase(switchFavourite.fulfilled, (state, action) => ({
        ...state,
        status: STATUS_IDLE,
        monsters: action.payload,
      }));
  },
});

export const {
  getBestiary,
  searchTitle,
  setFavourites,
  setOrder,
  setSources,
} = bestiarySlice.actions;


export const selectDesc = (state) => state.bestiary.desc;
export const selectFavourites = (state) => state.bestiary.favourite;
export const selectMonsters = (state) => state.bestiary.monsters;
export const selectOrder = (state) => state.bestiary.order;
export const selectSelectedSources = (state) => state.bestiary.sources;
export const selectSearch = (state) => state.bestiary.title;

export default bestiarySlice.reducer;
