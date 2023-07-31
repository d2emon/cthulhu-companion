import { useCallback, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  addRollResult, deleteRollResult, selectDiceId, selectRolls, selectWithAces, updateRollResult,
} from '../rollSlice';
import RollResultModal from '../modals/RollResultModal';
import RollModal from '../modals/RollModal';
import RollCard from './RollCard';

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
    (id, isWild=false) => {
      dispatch(addRollResult({
        id,
        options: {
          diceId,
          withAces,
        },
        isWild,
      }));
    },
    [
      dispatch,
      diceId,
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
        <Button
          data-testid="add-roll-button"
          variant="primary"
          onClick={handleShowRoll}
        >
          Бросить
        </Button>
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