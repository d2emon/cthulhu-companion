import { useCallback } from 'react';
import { Button, Card } from 'react-bootstrap';
import RollBadges from '../RollBadges';

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
    <Card
      data-testid="roll-card"
      className="my-2"
    >
      <Card.Header>
        <Card.Title
          data-testid="roll-total"
        >
          {roll.total}
        </Card.Title>
        <RollBadges
          raises={roll.raises}
          success={roll.success}
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