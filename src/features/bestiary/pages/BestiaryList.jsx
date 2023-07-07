import React, { useCallback, useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMonsters, selectDesc, selectFavourites, selectMonsters,
  selectOrder, selectSearch, selectSelectedSources, switchFavourite,
} from '../bestiarySlice';
import BestiaryItem from '../components/BestiaryItem';
import SourcesContainer from './Sources';
import BestiaryFilters from '../containers/BestiaryFilters';
import MenuContainer from '../containers/MenuContainer';

function BestiaryList() {
  const dispatch = useDispatch();

  const desc = useSelector(selectDesc);
  const monsters = useSelector(selectMonsters);
  const onlyFavourites = useSelector(selectFavourites);
  const order = useSelector(selectOrder);
  const search = useSelector(selectSearch);
  const selectedSources = useSelector(selectSelectedSources)

  const [showMenu, setShowMenu] = useState(false);
  const [showSelectSources, setShowSelectSources] = useState(false);

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

  if (showSelectSources) {
    return <SourcesContainer
      onHide={handleHideSelectSources}
    />;
  }

  return (
    <Card>
      <MenuContainer
        show={showMenu}
        onHide={handleMenuClose}
        onShowSelectSources={handleShowSelectSources}
      />

      <Card.Header>
        <BestiaryFilters
          onShowMenu={handleMenuShow}
        />
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

export default BestiaryList;
