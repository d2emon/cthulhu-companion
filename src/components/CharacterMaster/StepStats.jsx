import { useCallback, useEffect, useMemo, useState } from 'react';
import { Badge, Button, Card, Container, Form } from 'react-bootstrap';

function StatSelector({
  statId,
  title,
  value,
  values,
  unused,
  onChange,
}) {
  const handleSelectValue = useCallback(
    (e) => {
      const valueId = e.target.value;
      if (onChange) {
        onChange({
          statId,
          valueId,
          value: values.find(value => value.id === valueId),
        });
      }
    },
    [
      statId,
      values,
      onChange,
    ],
  );

  return (
    <Form.Group>
      <Form.Label>{title}</Form.Label>
      <Form.Select
        value={value && value.id}
        onChange={handleSelectValue}
      >
        <option>Выберите значение</option>
          { values.map((item) => (
            <option
              key={item.id}
              value={item.id}
              disabled={unused.indexOf(item.id) < 0}
            >
              {item.value}%
            </option>
          )) }
        </Form.Select>
      </Form.Group>
    );
}

function StepStats({
  points,
  stats,
  onChange,
}) {
  const [values, setValues] = useState({});

  const unused = useMemo(
    () => {
      const used = Object.values(values).map(value => value && value.id);
      return points.filter(value => used.indexOf(value.id) < 0)
    },
    [
      points,
      values,
    ],
  );

  const selectValue = useCallback((result) => {
    const {
      statId,
      value,
    } = result;
    console.log(result, values);
    setValues({
      ...values,
      [statId]: value,
    });
  }, [
    values,
  ]);

  const handleChange = useCallback(() => {
    if (onChange) {
      onChange(Object.keys(values).reduce(
        (result, key) => ({
          ...result,
          [key]: values[key] && values[key].value,
        }),
        {},
      ));
    }
  }, [
    values,
    onChange,
  ]);

  useEffect(
    () => {
      setValues(stats.reduce(
        (value, stat) => ({
          ...value,
          [stat.id]: '',
        }),
        {},
      ));
    },
    [stats],
  );

  return (
    <Card>
      <Card.Header>
        <Card.Title>Шаг первый: Характеристики сыщика</Card.Title>
      </Card.Header>
      <Card.Body>
        <Container>
          { unused.map((value) => (
            <Badge
              key={value.id}
              className="m-2"
            >
              {value.value}
            </Badge>
          )) }
        </Container>

        <Form>
          { stats.map((stat) => (
            <StatSelector
              key={stat.id}
              statId={stat.id}
              title={stat.title}
              value={values[stat.id]}
              values={points}
              unused={unused.map(value => value.id)}
              onChange={selectValue}
            />
          ))}
        </Form>
      </Card.Body>

      <Card.Footer>
        <Button
          disabled={unused.length > 0}
          onClick={handleChange}
        >
          Далее
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default StepStats;
