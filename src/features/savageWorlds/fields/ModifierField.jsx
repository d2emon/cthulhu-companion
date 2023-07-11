import { useCallback } from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import CommonField from './CommonField';

function ModifierField ({
  id,
  title,
  value,
  onChange,
  onRemove,
}) {
  const handleChangeTitle = useCallback(
    (newValue) => {
      if (onChange) {
        onChange({
          id,
          title: newValue,
          value,
        });
      }
    },
    [
      id,
      value,
      onChange,
    ],
  );

  const handleChangeValue = useCallback(
    (newValue) => {
      if (onChange) {
        onChange({
          id,
          title,
          value: parseInt(newValue, 10),
        });
      }
    },
    [
      id,
      title,
      onChange,
    ],
  );
    
  const handleRemove = useCallback(
    () => {
      if (onRemove) {
        onRemove(id);
      }
    },
    [
      id,
      onRemove,
    ],
  );

  return (
    <InputGroup>
      <CommonField
        placeholder="Описание"
        value={title}
        onChange={handleChangeTitle}
      />
      <CommonField
        type="number"
        value={value}
        onChange={handleChangeValue}
      />
      <Button
        variant="danger"
        onClick={handleRemove}
      >
        Удалить
      </Button>
    </InputGroup>
  );
}

export default ModifierField;
