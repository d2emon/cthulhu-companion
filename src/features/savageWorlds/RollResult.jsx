import { useCallback } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import RollField from './fields/RollField';
import DiceIcon from './DiceIcon';

function RollResult ({
  id,
  dice,
  isWild = false,
  max,
  rolls,
  title,
  onAddRoll,
  onChangeRoll,
  onDeleteRoll,
}) {
  const handleAddValue = useCallback(
    () => {
      if (onAddRoll) {
        onAddRoll(id, isWild);        
      }
    },
    [
      id,
      isWild,
      onAddRoll,
    ],
  );

  const handleChangeValue = useCallback(
    (value) => {
      if (onChangeRoll) {
        onChangeRoll(id, value, isWild);        
      }
    },
    [
      id,
      isWild,
      onChangeRoll,
    ],
  );

  const handleDeleteRoll = useCallback(
    (value) => {
      if (onDeleteRoll) {
        onDeleteRoll(id, value, isWild);
      }
    },
    [
      id,
      isWild,
      onDeleteRoll,
    ],
  );

  return (
    <Card
      className="my-2"
    >
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        { dice && (<Card.Subtitle>
          {dice.title}
          {' '}
          <DiceIcon diceId={dice.id} />
        </Card.Subtitle>) }
      </Card.Header>

      <Card.Body>
        <Container>
          <Button onClick={handleAddValue}>
            Добавить
          </Button>
        </Container>

        <Container>
          { rolls && rolls.map((roll) => (
            <Form.Group key={roll.id}>
              <Form.Label>Бросок</Form.Label>
              <RollField
                id={roll.id}
                isAce={roll.isAce}
                max={max}
                value={roll.value}
                onChange={handleChangeValue}
                onRemove={handleDeleteRoll}
              />
            </Form.Group>
          ))}
        </Container>
      </Card.Body>
    </Card>
  );
}

export default RollResult;