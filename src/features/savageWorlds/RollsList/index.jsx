import { useCallback, useState } from 'react';
import { Button, ButtonGroup, Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  addRollResult, deleteRollResult, selectDiceId, selectRolls, selectTitle, selectWithAces, setDefaultRoll,
  setOppositeRollAttack, setOppositeRollDefence, setUntrainedRoll, updateRollResult,
} from '../rollSlice';
import RollResultModal from '../modals/RollResultModal';
import RollModal from '../modals/RollModal';
import RollCard from './RollCard';

function RollList () {
  const dispatch = useDispatch();

  const diceId = useSelector(selectDiceId);
  const title = useSelector(selectTitle);
  const withAces = useSelector(selectWithAces);

  const [selectedRoll, setSelectedRoll] = useState(null);

  const rollsData = useSelector(selectRolls);

  const [showRoll, setShowRoll] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleShowRoll = useCallback(
    () => {
      dispatch(setDefaultRoll());
      setShowRoll(true);
    },
    [
      dispatch,
    ],
  );

  const handleShowUntrainedRoll = useCallback(
    () => {
      dispatch(setUntrainedRoll());
      setShowRoll(true);
    },
    [
      dispatch,
    ],
  );

  const handleShowOppositeRollAttacker = useCallback(
    () => {
      dispatch(setOppositeRollAttack());
      setShowRoll(true);
    },
    [
      dispatch,
    ],
  );

  const handleShowOppositeRollDefender = useCallback(
    (targetNumber) => {
      console.log(targetNumber);
      dispatch(setOppositeRollDefence(targetNumber));
      setShowRoll(true);
    },
    [
      dispatch,
    ],
  );

  const handleHideRoll = useCallback(
    () => {
      setShowRoll(false);
    },
    [],
  );

  const handleShowResults = useCallback(
    (value) => {
      setSelectedRoll(value);
      setShowResult(true);
    },
    [],
  );

  const handleHideResults = useCallback(
    () => {
      setShowResult(false);
    },
    [],
  );

  const handleAddRoll = useCallback(
    (id, isWild=false) => {
      dispatch(addRollResult({
        id,
        options: {
          diceId,
          title,
          withAces,
        },
        isWild,
      }));
    },
    [
      dispatch,
      diceId,
      title,
      withAces,
    ],
  );

  const handleChangeRoll = useCallback(
    (id, value, isWild) => {
      dispatch(updateRollResult({
        id,
        value,
        isWild,
      }));
    },
    [dispatch],
  );

  const handleDeleteRoll = useCallback(
    (id, value, isWild) => {
      dispatch(deleteRollResult({
        id,
        value,
        isWild,
      }));
    },
    [dispatch],
  );

  return (
    <Card>
      <RollResultModal
        show={showResult}
        onHide={handleHideResults}
        rollId={selectedRoll}
        onAddRoll={handleAddRoll}
        onChangeRoll={handleChangeRoll}
        onDeleteRoll={handleDeleteRoll}
      />

      <RollModal
        show={showRoll}
        onHide={handleHideRoll}
      />

      <Card.Header>
        <ButtonGroup>
          <Button
            data-testid="add-roll-button"
            variant="primary"
            onClick={handleShowRoll}
          >
            Бросить
          </Button>

          <Button
            data-testid="add-untrained-roll-button"
            variant="primary"
            onClick={handleShowUntrainedRoll}
          >
            Неумелый бросок
          </Button>

          <Button
            data-testid="add-untrained-roll-button"
            variant="primary"
            onClick={handleShowOppositeRollAttacker}
          >
            Встречная проверка
          </Button>

          <Button
            data-testid="add-untrained-roll-button"
            variant="primary"
            onClick={handleShowUntrainedRoll}
          >
            Совместная проверка
          </Button>

          <Button
            data-testid="add-untrained-roll-button"
            variant="primary"
            onClick={handleShowUntrainedRoll}
          >
            Групповая проверка
          </Button>
        </ButtonGroup>
      </Card.Header>

      <Card.Body>
        <Container
          data-testid="roll-results"
        >
          <Row>
            { rollsData && rollsData.map((roll) => (
              <Col
                key={roll.id}
                md={6}
              >
                <RollCard
                  roll={roll}
                  onClick={handleShowResults}
                  onOppositeRollClick={handleShowOppositeRollDefender}
                />
              </Col>
            )) }
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default RollList;