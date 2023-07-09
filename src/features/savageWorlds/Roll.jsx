import { useState } from 'react';
import { Card, Container, Form } from 'react-bootstrap';
import DiceField from './dice/DiceField';
import CommonField from './CommonField';
import ModifiersField from './ModifiersField';

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