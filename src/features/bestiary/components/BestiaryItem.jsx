import { useCallback } from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function BestiaryItem({
  id,
  title,
  favourite,
  cr,
  type,
  source,
  onChangeFavourite,
}) {
  const handleSetFavourite = useCallback(
    (e) => {
      console.log(e);
      e.stopPropagation();
      if (onChangeFavourite) {
        onChangeFavourite({
          id,
          favourite: !favourite,
        });
      }
    },
    [
      id,
      favourite,
      onChangeFavourite,
    ],
  );
      
  return (
    <ListGroup.Item
      as={Link}
      to={`/bestiary/id`}
    >
      <Row>
        <Col>
          <div className="fw-bold">{title}</div>
          <span>CR: {cr}</span>
          &nbsp;
          <span>{type}</span>
          &nbsp;
          <span>{source}</span>
        </Col>
        <Col sm={2}>
          { (
            favourite
              ? <BsStarFill onClick={handleSetFavourite} />
              : <BsStar onClick={handleSetFavourite} />
          ) }
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export default BestiaryItem;