import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import {
  getMonsters, resetSources, selectDesc, selectFavourites,
  selectOrder, selectSearch, selectSelectedSources,
} from '../bestiarySlice';
import { selectSources } from '../sourcesSlice';
import BestiaryList from './BestiaryList';
import Sources from './Sources';

function Bestiary() {
  const dispatch = useDispatch();

  const desc = useSelector(selectDesc);
  const onlyFavourites = useSelector(selectFavourites);
  const order = useSelector(selectOrder);
  const search = useSelector(selectSearch);
  const selectedSources = useSelector(selectSelectedSources)
  const sources = useSelector(selectSources);

  useEffect(
    () => {
      dispatch(resetSources);
    },
    [
      dispatch,
      sources,
    ],
  );

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

  return (
    <Outlet />
  );
}

Bestiary.List = BestiaryList;
Bestiary.Sources = Sources;

export default Bestiary;
