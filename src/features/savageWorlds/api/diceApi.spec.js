import diceData from './dices';
import {
  fetchDice,
  fetchRolls,
  fetchRollData,
  fetchDiceList,
} from './diceAPI';

global.crypto = require('crypto');

describe('DiceAPI', () => {
  it('should handle fetchDiceList', async () => {
    const response = await fetchDiceList({
      query: {},
      data: {},
    });

    expect(response.error).toBeNull();
    expect(response.data).toEqual(diceData);
  });

  it('should handle fetchDice', async () => {
    const response = await fetchDice({
      query: {},
      data: {},
    });

    expect(response.error).toBeNull();
    expect(response.data).toBeNull();
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
    expect(data.id).not.toBeNull();
    expect(data.difficulty).toEqual(0);
    expect(data.modifiers).toEqual([]);
    expect(data.withAces).toEqual(false);

    // Roll
    expect(data.rolls).not.toBeNull();
    expect(data.rolls.dice).toBeNull();
    expect(data.rolls.modified).toEqual(0);
    expect(data.rolls.raises).toEqual(0);
    expect(data.rolls.rolls).toEqual([]);
    expect(data.rolls.success).toEqual(true);
    expect(data.rolls.total).toEqual(0);

    // Wild Roll
    expect(data.wildRolls).not.toBeNull();
    expect(data.wildRolls.dice).toBeNull();
    expect(data.wildRolls.modified).toEqual(0);
    expect(data.wildRolls.raises).toEqual(0);
    expect(data.wildRolls.rolls).toEqual([]);
    expect(data.wildRolls.success).toEqual(true);
    expect(data.wildRolls.total).toEqual(0);
  });

  it('should sum modifiers', async () => {
    const values = [
      10 - Math.floor(Math.random() * 20),
      10 - Math.floor(Math.random() * 20),
    ];
    const modifiers = values.map((value) => ({ value }));
    const total = values.reduce((sum, value) => (sum + value), 0);
    console.log(modifiers, total);

    const response = await fetchRollData({
      query: {
        diceId: 'd6',
      },
      data: {
        modifiers,
        wildDiceId: 'd6',
      },
    });

    expect(response.error).toBeNull();
    expect(response.data).not.toBeNull();

    const { data } = response;

    // Options
    expect(data.id).not.toBeNull();
    expect(data.difficulty).toEqual(0);
    expect(data.modifiers).toEqual(modifiers);
    expect(data.withAces).toEqual(false);

    // Roll
    expect(data.rolls.dice.id).toEqual('d6');
    expect(data.rolls.rolls.length).toEqual(1);
    expect(data.rolls.total).toBeLessThanOrEqual(6);
    expect(data.rolls.modified).toBeGreaterThan(total);
    expect(data.rolls.modified).toBeLessThanOrEqual(total + 6);

    // Wild Roll
    expect(data.wildRolls.dice.id).toEqual('d6');
    expect(data.wildRolls.rolls.length).toEqual(1);
    expect(data.wildRolls.total).toBeLessThanOrEqual(6);
    expect(data.wildRolls.modified).toBeGreaterThan(total);
    expect(data.wildRolls.modified).toBeLessThanOrEqual(total + 6);
  });
});
    