import { Button, Card, Container, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectRolls } from '../rollSlice';
import RollResult from '../RollResult';
import { useCallback, useMemo } from 'react';
import DiceIcon from '../DiceIcon';
import RollBadges from '../RollBadges';

function RollResultModal ({
  show,
  onHide,
  rollId,
  onAddRoll,
  onChangeRoll,
  onDeleteRoll,
}) {
  const rolls = useSelector(selectRolls);

  const roll = useMemo(
    () => (rolls && rolls.find(({ id }) => (id === rollId))),
    [
      rollId,
      rolls,
    ]
  );

  const handleAddValue = useCallback(
    () => {
      if (onAddRoll) {
        onAddRoll(rollId);
      }
    },
    [
      rollId,
      onAddRoll,
    ],
  );

  return (
    <Modal
      show={show}
      onHide={onHide}
    >
      { (roll && roll.dice)
        ? (
          <>
            <Modal.Header>
              { roll.dice && <Modal.Title>{roll.dice.title} <DiceIcon diceId={roll.dice.id} /></Modal.Title> }
            </Modal.Header>

            <Modal.Body>
              <Container className="my-2">
                <Button onClick={handleAddValue}>
                  Добавить
                </Button>
              </Container>

              { roll && (
                <RollResult
                  id={roll.id}
                  dice={roll.dice.title}
                  raises={roll.raises}
                  rolls={roll.result}
                  max={roll.dice.value}
                  modifiers={roll.modifiers}
                  success={roll.success}
                  onAddRoll={onAddRoll}
                  onChangeRoll={onChangeRoll}
                  onDeleteRoll={onDeleteRoll}
                />
              ) }

              <Card className="my-2">
                <Card.Header>
                  <Card.Title>Результат</Card.Title>
                </Card.Header>

                <Card.Body>
                  {roll.total}
                  <RollBadges
                    raises={roll.raises}
                    success={roll.success}
                  />
                </Card.Body>
              </Card>
            </Modal.Body>
          </>
        )
        : (
          <div>Неизвестен</div>
        )
      }

      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={onHide}
        >
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );

}

export default RollResultModal;
