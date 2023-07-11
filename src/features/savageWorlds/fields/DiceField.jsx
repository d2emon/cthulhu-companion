import { useCallback } from 'react';
import { Form } from 'react-bootstrap';
import dices from '../dice/dices';

function DiceField ({
  value,
  onChange,
}) {
  const handleChangeDice = useCallback(
    (e) => {
      const valueId = e.target.value;
      if (onChange) {
        onChange(valueId);
      }
    },
    [onChange],
  );
    
  return (
    <Form.Select
      value={value}
      onChange={handleChangeDice}
    >
      { dices.map((item) => (
        <option
          key={item.id}
          value={item.id}
        >
          {item.title}
        </option>
      )) }
    </Form.Select>
  );  
}
  
export default DiceField;
