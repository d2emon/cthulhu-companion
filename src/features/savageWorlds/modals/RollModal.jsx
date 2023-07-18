import { useCallback } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Roll from '../Roll';
import { useDispatch, useSelector } from 'react-redux';
import { doRoll, selectDiceId, selectDifficulty, selectModifiers, selectWithAces } from '../rollSlice';

function RollModal ({
  show,
  onHide,
}) {
  const dispatch = useDispatch();

  const diceId = useSelector(selectDiceId);
  const difficulty = useSelector(selectDifficulty);
  const modifiers = useSelector(selectModifiers);
  const withAces = useSelector(selectWithAces);

  const addRoll = useCallback(
    () => {
      dispatch(doRoll({
        diceId,
        difficulty,
        modifiers,
        withAces,  
      }));
      if (onHide) {
        onHide();
      }
    },
    [
      dispatch,
      diceId,
      difficulty,
      modifiers,
      withAces,
      onHide,
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
        <Roll />
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="success"
          onClick={addRoll}
        >
          Бросить
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

export default RollModal;
