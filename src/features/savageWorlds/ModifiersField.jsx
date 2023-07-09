import { useCallback, useMemo } from 'react';
import { Badge, Button, ButtonGroup, Card, Container, Form, InputGroup } from 'react-bootstrap';
import CommonField from './CommonField';

function AddModifierButton ({
  title,
  value,
  onClick,
}) {
  const handleClick = useCallback(
    () => {
      if (onClick) {
        onClick({
          title: '',
          value,
        });
      }
    },
    [
      value,
      onClick,
    ],
  );

  return (
    <Button
      onClick={handleClick}
    >
      {title}
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

function  ModifierValueField ({
  id,
  value,
  title,
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
    (value) => {
      const newValues = values || [];
      updateValues([
        ...newValues,
        {
          id: newValues.length,
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
            <AddModifierButton
              title="Добавить"
              value={0}
              onClick={handleAddValue}
            />

            <AddModifierButton
              title="Простое действие"
              value={2}
              onClick={handleAddValue}
            />

            <AddModifierButton
              title="Сложное действие"
              value={-2}
              onClick={handleAddValue}
            />

            <AddModifierButton
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
              <ModifierValueField
                key={value.id}
                id={value.id}
                title={value.title}
                value={value.value}
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

export default ModifiersField;
