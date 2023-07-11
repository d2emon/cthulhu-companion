import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import CheckboxField from './fields/CheckboxField';
import CommonField from './fields/CommonField';
import DiceField from './fields/DiceField';
import ModifiersField from './ModifiersField';
import RollResult from './RollResult';
import { useDispatch, useSelector } from 'react-redux';
import { doRoll, selectRolls, setDice } from './rollSlice';

function Roll () {
  const dispatch = useDispatch();

  const [diceId, setDiceId] = useState('d4');
  const [difficulty, setDifficulty] = useState(4);
  const [modifiers, setModifiers] = useState([]);
  const [withAces, setWithAces] = useState(true);

  const rollsData = useSelector(selectRolls);

  const totalModifier = useMemo(
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

  const rolls = useMemo(
    () => rollsData && rollsData.map((data) => (
      <Col
        key={data.id}
        md={6}
      >
        <RollResult
          dice={data.dice.title}
          rolls={data.result}
          modifier={data.modifier}
        />
      </Col>
    )),
    [rollsData],
  );

  useEffect(
    () => {
      dispatch(setDice(diceId));
    },
    [
      diceId,
      dispatch,
    ],
  );

  const addRoll = useCallback(
    () => {
      dispatch(doRoll({
        diceId,
        difficulty,
        modifiers,
        withAces,  
      }));
    },
    [
      diceId,
      difficulty,
      modifiers,
      withAces,
      dispatch,
    ],
  );

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
              <Form.Label>Взрывной бросок</Form.Label>
              <CheckboxField
                type="checkbox"
                value={withAces}
                onChange={setWithAces}
              />
            </Form.Group>

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
          <div>Modifier: {totalModifier}</div>
        </Container>
        <Container>
          <Button onClick={addRoll}>
            Бросить
          </Button>
          <Row>
            { rolls }
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default Roll;