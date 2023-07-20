import {
  fetchDice,
  fetchRolls,
  fetchRollData,
} from './diceAPI';
    
describe('DiceAPI', () => {
  it('should handle fetchDice', async () => {
    const actual = await fetchDice({}, {});
    expect(actual).toEqual({
      desc: false,
      favourite: false,
      order: 'title',
      monster: null,
      monsters: [],
      sources: {},
      sourcesLoaded: false,
      title: '',
    });
  });
    
  it('should handle fetchRolls', async () => {
    const actual = await fetchRolls({}, {});
    expect(actual).toEqual({
      desc: false,
      favourite: false,
      order: 'title',
      monster: null,
      monsters: [],
      sources: {},
      sourcesLoaded: false,
      title: '',
    });
  });
    
  it('should handle fetchRollData', async () => {
    const actual = await fetchRollData({}, {});
    expect(actual).toEqual({
      desc: false,
      favourite: false,
      order: 'title',
      monster: null,
      monsters: [],
      sources: {},
      sourcesLoaded: false,
      title: '',
    });
  });
});
    