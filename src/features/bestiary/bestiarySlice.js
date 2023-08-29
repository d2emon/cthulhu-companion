import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchBestiary, fetchBestiaryItem, setFavourite } from '../../api/bestiary';

export const STATUS_IDLE = 'STATUS_IDLE';
export const STATUS_LOADING = 'STATUS_LOADING';

const initialState = {
  desc: false,
  favourite: false,
  order: 'title',
  monster: null,
  monsters: [],
  sources: {},
  sourcesLoaded: false,
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
    const { bestiary } = thunkAPI.getState();
    const query = buildQuery(bestiary);
    const response = await fetchBestiary({ query });

    return response.data;
  }
);

export const getMonster = createAsyncThunk(
  'bestiary/getMonster',
  async ({
    id,
  }, thunkAPI) => {
    const query = { id };
    const response = await fetchBestiaryItem({ query });

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

export const resetSources = (dispatch, getState) => {
  const { sourcesLoaded } = getState().bestiary;

  if (sourcesLoaded) {
    return;
  }

  const { sources } = getState().sources;

  dispatch(setSources(
    sources
      ? sources.reduce(
        (selected, source) => ({
          ...selected,
          [source.id]: true,
        }),
        {},
      )
      : {}
  ));
  dispatch(setSourcesLoaded(true));
};

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
    setSourcesLoaded: (state, action) => ({
      ...state,
      sourcesLoaded: action.payload,
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
      .addCase(getMonster.pending, (state) => ({
        ...state,
        status: STATUS_LOADING,
        monster: null,
      }))
      .addCase(getMonster.fulfilled, (state, action) => ({
        ...state,
        status: STATUS_IDLE,
        monster: action.payload,
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
  searchTitle,
  setFavourites,
  setOrder,
  setSources,
  setSourcesLoaded,
} = bestiarySlice.actions;

export const selectDesc = (state) => state.bestiary.desc;
export const selectFavourites = (state) => state.bestiary.favourite;
export const selectMonsters = (state) => state.bestiary.monsters;
export const selectMonster = (state) => state.bestiary.monster;
export const selectOrder = (state) => state.bestiary.order;
export const selectSelectedSources = (state) => state.bestiary.sources;
export const selectSearch = (state) => state.bestiary.title;

export default bestiarySlice.reducer;
