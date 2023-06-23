import { useCallback, useState } from 'react';
import { Badge, Card, Container, Form } from 'react-bootstrap';

const stats = [
  {
    id: 'str',
    title: 'Сила (СИЛ)',
  },
  {
    id: 'con',
    title: 'Выносливость (ВЫН)',
  },
  {
    id: 'pow',
    title: 'Мощь (МОЩ)',
  },
  {
    id: 'dex',
    title: 'Ловкость (ЛВК)',
  },
  {
    id: 'app',
    title: 'Наружность (НАР)',
  },
  {
    id: 'siz',
    title: 'Телосложение (Тел)',
  },
  {
    id: 'int',
    title: 'Интеллект (ИНТ)',
  },
  {
    id: 'edu',
    title: 'Образование (ОБР)',
  },
];
const defaultValues = [
  40, 50, 50, 50,
  60, 60, 70, 80,
];

function CharacterMaster() {
  const [unused, setUnused] = useState(defaultValues);

  const selectValue = useCallback((e) => {
    console.log(e.target, e.target.value)
    //
  }, []);

  return (
    <Container>
      <Card>
        <Card.Header>
          <Card.Title>Шаг первый: Характеристики сыщика</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form>
            { stats.map((stat) => (
              <Form.Group key={stat.id}>
                <Form.Label>{stat.title}</Form.Label>
                <Form.Select
                  onChange={selectValue}
                >
                  <option>Выберите значение</option>
                  { unused.map((value, valueId) => (
                    <option
                      key={valueId}
                      value={value}
                    >
                      {value}%
                    </option>
                  )) }
                </Form.Select>
              </Form.Group>
            )) }
          </Form>

          <Container>
            { unused.map((value, valueId) => (
              <Badge
                key={valueId}
                className="m-2"
              >
                {value}
              </Badge>
            )) }
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CharacterMaster;
