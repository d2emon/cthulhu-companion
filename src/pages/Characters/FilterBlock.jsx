import React, {
  useCallback,
} from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import CharacterFilters from '../../components/CharacterFilters';
import {
  selectCharacterFilters,
  selectCharacterGroups,
  selectCharacterTags,
} from '../../app/store/character/selectors';
import { loadCharacters } from '../../app/store/character/thunks';

function FilterBlock() {
  const dispatch = useDispatch();

  const characterGroups = useSelector(selectCharacterGroups);
  const characterTags = useSelector(selectCharacterTags);

  const filters = useSelector(selectCharacterFilters);

  const applyFilters = useCallback((newFilters) => {
    dispatch(loadCharacters(newFilters));
  }, [dispatch]);

  return (
    <CharacterFilters
      groups={characterGroups}
      tags={characterTags}
      value={filters}
      onFilter={applyFilters}
    />
  );
}

export default FilterBlock;
