import { useCallback } from 'react';
import { Form } from 'react-bootstrap';

function DiceField ({
  allowNoDice,
  dices,
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
      { allowNoDice && (
        <option
          value={''}
        >
          Нет
        </option>
      ) }
      { dices && dices.map((item) => (
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
