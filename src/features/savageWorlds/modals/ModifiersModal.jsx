import { useCallback, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ModifiersField from '../ModifiersField';

function ModifiersModal ({
  show,
  onHide,
  modifiers,
  onSave,
}) {
  const [value, setValue] = useState([]);

  const handleSave = useCallback(
    () => {
      if (onSave) {
        onSave(value);
      }

      if (onHide) {
        onHide();
      }
    },
    [
      value,
      onHide,
      onSave,
    ],
  );

  useEffect(
    () => {
      setValue(modifiers);
    },
    [
      modifiers,
      show,
    ],
  );

  return (
    <Modal
      show={show}
      onHide={onHide}
    >
      <Modal.Header>
        <Modal.Title>Бросок</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ModifiersField
          values={value}
          onChange={setValue}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="success"
          onClick={handleSave}
        >
          Сохранить
        </Button>
        <Button
          variant="warning"
          onClick={onHide}
        >
          Отменить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModifiersModal;
