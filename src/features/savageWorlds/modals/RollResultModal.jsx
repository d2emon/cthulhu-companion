import { Button, Card, Modal } from 'react-bootstrap';
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

  const mainRolls = useMemo(
    () => (
      roll
        ? roll.rolls
        : null
    ),
    [roll],
  );

  const wildRolls = useMemo(
    () => (
      roll
        ? roll.wildRolls
        : null
    ),
    [roll],
  );

  const rollDetails = useMemo(
    () => (
      roll
        ? (
          roll.wildIsBetter
            ? roll.wildRolls
            : roll.rolls
        )
        : null
    ),
    [roll],
  );

  const modifierText = useMemo(
    () => roll && roll.modifiers && roll.modifiers.reduce(
      (result, modifier) => {
        const { value } = modifier;
        if (value > 0) {
          return `${result} + ${value}`;
        }
        if (value < 0) {
          return `${result} - ${Math.abs(value)}`;
        }
        return result;
      },
      '',
    ),
    [roll],
  );

  const handleAddMainValue = useCallback(
    () => {
      if (onAddRoll) {
        onAddRoll(rollId, false);
      }
    },
    [
      rollId,
      onAddRoll,
    ],
  );

  const handleAddWildValue = useCallback(
    () => {
      if (onAddRoll) {
        onAddRoll(rollId, true);
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
      { (mainRolls && mainRolls.dice)
        ? (
          <>
            <Modal.Header>
              { mainRolls.dice && <Modal.Title>{mainRolls.dice.title} <DiceIcon diceId={mainRolls.dice.id} /></Modal.Title> }
            </Modal.Header>

            <Modal.Body>
              { mainRolls && (
                <RollResult
                  id={roll.id}
                  title="Основной Кубик"
                  dice={mainRolls.dice}
                  rolls={mainRolls.rolls}
                  max={mainRolls.dice.value}
                  onAddRoll={handleAddMainValue}
                  onChangeRoll={onChangeRoll}
                  onDeleteRoll={onDeleteRoll}
                />
              ) }

              { wildRolls && wildRolls.dice && (
                <RollResult
                  id={roll.id}
                  title="Дикий Кубик"
                  dice={wildRolls.dice}
                  rolls={wildRolls.rolls}
                  isWild
                  max={wildRolls.dice.value}
                  onAddRoll={handleAddWildValue}
                  onChangeRoll={onChangeRoll}
                  onDeleteRoll={onDeleteRoll}
                />
              ) }

              {rollDetails && (
                <Card className="my-2">
                  <Card.Header>
                    <Card.Title>Результат</Card.Title>
                    <Card.Subtitle>{rollDetails.total}</Card.Subtitle>
                  </Card.Header>

                  <Card.Body>
                    <Card.Text>
                      {modifierText}
                    </Card.Text>
                  </Card.Body>

                  <Card.Footer>
                    {rollDetails.modified}
                    <RollBadges
                      raises={rollDetails.raises}
                      success={rollDetails.success}
                    />
                  </Card.Footer>
                </Card>
              )}
            </Modal.Body>
          </>
        )
        : (
          <Modal.Header>
            <Modal.Title>Неизвестен</Modal.Title>
          </Modal.Header>
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
