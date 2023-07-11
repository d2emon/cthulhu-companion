import { useMemo } from 'react';
import { Card } from 'react-bootstrap';

function RollResult ({
  dice,
  difficulty,
  modifier,
  rolls,
}) {
  const total = useMemo(
    () => rolls.reduce(
      (result, roll) => (roll ? (result + roll.value) : 0),
      modifier,
    ),
    [
      modifier,
      rolls,
    ],
  );

  const rollsText = useMemo(
    () => rolls.reduce(
      (result, roll, id) => ((id > 0)
        ? `${result} + ${roll ? roll.value : 0}`
        : `${roll ? roll.value : 0}`
      ),
      '',
    ),
    [rolls],
  );

  const modifierText = useMemo(
    () => {
      if (modifier > 0) {
        return `+ ${modifier}`;
      }
      if (modifier < 0) {
        return `- ${Math.abs(modifier)}`;
      }
      return null;
    },
    [modifier],
  );

  return (
    <Card className="my-2">
      <Card.Header>
        { dice }
      </Card.Header>

      <Card.Body>
        { rollsText }
        {' '}
        { modifierText }
      </Card.Body>

      <Card.Footer>
        { total }
      </Card.Footer>
    </Card>
  );
}

export default RollResult;