import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  Container,
  Form,
} from 'react-bootstrap';

function TagGroup({
  items,
  value,
  onChange,
}) {
  const [selected, setSelected] = useState({});
    
  const handleChageTag = useCallback((id) => (e) => {
    const newData = {
      ...selected,
      [id]: e.target.checked,
    };

    const tags = Object.keys(newData).filter(tagId => newData[tagId]);
    if (onChange) {
      onChange(tags);
    }
  }, [
    selected,
    onChange,
  ]);

  useEffect(() => {
    setSelected(items.reduce(
      (result, item) => ({
        ...result,
        [item.id]: value && (value.indexOf(item.id) >= 0),
      }),
      {},
    ));
  }, [
    items,
    value,
  ]);

  return (
    <Container>
      { items.map((group) => (
        <Form.Check
          key={group.id}
          id={group.id}
          name={group.id}
          label={group.title}
          checked={!!selected[group.id]}
          type="checkbox"
          inline
          onChange={handleChageTag(group.id)}
        />
      )) }
    </Container>
  );
}

export default TagGroup;
