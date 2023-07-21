import crypto from 'crypto';
import dices from '../dice/dices';

const timeoutDecorator = (fn) => (resolve, reject) => setTimeout(
  () => fn(resolve, reject),
  500,
);

const mockAPI = (mock) => (req) => {
  const wrapper = (resolve, reject) => {
    try {
      console.log('REQ:', req);
      const data = mock(req);
      const res = {
        data,
        error: null,
      };
      console.log('RES:', res);
      return resolve(res);
    } catch (e) {
      const res = {
        data: null,
        error: e.message,
      };
      console.error('ERR:', res);
      return reject(res);
    }
  };

  return new Promise(timeoutDecorator(wrapper));
}

const DEFAULT_OPTIONS = {
  difficulty: 0,
  modifiers: [],
  withAces: false,
};

const rollDice = (dice) => () => {
  const value = Math.floor(Math.random() * dice.value) + 1;
  return {
    id: crypto.randomUUID(),
    value,
    isAce: (value === dice.value),
  };
};

const withOptions = (fn) => (args) => {
  const {
    query = {},
    data = {},
  } = args;
  const options = {
    ...DEFAULT_OPTIONS,
    ...query,
    ...data,
  };
  return fn({
    ...args,
    options,
  });  
};

const withDice = (fn) => withOptions((args) => {
  const {
    options: {
      diceId,
    },
  } = args;

  const dice = dices.find(({ id }) => (id === diceId)) || null;

  return fn({
    ...args,
    dice,
  });  
});

const withRolls = fn => withDice((args) => {
  const {
    options: {
      withAces,
    },
    dice,
  } = args;

  const getRolls = () => {
    const result = [];
    
    if (!dice) {
      return result;
    }

    const roller = rollDice(dice);
    let reroll = true;
    while (reroll) {
      const roll = roller();
      result.push(roll);
          
      reroll = withAces && roll && roll.isAce;
    }
    return result;  
  };

  return fn({
    ...args,
    result: getRolls(),
  });  
});

const getDiceData = withDice(({ dice }) => (dice));

const getRolls = withRolls(({ result }) => (result));

const setRollData = withRolls(({
  options: {
    difficulty,
    modifiers,
    withAces,
  },
  dice,
  result,
}) => {
  const id = crypto.randomUUID();
  const modifier = modifiers
    ? modifiers.reduce((total, modifier) => (total + modifier.value), 0)
    : 0;
  const total = result.reduce((total, roll) => (total + roll.value), modifier);
  const success = total >= difficulty;
  const raises = success ? Math.floor((total - difficulty) / 4) : 0;
  
  return {
    id,
    dice,
    difficulty,
    modifiers,
    raises,
    result,
    total,
    success,
    withAces,
  };
});
  
export const fetchDice = mockAPI(getDiceData);
export const fetchRolls = mockAPI(getRolls);
export const fetchRollData = mockAPI(setRollData);
