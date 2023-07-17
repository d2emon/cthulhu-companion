import { useCallback, useMemo } from 'react';
import { Badge, Button, ButtonGroup, Card, Container, Form } from 'react-bootstrap';
import ModifierField from './fields/ModifierField';

function AddModifierButton ({
  label,
  title,
  value,
  onClick,
}) {
  const handleClick = useCallback(
    () => {
      if (onClick) {
        onClick({
          title,
          value,
        });
      }
    },
    [
      title,
      value,
      onClick,
    ],
  );

  return (
    <Button
      onClick={handleClick}
    >
      {label}
    </Button>
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
    (value) => {
      const newValues = values || [];
      updateValues([
        ...newValues,
        {
          id: crypto.randomUUID(),
          ...value,
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
          ? newValue
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
            <AddModifierButton
              label="Добавить"
              title=""
              value={0}
              onClick={handleAddValue}
            />

            <AddModifierButton
              label="Простое действие"
              title="Простое действие"
              value={2}
              onClick={handleAddValue}
            />

            <AddModifierButton
              label="Сложное действие"
              title="Сложное действие"
              value={-2}
              onClick={handleAddValue}
            />

            <AddModifierButton
              label="Очень сложное действие"
              title="Очень сложное действие"
              value={-4}
              onClick={handleAddValue}
            />
          </ButtonGroup>
        </Container>
      </Card.Header>

      { values && (
        <Card.Body>
          <Form>
            { values.map((value) => (
              <Form.Group key={value.id}>
                <Form.Label>Модификатор <ModifierBadge value={value.value} /></Form.Label>
                <ModifierField
                  id={value.id}
                  title={value.title}
                  value={value.value}
                  onChange={handleChangeValue}
                  onRemove={handleRemoveValue}
                />
              </Form.Group>
            ))}
          </Form>  
        </Card.Body>
      ) }

      <Card.Footer>
        <Form.Group>
          <Form.Label>Сумма <ModifierBadge value={total} /></Form.Label>
          <Form.Control
            disabled
            readOnly
            value={total}
          />
        </Form.Group>
      </Card.Footer>
    </Card>
  );    
}

export default ModifiersField;
