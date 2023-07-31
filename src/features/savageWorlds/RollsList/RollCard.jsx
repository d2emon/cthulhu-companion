import { useCallback, useMemo } from 'react';
import { Button, Card } from 'react-bootstrap';
import RollBadges from '../RollBadges';

function RollCard ({
  roll,
  onClick,
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
        <Button
          data-testid="roll-detail-button"
          onClick={handleRollClick}
        >
          Подробнее
        </Button>
      </Card.Body>
    </Card>
  );
}

export default RollCard;