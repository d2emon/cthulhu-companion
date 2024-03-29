import React, { useCallback } from 'react';
import { Form, ListGroup, Offcanvas } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';
import { MdSource } from 'react-icons/md';
import { Link } from 'react-router-dom';

function BestiaryMenu ({
  show,
  favourites,
  onHide,
  onChange,
}) {
  const handleSwitchFavourites = useCallback(
    e => {
      if (onChange) {
        onChange(e.target.checked);
      }
    },
    [onChange],
  );

  return (
    <Offcanvas
      show={show}
      onHide={onHide}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Bestiary</Offcanvas.Title>
      </Offcanvas.Header>

      <ListGroup variant="flush">
        <ListGroup.Item
          className="d-flex align-items-center justify-content-between"
          variant="dark"
        >
          <BsStarFill />
          <Form.Check
            type="switch"
            id="favouritesOnly"
            label="Show Favourites Only"
            checked={favourites}
            onChange={handleSwitchFavourites}
          />
        </ListGroup.Item>
        <ListGroup.Item
          as={Link}
          className="d-flex align-items-center justify-content-between"
          action
          variant="dark"
          to="/bestiary/sources"
        >
          <MdSource />
          ManageSources
        </ListGroup.Item>
      </ListGroup>
    </Offcanvas>
  );
}

export default BestiaryMenu;
