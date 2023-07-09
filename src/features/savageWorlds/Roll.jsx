import { useCallback, useMemo, useState } from 'react';
import { Badge, Button, ButtonGroup, Card, Container, Form, InputGroup } from 'react-bootstrap';
import dices from './dices';

function DiceField ({
  value,
  onChange,
}) {
  const handleChangeDice = useCallback(
    (e) => {
      const valueId = e.target.value;
      if (onChange) {
        onChange(valueId);
      }
    },
    [onChange],
  );
  
  return (
    <Form.Select
      value={value}
      onChange={handleChangeDice}
    >
      { dices.map((item) => (
        <option
          key={item.id}
          value={item.id}
        >
          {item.title}
        </option>
      )) }
    </Form.Select>
  );  
}

function CommonField ({
  type,
  value,
  onChange,
}) {
  const handleChange = useCallback(
    (e) => {
      const newValue = e.target.value;
      if (onChange) {
        onChange(newValue);
      }
    },
    [onChange],
  );
    
  return (
    <Form.Control
      type={type}
      value={value}
      onChange={handleChange}
    />
  );
}

function ModifierBadge ({ value }) {
  if (value >= 2) {
    return <Badge bg="success">Просто</Badge>
  }
  if (value <= -4) {
    return <Badge bg="danger">Очень трудно</Badge>
  }
  if (value <= -2) {
    return <Badge bg="warning">Трудно</Badge>
  }
  return null;
}

function ModifierValueField ({
  id,
  title,
  value,
  onChange,
  onRemove,
}) {
  const handleChangeTitle = useCallback(
    (newValue) => {
      if (onChange) {
        onChange({
          id,
          title: newValue,
          value,
        });
      }
    },
    [
      id,
      value,
      onChange,
    ],
  );

  const handleChange = useCallback(
    (newValue) => {
      if (onChange) {
        onChange({
          id,
          title,
          value: parseInt(newValue, 10),
        });
      }
    },
    [
      id,
      title,
      onChange,
    ],
  );

  const handleRemove = useCallback(
    (Remove) => {
      if (onRemove) {
        onRemove(id);
      }
    },
    [
      id,
      onRemove,
    ],
  );

  return (
    <Form.Group>
      <Form.Label>Модификатор</Form.Label>
      <CommonField
        value={title}
        onChange={handleChangeTitle}
      />
      <InputGroup>
        <ModifierBadge value={value} />
        <CommonField
          type="number"
          value={value}
          onChange={handleChange}
        />
        <Button
          variant="danger"
          onClick={handleRemove}
        >
          Удалить
        </Button>
      </InputGroup>
    </Form.Group>
  );    
}

function ModifiersField ({
  values,
  onChange,
}) {
  const total = useMemo(
    () => values.reduce((acc, value) => (acc + value.value), 0),
    [values],
  );

    
  const updateValues = useCallback(
    (newValues) => {
      if (onChange) {
        onChange(newValues);
      }
    },
    [onChange],
  );

  const handleAddValue = useCallback(
    () => {
      const oldValues = values || [];  
      updateValues([
        ...oldValues,
        {
          id: oldValues.length,
          title: '',
          value: 0,
        },
      ]);
    },
    [
      values,
      updateValues,
    ],
  );

  const handleRemoveValue = useCallback(
    (id) => {
      const oldValues = values || [];
      updateValues(oldValues.filter((value) => (value.id !== id)));
    },
    [
      values,
      updateValues,
    ],
  );

  const handleChangeValue = useCallback(
    (newValue) => {
      const oldValues = values || [];  
      updateValues(oldValues.map((value) => (
        (value.id === newValue.id)
          ? {
            ...value,
            value: newValue,
          }
          : value
      )));
    },
    [
      values,
      updateValues,
    ],
  );
  
  return (
    <Card
      className="my-2"
    >
      <Card.Header>
        <Card.Title>
          Модификаторы
        </Card.Title>

        <Container>
          <ButtonGroup>

          </ButtonGroup>
          <Button
            onClick={handleAddValue}
          >
            Добавить 
          </Button>

          <Button
            onClick={handleAddValue}
          >
            Простое действие
          </Button>

          <Button
            onClick={handleAddValue}
          >
            Сложное действие
          </Button>

          <Button
            onClick={handleAddValue}
          >
            Очень сложное действие
          </Button>
        </Container>
      </Card.Header>

      { values && (
        <Card.Body>
          <Form>
            { values.map((value) => (
              <ModifierValueField
                key={value.id}
                id={value.id}
                value={value}
                onChange={handleChangeValue}
                onRemove={handleRemoveValue}
              />
            ))}
          </Form>  
        </Card.Body>
      ) }

      <Card.Footer>
        <Form.Group>
          <Form.Label>Сумма</Form.Label>
          <InputGroup>
            <ModifierBadge value={total} />
            <Form.Control
              disabled
              readOnly
              value={total}
            />
          </InputGroup>
        </Form.Group>
      </Card.Footer>
    </Card>
);    

}

function Roll () {
  const [diceId, setDiceId] = useState('d4');
  const [difficulty, setDifficulty] = useState(4);
  const [modifiers, setModifiers] = useState([]);

  return (
    <Card>
      <Card.Body>
        <Form>
            <Form.Group>
              <Form.Label>Кость</Form.Label>
              <DiceField
                value={diceId}
                onChange={setDiceId}
              />
            </Form.Group>

            <ModifiersField
              values={modifiers}
              onChange={setModifiers}
            />

            <Form.Group>
              <Form.Label>Сложность</Form.Label>
              <CommonField
                type="number"
                value={difficulty}
                onChange={setDifficulty}
              />
            </Form.Group>

        </Form>
        <Container>
          <div>DiceId: {diceId}</div>
          <div>Difficulty: {difficulty}</div>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default Roll;