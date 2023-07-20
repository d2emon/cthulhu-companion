import bestiaryReducer, {
  STATUS_IDLE,
  searchTitle,
  setFavourites,
  setOrder,
  setSources,
  setSourcesLoaded,
} from './bestiarySlice';
  
describe('bestiary reducer', () => {
  const initialState = {
    desc: false,
    favourite: false,
    order: 'title',
    status: STATUS_IDLE,
    title: '',
  };
  it('should handle initial state', () => {
    const actual = bestiaryReducer(undefined, { type: 'unknown' });
    expect(actual).toEqual({
      desc: false,
      favourite: false,
      order: 'title',
      monster: null,
      monsters: [],
      sources: {},
      sourcesLoaded: false,
      status: STATUS_IDLE,
      title: '',
    });
  });
  
  it('should handle searchTitle', () => {
    const title= 'TITLE';
    const actual = bestiaryReducer(initialState, searchTitle(title));
    expect(actual.title).toEqual(title);
  });
  
  it('should handle setFavourites', () => {
    const favourite = true;
    const actual = bestiaryReducer(initialState, setFavourites(favourite));
    expect(actual.favourite).toEqual(favourite);
  });
  
  it('should handle setOrder', () => {
    const order = {
      order: 'ORDER',
      desc: true,
    };
    const actual = bestiaryReducer(initialState, setOrder(order));
    expect(actual.order).toEqual(order.order);
    expect(actual.desc).toEqual(order.desc);
  });
  
  it('should handle setSources', () => {
    const sources = {
      k: 'v',
    };
    const actual = bestiaryReducer(initialState, setSources(sources));
    expect(actual.sources).toEqual(sources);
  });
  
  it('should handle setSourcesLoaded,', () => {
    const sourcesLoaded = true;
    const actual = bestiaryReducer(initialState, setSourcesLoaded(sourcesLoaded));
    expect(actual.sourcesLoaded).toEqual(sourcesLoaded);
  });
});
  