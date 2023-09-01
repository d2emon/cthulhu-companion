import dices from './dices';
import { createId, mockRequest } from './APIhelper';


const DEFAULT_OPTIONS = {
  difficulty: 0,
  modifiers: [],
  withAces: false,
};

const findDice = (diceId) => {
  if (!diceId) {
    return null;
  }
  return dices.find(({ id }) => (id === diceId)) || null
}

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
      wildDiceId,
      title,
    },
  } = args;

  const dice = findDice(diceId);
  const wildDice = findDice(wildDiceId);

  return fn({
    ...args,
    title,
    dice,
    wildDice,
  });  
});

const withRolls = fn => withDice((args) => {
  const {
    options: {
      withAces,
    },
    dice,
    wildDice,
  } = args;

  const getRolls = (current) => {
    const result = [];
    
    if (!current) {
      return result;
    }

    const roller = rollDice(current);
    let reroll = true;
    while (reroll) {
      const roll = roller();
      result.push(roll);
          
      reroll = withAces && roll && roll.isAce;
    }
    return result;  
  };

  const rolls = getRolls(dice);
  const totalRoll = rolls.reduce((total, roll) => (total + roll.value), 0);

  const wildRolls = getRolls(wildDice);
  const totalWildRoll = wildRolls.reduce((total, roll) => (total + roll.value), 0);

  return fn({
    ...args,
    rolls,
    wildRolls,
    totalRoll,
    totalWildRoll,
  });  
});

const setRollData = withRolls(({
  options: {
    difficulty,
    modifiers,
    title,
    withAces,
  },
  dice,
  wildDice,
  rolls,
  totalRoll,
  wildRolls,
  totalWildRoll,
}) => {
  const id = createId();
  const modifier = modifiers
    ? modifiers.reduce((total, modifier) => (total + modifier.value), 0)
    : 0;

  const calculateRoll = (rollDice, data, total) => {
    const modified = total + modifier;
    const success = modified >= difficulty;
    const raises = success ? Math.floor((modified - difficulty) / 4) : 0;
  
    return {
      dice: rollDice,
      modified,
      raises,
      rolls: data,
      success,
      total,
    };
  }

  const calculatedRolls = calculateRoll(dice, rolls, totalRoll);
  const calculatedWildRolls = calculateRoll(wildDice, wildRolls, totalWildRoll);
  const wildIsBetter = calculatedWildRolls.total > calculatedRolls.total;
  
  return {
    id,
    difficulty,
    modifiers,
    title,
    withAces,
    rolls: calculatedRolls,
    wildRolls: calculatedWildRolls,
    wildIsBetter,
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
    ({ rolls }) => rolls,
  ),
);

export const fetchRollData = mockRequest(setRollData);
