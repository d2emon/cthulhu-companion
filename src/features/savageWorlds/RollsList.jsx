import { useCallback, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  addRollResult, deleteRollResult, selectDiceId, selectRolls, selectWithAces, updateRollResult,
} from './rollSlice';
import RollResultModal from './modals/RollResultModal';
import RollModal from './modals/RollModal';
import RollBadges from './RollBadges';

function RollCard ({
  roll,
  onClick,
}) {
  const handleRollClick = useCallback(
    () => {
      if (onClick) {
        onClick(roll.id);
      }
    },
    [
      roll,
      onClick,
    ],
  );

  return (
    <Card className="my-2">
      <Card.Header>
        <Card.Title>
          {roll.total}
        </Card.Title>
        <RollBadges
          raises={roll.raises}
          success={roll.success}
        />
      </Card.Header>

      <Card.Body>
        <Button onClick={handleRollClick}>
          Подробнее
        </Button>
      </Card.Body>
    </Card>
  );
}

function RollList () {
  const dispatch = useDispatch();

  const diceId = useSelector(selectDiceId);
  const withAces = useSelector(selectWithAces);

  const [selectedRoll, setSelectedRoll] = useState(null);

  const rollsData = useSelector(selectRolls);

  const [showRoll, setShowRoll] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleShowRoll = useCallback(
    () => {
      setShowRoll(true);
    },
    [],
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
        <Button
          variant="primary"
          onClick={handleShowRoll}
        >
          Бросить
        </Button>
      </Card.Header>

      <Card.Body>
        <Container>
          <Row>
            { rollsData && rollsData.map((roll) => (
              <Col
                key={roll.id}
                md={6}
              >
                <RollCard
                  roll={roll}
                  onClick={handleShowResults}
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