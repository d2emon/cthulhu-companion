import { useCallback, useMemo } from 'react';
import { Badge, Button, Card, Container, Form } from 'react-bootstrap';
import CommonField from './fields/CommonField';
import RollField from './fields/RollField';

function RollResult ({
  id,
  dice,
  difficulty,
  max,
  modifiers,
  raises,
  rolls,
  success,
  onAddRoll,
  onChangeRoll,
  onDeleteRoll,
}) {
  const modifier = useMemo(
    () => (
      modifiers
        ? modifiers.reduce(
          (total, modifier) => (total + modifier.value),
          0,
        )
        : 0
    ),
    [
      modifiers,
    ],
  );

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

  const modifierText = useMemo(
    () => modifiers.reduce(
      (result, modifier) => {
        const { value } = modifier;
        console.log(result, value);
        if (value > 0) {
          return `${result} + ${value}`;
        }
        if (value < 0) {
          return `${result} - ${Math.abs(value)}`;
        }
        return result;
      },
      '',
    ),
    [modifiers],
  );

  const badges = useMemo(
    () => {
      const result = [];

      if (success) {
        result.push((
          <Badge
            key="-1"
            className="mx-2"
            bg="success"
          >
            Успех
          </Badge>
        ));
      }

      for (let i = 0; i < raises; i += 1) {
        result.push((
          <Badge
            key={i}
            className="mx-2"
            bg="success"
          >
            Подъём
          </Badge>
        ));
      }

      return result;
    },
    [
      raises,
      success,
    ],
  );

  const handleAddValue = useCallback(
    () => {
      if (onAddRoll) {
        onAddRoll(id);
      }
    },
    [
      id,
      onAddRoll,
    ],
  );

  const handleChangeValue = useCallback(
    (value) => {
      if (onChangeRoll) {
        onChangeRoll(id, value);        
      }
    },
    [
      id,
      onChangeRoll,
    ],
  );

  const handleDeleteRoll = useCallback(
    (value) => {
      if (onDeleteRoll) {
        onDeleteRoll(id, value);
      }
    },
    [
      id,
      onDeleteRoll,
    ],
  );

  return (
    <Card className="my-2">
      <Card.Header>
        { dice }
        <Container className="my-2">
          <Button onClick={handleAddValue}>
            Добавить
          </Button>
        </Container>
      </Card.Header>

      <Card.Body>
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

        <Form.Group>
          <Form.Label>Модификатор</Form.Label>
          <CommonField
            readOnly
            value={modifierText}
          />
        </Form.Group>
      </Card.Body>

      <Card.Footer>
        { total }
        {' '}
        { badges }
      </Card.Footer>
    </Card>
  );
}

export default RollResult;