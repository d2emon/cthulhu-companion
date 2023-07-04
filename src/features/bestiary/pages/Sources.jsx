import { Button, Card } from 'react-bootstrap';
import SourcesSelector from '../components/SourcesSelector';

function Sources({
  items,
  selected,
  onChange,
  onHide,
}) {
  return (
    <Card>
      <SourcesSelector
        selected={selected}
        sources={items}
        onChange={onChange}
      />
      <Card.Footer>
        <Button
          variant="primary"
          onClick={onHide}
        >
          Готово
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default Sources;
