import { Badge } from 'react-bootstrap';

function RollBadges ({
  raises,
  success,
}) {
  const result = [];

  if (success) {
    result.push((
      <Badge
        key="-1"
        className="mx-2"
        bg="success"
      >
        Успех
      </Badge>
    ));
  }

  for (let i = 0; i < raises; i += 1) {
    result.push((
      <Badge
        key={i}
        className="mx-2"
        bg="success"
      >
        Подъём
      </Badge>
    ));
  }

  return result;
}

export default RollBadges;
