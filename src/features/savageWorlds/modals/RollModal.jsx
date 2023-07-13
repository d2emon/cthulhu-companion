import { Button, Modal } from 'react-bootstrap';
import Roll from '../Roll';

function RollModal ({
  show,
  onHide,
}) {
  return (
    <Modal
      show={show}
      onHide={onHide}
    >
      <Modal.Header>
        <Modal.Title>Бросок</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Roll />
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

export default RollModal;
