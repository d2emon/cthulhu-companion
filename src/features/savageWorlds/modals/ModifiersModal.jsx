import { Button, Modal } from 'react-bootstrap';
import ModifiersField from '../ModifiersField';
import { useDispatch, useSelector } from 'react-redux';
import { selectModifiers, setModifiers } from '../rollSlice';
import { useCallback } from 'react';

function ModifiersModal ({
  show,
  onHide,
}) {
  const dispatch = useDispatch();

  const modifiers = useSelector(selectModifiers);

  const handleChange = useCallback(
    (value) => {
      dispatch(setModifiers(value));
    },
    [
      dispatch,
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
          values={modifiers}
          onChange={handleChange}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={onHide}
        >
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModifiersModal;
