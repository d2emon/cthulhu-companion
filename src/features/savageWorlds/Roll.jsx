import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import {
  GiD4, GiDiceSixFacesSix, GiDiceEightFacesEight,
  GiD10, GiD12, GiDiceTarget
} from 'react-icons/gi';
import CheckboxField from './fields/CheckboxField';
import CommonField from './fields/CommonField';
import DiceField from './fields/DiceField';
import RollResult from './RollResult';
import { useDispatch, useSelector } from 'react-redux';
import {
  addRollResult, deleteRollResult, doRoll, selectModifiers, selectRolls, setDice, updateRollResult
} from './rollSlice';
import ModifiersModal from './modals/ModifiersModal';

const diceIcons = {
  d4: <GiD4 />,
  d6: <GiDiceSixFacesSix />,
  d8: <GiDiceEightFacesEight />,
  d10: <GiD10 />,
  d12: <GiD12 />,
};

function ModifierList ({
  modifiers,
}) {
  const [showModifiersModal, setShowModifiersModal] = useState(false);

  const total = useMemo(
    () => (
      modifiers
        ? modifiers.reduce(
          (result, modifier) => (result + modifier.value),
          0,
        )
        : 0
    ),
    [
      modifiers,
    ],
  );

  const handleShowModifiersModals = useCallback(
    () => {
      setShowModifiersModal(true);
    },
    [],
  );

  const handleHideModifiersModals = useCallback(
    () => {
      setShowModifiersModal(false);
    },
    [],
  );

  return (
    <Card className="my-2">
      <ModifiersModal
        show={showModifiersModal}
        onHide={handleHideModifiersModals}
      />

      <Card.Header>
        <Row>
          <Col>
            <Card.Title>Модификаторы</Card.Title>
          </Col>
          <Col>
            <Button
              onClick={handleShowModifiersModals}
            >
              Модификаторы
            </Button>
          </Col>
        </Row>
      </Card.Header>

      { modifiers && <Card.Body>
        { modifiers.map((modifier) => (
          <Row key={modifier.id}>
            <Col>{ modifier.title }</Col>
            <Col>
              { (modifier.value >= 0)
                 ? `+${modifier.value}`
                 : `-${-modifier.value}`
              }
            </Col>
          </Row>
        )) }
      </Card.Body> }

      { modifiers && <Card.Footer>
        <Row>
          <Col>Итого</Col>
          <Col>{ total }</Col>
        </Row>
     </Card.Footer> }
    </Card>
  );
}

function Roll () {
  const dispatch = useDispatch();

  const [diceId, setDiceId] = useState('d4');
  const [difficulty, setDifficulty] = useState(4);
  const [withAces, setWithAces] = useState(true);

  const modifiers = useSelector(selectModifiers);
  const rollsData = useSelector(selectRolls);

  const diceIcon = useMemo(
    () => (diceIcons[diceId] || <GiDiceTarget />),
    [diceId],
  );

  const handleAddRoll = useCallback(
    (id) => {
      dispatch(addRollResult({
        id,
        options: {
          diceId,
          withAces,
        },
      }));
    },
    [
      dispatch,
      diceId,
      withAces,
    ],
  );

  const handleChangeRoll = useCallback(
    (id, value) => {
      dispatch(updateRollResult({
        id,
        value,
      }));
    },
    [dispatch],
  );

  const handleDeleteRoll = useCallback(
    (id, value) => {
      dispatch(deleteRollResult({
        id,
        value,
      }));
    },
    [dispatch],
  );

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
        md={12}
      >
        <RollResult
          id={data.id}
          dice={data.dice.title}
          raises={data.raises}
          rolls={data.result}
          max={data.dice.value}
          modifiers={data.modifiers}
          success={data.success}
          onAddRoll={handleAddRoll}
          onChangeRoll={handleChangeRoll}
          onDeleteRoll={handleDeleteRoll}
        />
      </Col>
    )),
    [
      rollsData,
      handleAddRoll,
      handleChangeRoll,
      handleDeleteRoll,
    ],
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
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Кость {diceIcon}</Form.Label>
          <DiceField
            value={diceId}
            onChange={setDiceId}
          />
        </Form.Group>

        <ModifierList
          modifiers={modifiers}
        />

        <Form.Group>
          <CheckboxField
            type="checkbox"
            label="Взрывной бросок"
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
    </Container>
  );
}

export default Roll;