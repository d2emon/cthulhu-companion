import React, { useCallback, useEffect, useState } from 'react';
import { Button, Card, Container, Form, InputGroup, ListGroup, Navbar } from 'react-bootstrap';
import { BsArrowDown, BsArrowUp, BsSearch } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMonsters, searchTitle, selectDesc, selectFavourites, selectMonsters,
  selectOrder, selectSearch, selectSelectedSources, setFavourites, setOrder, setSources, switchFavourite,
} from '../../features/bestiarySlice';
import BestiaryItem from './BestiaryItem';
import orders, { orderTitles } from './orders';
import { selectSources } from '../../features/sourcesSlice';
import SourcesSelector from './SourcesSelector';
import BestiaryMenu from './BestiaryMenu';

function Bestiary() {
  const dispatch = useDispatch();

  const desc = useSelector(selectDesc);
  const monsters = useSelector(selectMonsters);
  const onlyFavourites = useSelector(selectFavourites);
  const order = useSelector(selectOrder);
  const search = useSelector(selectSearch);
  const sources = useSelector(selectSources);
  const selectedSources = useSelector(selectSelectedSources)

  const [showMenu, setShowMenu] = useState(false);
  const [showSelectSources, setShowSelectSources] = useState(false);

  const [orderId, setOrderId] = useState(0);

  useEffect(
    () => {
      dispatch(getMonsters());
    },
    [
      dispatch,
      desc,
      onlyFavourites,
      order,
      search,
      selectedSources,
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
    (checked) => {
      dispatch(setFavourites(checked));
    },
    [dispatch],
  );

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

  const handleChangeFavourite = useCallback(
    ({
      id,
      favourite,
    }) => {
      dispatch(switchFavourite({
        id,
        favourite,
      }));
    },
    [dispatch],
  );

  const handleShowSelectSources = useCallback(
    () => {
      setShowSelectSources(true);
      setShowMenu(false);
    },
    [],
  );

  const handleHideSelectSources = useCallback(
    () => {
      setShowSelectSources(false);
    },
    [],
  );

  const handleSelectSources = useCallback(
    (value) => {
      dispatch(setSources(value));
    },
    [
      dispatch,
    ],
  );

  useEffect(
    () => {
      dispatch(setSources(sources.reduce(
        (result, source) => ({
          ...result,
          [source.id]: true,
        }),
        {},
      )));
    },
    [
      dispatch,
      sources,
    ],
  )

  if (showSelectSources) {
    return (
      <Card>
        <SourcesSelector
          selected={selectedSources}
          sources={sources}
          onChange={handleSelectSources}
        />
        <Card.Footer>
          <Button
            variant="primary"
            onClick={handleHideSelectSources}
          >
            Готово
          </Button>
        </Card.Footer>
      </Card>
    );
  }

  return (
    <Card>
      <BestiaryMenu
        show={showMenu}
        favourites={onlyFavourites}
        onHide={handleMenuClose}
        onChange={handleSwitchFavourites}
        onShowSelectSources={handleShowSelectSources}

      />

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
                { orderTitles[order] }
                { desc ? <BsArrowUp /> : <BsArrowDown /> }
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Card.Header>

      <ListGroup variant="flush">
        { monsters.map((item) => (
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
