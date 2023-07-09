import { useCallback } from 'react';
import { Form } from 'react-bootstrap';

function CommonField ({
  type,
  value,
  onChange,
}) {
  const handleChange = useCallback(
    (e) => {
      const newValue = e.target.value;
      if (onChange) {
        onChange(newValue);
      }
    },
    [onChange],
  );
    
  return (
    <Form.Control
      type={type}
      value={value}
      onChange={handleChange}
    />
  );
}

export default CommonField;
