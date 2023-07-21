import diceData from '../dice/dices';
import {
  fetchDice,
  fetchRolls,
  fetchRollData,
} from './diceAPI';

describe('DiceAPI', () => {
  it('should handle fetchDice', async () => {
    const response = await fetchDice({
      query: {},
      data: {},
    });

    expect(response.error).toBeNull();
    expect(response.data).toBeNull();

    // const { data } = response;

    // expect(data).toEqual({});
  });
    
  it('should handle fetchDice for d4-d12', async () => {
    Promise.all(diceData.map((dice) => new Promise(async (res, rej) => {
      const {
        id,
        title,
        value,
      } = dice;
      const response = await fetchDice({
        query: {
          diceId: id,
        },
        data: {},
      });
  
      expect(response.error).toBeNull();
      expect(response.data).not.toBeNull();
  
      const { data } = response;
  
      expect(data).toEqual({
        id,
        title,
        value,
      });  
    })));
  });
    
  it('should handle fetchRolls', async () => {
    const response = await fetchRolls({
      query: {},
      data: {},
    });

    expect(response.error).toBeNull();
    expect(response.data).not.toBeNull();

    const { data } = response;

    expect(data).toEqual([]);
  });

  it('should handle fetchRollData', async () => {
    const response = await fetchRollData({
      query: {},
      data: {},
    });

    expect(response.error).toBeNull();
    expect(response.data).not.toBeNull();

    const { data } = response;

    // Options
    expect(data.difficulty).toEqual(0);
    expect(data.modifiers).toEqual([]);
    expect(data.withAces).toEqual(false);

    // Roll
    expect(data.id).not.toBeNull();
    expect(data.dice).toBeNull();
    expect(data.raises).toEqual(0);
    expect(data.result).toEqual([]);
    expect(data.success).toEqual(true);
    expect(data.total).toEqual(0);
  });

  it('should sum modifiers', async () => {
    const values = [
      10 - Math.floor(Math.random() * 20),
      10 - Math.floor(Math.random() * 20),
    ];
    const modifiers = values.map((value) => ({ value }));
    const total = values.reduce((sum, value) => (sum + value));
    console.log(modifiers, total);

    const response = await fetchRollData({
      query: {
        diceId: 'd6',
      },
      data: {
        modifiers,
      },
    });

    expect(response.error).toBeNull();
    expect(response.data).not.toBeNull();

    const { data } = response;

    // Options
    expect(data.difficulty).toEqual(0);
    expect(data.modifiers).toEqual(modifiers);
    expect(data.withAces).toEqual(false);

    // Roll
    expect(data.id).not.toBeNull();
    expect(data.dice.id).toEqual('d6');
    // expect(data.raises).toEqual(0);
    expect(data.result.length).toEqual(1);
    // expect(data.success).toEqual(true);
    expect(data.total).toBeGreaterThan(total);
    expect(data.total).toBeLessThanOrEqual(total + 6);
  });
});
    