import { useCallback } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedSources, setSources } from '../bestiarySlice';
import { selectSources } from '../sourcesSlice';
import { Link } from 'react-router-dom';
import SourcesSelector from '../components/SourcesSelector';

function Sources() {
  const dispatch = useDispatch();

  const items = useSelector(selectSources);
  const selected = useSelector(selectSelectedSources);

  const handleSelectSources = useCallback(
    (value) => {
      dispatch(setSources(value));
    },
    [
      dispatch,
    ],
  );

  return (
    <Card>
      <SourcesSelector
        selected={selected}
        sources={items}
        onChange={handleSelectSources}
      />

      <Card.Footer>
        <Button
          as={Link}
          variant="primary"
          to="/bestiary"
        >
          Готово
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default Sources;
