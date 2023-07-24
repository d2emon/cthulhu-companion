import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CheckboxField from './fields/CheckboxField';
import CommonField from './fields/CommonField';
import DiceField from './fields/DiceField';
import ModifiersModal from './modals/ModifiersModal';
import DiceIcon from './DiceIcon';
import {
  loadDiceList,
  selectDiceId, selectDices, selectDifficulty, selectModifiers, selectWithAces, setDice, setDifficulty,
  setModifiers, setWithAces,
} from './rollSlice';

function ModifierList ({
  modifiers,
  onSave,
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
        modifiers={modifiers}
        onHide={handleHideModifiersModals}
        onSave={onSave}
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

      { (modifiers && modifiers.length > 0) && (
        <>
          <Card.Body>
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
          </Card.Body>

          <Card.Footer>
            <Row>
              <Col>Итого</Col>
              <Col>{ total }</Col>
            </Row>
          </Card.Footer>
        </>
      ) }
    </Card>
  );
}

function Roll () {
  const dispatch = useDispatch();

  const dices = useSelector(selectDices);
  const diceId = useSelector(selectDiceId);
  const difficulty = useSelector(selectDifficulty);
  const modifiers = useSelector(selectModifiers);
  const withAces = useSelector(selectWithAces);

  const handleSaveDice = useCallback(
    (value) => {
      dispatch(setDice(value));
    },
    [
      dispatch,
    ],
  );

  const handleSaveDifficulty = useCallback(
    (value) => {
      dispatch(setDifficulty(value));
    },
    [
      dispatch,
    ],
  );

  const handleSaveModifiers = useCallback(
    (value) => {
      dispatch(setModifiers(value));
    },
    [
      dispatch,
    ],
  );

  const handleSaveWithAces = useCallback(
    (value) => {
      dispatch(setWithAces(value));
    },
    [
      dispatch,
    ],
  );

  useEffect(
    () => {
      dispatch(loadDiceList());
    },
    [
      dispatch,
    ],
  );

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Кость <DiceIcon diceId={diceId} /></Form.Label>
          <DiceField
            dices={dices}
            value={diceId}
            onChange={handleSaveDice}
          />
        </Form.Group>

        <ModifierList
          modifiers={modifiers}
          onSave={handleSaveModifiers}
        />

        <Form.Group>
          <CheckboxField
            type="checkbox"
            label="Взрывной бросок"
            value={withAces}
            onChange={handleSaveWithAces}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Сложность</Form.Label>
          <CommonField
            type="number"
            value={difficulty}
            onChange={handleSaveDifficulty}
          />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Roll;