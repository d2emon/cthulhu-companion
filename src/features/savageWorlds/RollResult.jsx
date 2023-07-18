import { useCallback, useMemo } from 'react';
import { Container, Form } from 'react-bootstrap';
import CommonField from './fields/CommonField';
import RollField from './fields/RollField';

function RollResult ({
  id,
  max,
  modifiers,
  rolls,
  onChangeRoll,
  onDeleteRoll,
}) {
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

      <Form.Group>
        <Form.Label>Модификатор</Form.Label>
        <CommonField
          readOnly
          value={modifierText}
        />
      </Form.Group>
    </Container>
  );
}

export default RollResult;