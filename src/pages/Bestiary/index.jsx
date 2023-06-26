import React, { useCallback, useMemo, useState } from 'react';
import { Button, Card, Col, Container, Form, InputGroup, ListGroup, Navbar, Offcanvas, Row } from 'react-bootstrap';
import { BsArrowDown, BsArrowUp, BsSearch, BsStar, BsStarFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';

const orders = [
  {
    title: <>ABC<BsArrowDown /></>,
    sortFunction: (a, b) => (a.title && b.title && a.title > b.title) ? 1 : -1,
  },
  {
    title: <>ABC<BsArrowUp /></>,
    sortFunction: (a, b) => (a.title && b.title && a.title < b.title) ? 1 : -1,
  },
  {
    title: <>CR<BsArrowDown /></>,
    sortFunction: (a, b) => (a.cr < b.cr) ? 1 : -1,
  },
  {
    title: <>CR<BsArrowUp /></>,
    sortFunction: (a, b) => (a.cr > b.cr) ? 1 : -1,
  },
];

const data = [
  {
    id: '1',
    title: 'Aboleth',
    cr: 10,
    type: 'Large abberation',
    source: 'SRD',
    favourite: false,
  },
  {
    id: '2',
    title: 'Acolyte',
    cr: 0.25,
    type: 'Medium humanoid (any race)',
    source: 'SRD',
    favourite: true,
  },
  {
    id: '3',
    title: 'Adult Black Dragon',
    cr: 14,
    type: 'Huge dragon',
    source: 'SRD',
    favourite: false,
  },
  {
    id: '4',
    title: 'Adult Blue Dracolich',
    cr: 17,
    type: 'Huge undead',
    source: 'SRD',
    favourite: true,
  },
  {
    id: '5',
    title: 'Adult Blue Dragon',
    cr: 16,
    type: 'Huge dragon',
    source: 'SRD',
    favourite: false,
  },
];

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
    () => {
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
    <ListGroup.Item>
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

function Bestiary() {
  const [showMenu, setShowMenu] = useState(false);

  const [onlyFavourites, setOnlyFavourites] = useState(false);
  const [orderId, setOrderId] = useState(0);
  const [search, setSearch] = useState('');

  const order = useMemo(
    () => orders[orderId],
    [orderId],
  );

  const [items, setItems] = useState(data);

  const filtered = useMemo(
    () => items
      .filter((item) => {
        if (onlyFavourites && !item.favourite) {
          return false;
        }

        if (search && item.title.indexOf(search) < 0) {
            return false;
        }

        return true;
      })
      .sort(order.sortFunction),
    [
      items,
      onlyFavourites,
      order,
      search,
    ],
  );

  const handleMenuShow = useCallback(
    () => {
      setShowMenu(true);
    },
    [],
  );

  const handleMenuClose = useCallback(
    () => {
      setShowMenu(false);
    },
    [],
  );

  const handleSwitchFavourites = useCallback(
    (e) => {
      setOnlyFavourites(e.target.checked);
    },
    [],
  );

  const handleSwitchOrder = useCallback(
    () => {
      const value = (orderId < orders.length - 1)
        ? orderId + 1
        : 0;
      setOrderId(value);
    },
    [orderId],
  );

  const handleSearch = useCallback(
    (e) => {
      setSearch(e.target.value);
    },
    [],
  );

  const handleChangeFavourite = useCallback(
    ({
      id,
      favourite,
    }) => {
      setItems(items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            favourite,
          }
        }
        return item;
      }));
    },
    [items],
  );

  return (
    <Card>
      <Offcanvas
        show={showMenu}
        onHide={handleMenuClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Bestiary</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Check
              type="switch"
              id="favouritesOnly"
              label="Show Favourites Only"
              checked={onlyFavourites}
              onChange={handleSwitchFavourites}
            />
          </Form>
        </Offcanvas.Body>
      </Offcanvas>

      <Card.Header>
        <Navbar>
          <Container>
            <Navbar.Brand>
              <Button
                variant="secondary"
                onClick={handleMenuShow}
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
                { order && order.title }
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Card.Header>

      <ListGroup variant="flush">
        { filtered.map((item) => (
          <BestiaryItem
            key={item.id}
            id={item.id}
            title={item.title}
            cr={item.cr}
            favourite={item.favourite}
            type={item.type}
            source={item.source}
            onChangeFavourite={handleChangeFavourite}
          />
        )) }
      </ListGroup>
    </Card>
  );
}

export default Bestiary;
