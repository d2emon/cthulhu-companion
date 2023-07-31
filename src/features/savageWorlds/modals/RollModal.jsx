import { useCallback } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Roll from '../Roll';
import { useDispatch, useSelector } from 'react-redux';
import { doRoll, selectDiceId, selectDifficulty, selectModifiers, selectWildDiceId, selectWithAces } from '../rollSlice';

function RollModal ({
  show,
  onHide,
}) {
  const dispatch = useDispatch();

  const diceId = useSelector(selectDiceId);
  const difficulty = useSelector(selectDifficulty);
  const modifiers = useSelector(selectModifiers);
  const wildDiceId = useSelector(selectWildDiceId);
  const withAces = useSelector(selectWithAces);

  const addRoll = useCallback(
    () => {
      dispatch(doRoll({
        diceId,
        difficulty,
        modifiers,
        wildDiceId,
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
      wildDiceId,
      withAces,
      onHide,
    ],
  );

  return (
    <Modal
      data-testid="roll-modal"
      show={show}
      onHide={onHide}
    >
      <Modal.Header>
        <Modal.Title data-testid="modal-title">
          Бросок
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Roll />
      </Modal.Body>

      <Modal.Footer>
        <Button
          data-testid="roll-button"
          variant="success"
          onClick={addRoll}
        >
          Бросить
        </Button>
        <Button
          data-testid="close-button"
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
