import { useCallback, useMemo } from 'react';
import { Button, Card } from 'react-bootstrap';
import RollBadges from '../RollBadges';

function RollCard ({
  roll,
  onClick,
  onOppositeRollClick,
}) {
  const rollDetails = useMemo(
    () => (
      (roll.wildIsBetter)
        ? roll.wildRolls
        : roll.rolls
    ),
    [roll],
  );

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

  const handleOppositeRollClick = useCallback(
    () => {
      if (onOppositeRollClick) {
        onOppositeRollClick(rollDetails.modified);
      }
    },
    [
      rollDetails,
      onOppositeRollClick,
    ],
  );

  console.log(rollDetails);
  return (
    <Card
      data-testid="roll-card"
      className="my-2"
    >
      <Card.Header>
        <Card.Title
          data-testid="roll-total"
        >
          {rollDetails.modified}
        </Card.Title>
        <RollBadges
          raises={rollDetails.raises}
          success={rollDetails.success}
        />
      </Card.Header>

      <Card.Body>
        <div className="d-grid gap-2">
          <Button
            data-testid="roll-detail-button"
            onClick={handleRollClick}
          >
            Подробнее
          </Button>

          <Button
            data-testid="opposite-roll-button"
            onClick={handleOppositeRollClick}
          >
            Встречный бросок
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default RollCard;