import { useCallback, useMemo } from 'react';
import { Form, ListGroup } from 'react-bootstrap';

function SourceSwitcher({
  id,
  title,
  value,
  onChange,
}) {
  const handleSwitchSource = useCallback(
    (e) => {
      if (onChange) {
        onChange({
          id,
          value: e.target.checked,
        });
      }
    },
    [
      id,
      onChange,
    ],
  );
  
  return (
    <ListGroup.Item
      variant="dark"
    >
      <Form.Check
        type="checkbox"
        id={id}
        label={title}
        checked={value}
        onChange={handleSwitchSource}
      />
    </ListGroup.Item>
  );
}
  
function SourcesSelector({
  selected,
  sources,
  onChange,
}) {
  const isAllSourcesChecked = useMemo(
    () => (selected && sources.every(source => selected[source.id])),
    [
      selected,
      sources,
    ],
  );

  const handleSwitchAll = useCallback(
    (e) => {
      const value = e.target.checked;
      if (onChange) {
        onChange(sources.reduce(
          (result, source) => ({
            ...result,
            [source.id]: value,
          }),
          {},
        ));
      }
    },
    [
      sources,
      onChange,
    ],
  );

  const handleSwitchSource = useCallback(
    ({
      id,
      value,
    }) => {
      if (onChange) {
        onChange(sources.reduce(
          (result, source) => ({
            ...result,
            [source.id]: (source.id === id)
              ? value
              : selected[source.id],
          }),
          {},
        ));
      }
    },
    [
      selected,
      sources,
      onChange,
    ],
  );

  return (
    <ListGroup variant="flush">
      <ListGroup.Item
        variant="dark"
      >
        <Form.Check
          type="checkbox"
          id="all"
          label="All"
          checked={isAllSourcesChecked}
          onChange={handleSwitchAll}
        />
      </ListGroup.Item>
      { sources.map((source) => (
        <SourceSwitcher
          key={source.id}
          id={source.id}
          title={source.title}
          value={selected[source.id]}
          onChange={handleSwitchSource}
        />
      )) }
    </ListGroup>
  );
}

export default SourcesSelector;
