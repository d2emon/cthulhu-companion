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

const getDice = (diceId) => {
  const dice = dices.find(({ id }) => (id === diceId));

  if (!dice) {
    return null;
  }

  return {
    ...dice,
    data: dice,
    roll: (id) => {
      const value = Math.floor(Math.random() * dice.value) + 1;
      return {
        id,
        value,
        isAce: (value === dice.value),
      };      
    }
  }
}

const getDiceData = ({
  diceId,
}) => {
  const dice = getDice(diceId);
  return dice ? dice.data : null;
};

const getRolls = ({
  diceId,
  withAces,
}) => {
  const dice = getDice(diceId);
 
  const result = [];
  let reroll = true;
  while (reroll) {
    const id = crypto.randomUUID();
    const roll = dice.roll(id);
    result.push(roll);
      
    reroll = withAces && roll && roll.isAce;
  }
  
  return result;
};

const setRollData = (
  {
    diceId,
  },
  {
    difficulty,
    modifiers,
    result,
    withAces,
  },
) => {
  const id = crypto.randomUUID();
  const dice = getDice(diceId);
 
  const modifier = modifiers
    ? modifiers.reduce((total, modifier) => (total + modifier.value), 0)
    : 0;
  const total = result.reduce((total, roll) => (total + roll.value), modifier);
  
  return {
    id,
    dice: dice.data,
    difficulty,
    modifiers,
    result,
    total,
    success: (total > difficulty),
    withAces,
  };
};
  
export const fetchDice = mockAPI(({ query }) => getDiceData(query));
export const fetchRolls = mockAPI(({ query }) => getRolls(query));
export const fetchRollData = mockAPI(({ query, data }) => {
  const {
    diceId,
  } = query;
  const {
    difficulty,
    modifiers,
    withAces,
  } = data;
  const result = getRolls({
    diceId,
    withAces,
  });
  return setRollData(
    {
      diceId,
    },
    {
      difficulty,
      modifiers,
      result,
      withAces,
    }
  );
});
