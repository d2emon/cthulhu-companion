import dices from './dices';
import { createId, mockRequest } from './APIhelper';


const DEFAULT_OPTIONS = {
  difficulty: 0,
  modifiers: [],
  withAces: false,
};

const rollDice = (dice) => () => {
  const id = createId();
  const value = Math.floor(Math.random() * dice.value) + 1;
  const isAce = value === dice.value;

  return {
    id,
    value,
    isAce,
  };
};

const withOptions = fn => args => {
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

const withDice = fn => withOptions((args) => {
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

const setRollData = withRolls(({
  options: {
    difficulty,
    modifiers,
    withAces,
  },
  dice,
  result,
}) => {
  const id = createId();
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

export const fetchDiceList = mockRequest(() => {
  return dices.map(dice => ({ ...dice }));
});

export const fetchDice = mockRequest(
  withDice(
    ({ dice }) => dice,
  ),
);

export const fetchRolls = mockRequest(
  withRolls(
    ({ result }) => result,
  ),
);

export const fetchRollData = mockRequest(setRollData);
