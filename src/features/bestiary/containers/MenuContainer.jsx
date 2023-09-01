import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectFavourites, setFavourites} from '../bestiarySlice';
import BestiaryMenu from '../components/BestiaryMenu';

function MenuContainer({
  show,
  onHide,
}) {
  const dispatch = useDispatch();

  const onlyFavourites = useSelector(selectFavourites);

  const handleSwitchFavourites = useCallback(
    (checked) => {
      dispatch(setFavourites(checked));
    },
    [dispatch],
  );

  return (
    <BestiaryMenu
      show={show}
      favourites={onlyFavourites}
      onHide={onHide}
      onChange={handleSwitchFavourites}
    />
  );
}

export default MenuContainer;
