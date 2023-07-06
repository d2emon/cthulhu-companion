import React, { useCallback, useState } from 'react';
import { Button, Container, Form, InputGroup, Navbar } from 'react-bootstrap';
import { BsArrowDown, BsArrowUp, BsSearch } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import orders, { orderTitles } from '../orders';
import {searchTitle, selectDesc, selectOrder, selectSearch, setOrder} from '../bestiarySlice';

function BestiaryFilters({
  onShowMenu,
}) {
  const dispatch = useDispatch();

  const desc = useSelector(selectDesc);
  const order = useSelector(selectOrder);
  const search = useSelector(selectSearch);

  const [orderId, setOrderId] = useState(0);

  const handleSwitchOrder = useCallback(
    () => {
      const nextOrderId = (orderId < orders.length - 1)
        ? orderId + 1
        : 0;
      const nextOrder = orders[nextOrderId];
      setOrderId(nextOrderId);
      dispatch(setOrder({
        order: nextOrder.order,
        desc: nextOrder.desc,
      }));
    },
    [
      dispatch,
      orderId,
    ],
  );

  const handleSearch = useCallback(
    (e) => {
      dispatch(searchTitle(e.target.value));
    },
    [dispatch],
  );

  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Button
            variant="secondary"
            onClick={onShowMenu}
          >
            <FaBars />
          </Button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Form className="d-flex">
            <InputGroup>
              <InputGroup.Text>
                <BsSearch />
              </InputGroup.Text>
              <Form.Control
                type="search"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={handleSearch}
              />
            </InputGroup>
          </Form>

          <Button
            variant="secondary"
            onClick={handleSwitchOrder}
          >
            { orderTitles[order] }
            { desc ? <BsArrowUp /> : <BsArrowDown /> }
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BestiaryFilters;
