import { useCallback } from 'react';
import { Badge, Button, InputGroup } from 'react-bootstrap';
import CommonField from './CommonField';

function RollField ({
  id,
  isAce,
  max,
  title,
  value,
  onChange,
  onRemove,
}) {
  const handleChangeValue = useCallback(
    (newValue) => {
      const parsed = parseInt(newValue, 10);
      if (onChange) {
        onChange({
          id,
          value: parsed,
          isAce: parsed >= max,
        });
      }
    },
    [
      id,
      max,
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
      { isAce && (
        <span data-testid="ace-badge">
          <Badge bg="success">Взрыв</Badge>
        </span>
      ) }

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

export default RollField;
