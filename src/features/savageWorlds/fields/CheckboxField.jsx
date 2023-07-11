import { useCallback } from 'react';
import { Form } from 'react-bootstrap';

function CheckboxField ({
  type,
  value,
  onChange,
}) {
  const handleChange = useCallback(
    (e) => {
      const newValue = e.target.checked;
      if (onChange) {
        onChange(newValue);
      }
    },
    [onChange],
  );
    
  return (
    <Form.Check
      type={type}
      checked={value}
      onChange={handleChange}
    />
  );
}

export default CheckboxField;
