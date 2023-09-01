import React, { useCallback, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectMonsters, switchFavourite } from '../bestiarySlice';
import BestiaryItem from '../components/BestiaryItem';
import BestiaryFilters from '../containers/BestiaryFilters';
import MenuContainer from '../containers/MenuContainer';

function BestiaryList() {
  const dispatch = useDispatch();

  const monsters = useSelector(selectMonsters);

  const [showMenu, setShowMenu] = useState(false);

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

  return (
    <Card>
      <MenuContainer
        show={showMenu}
        onHide={handleMenuClose}
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
