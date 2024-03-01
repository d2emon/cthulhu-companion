import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  Container,
} from 'react-bootstrap';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import CharacterMaster from '../../components/CharacterMaster';
import {
  loadCharacterGroups,
  loadCharacters,
  newCharacter,
} from '../../app/store/character/thunks';
import {
  selectCharacterFilters,
  selectCharacterGroups,
  selectCharactersByGroup,
} from '../../app/store/character/selectors';
import FilterBlock from './FilterBlock';
import CharacterGroup from './CharacterGroup';

function Characters() {
  const dispatch = useDispatch();

  const [isCharacterMaster, setIsCharacterMaster] = useState(false);

  const characters = useSelector(selectCharactersByGroup);
  const characterGroups = useSelector(selectCharacterGroups);
  const filters = useSelector(selectCharacterFilters);

  const filteredGroups = useMemo(
    () => characterGroups.filter((group) => (filters?.groups.indexOf(group.id) >= 0)),
    [
      characterGroups,
      filters,
   ],
  );

  const applyTag = useCallback((tagId) => {
    dispatch(loadCharacters({
      ...filters,
      tags: [tagId],
    }));
  }, [
    dispatch,
    filters,
  ]);

  const addCharacter = useCallback((character) => {
    setIsCharacterMaster(true);
    dispatch(newCharacter(character));
  }, [
    dispatch,
  ]);

  useEffect(() => {
    dispatch(loadCharacterGroups);
    dispatch(loadCharacters());
  }, [
    dispatch,
  ]);

  if (isCharacterMaster) {
    return <CharacterMaster />;
  }

  return (
    <Container>
      <FilterBlock />

      { filteredGroups.map((group) => (
        <CharacterGroup
          key={group.id}
          groupId={group.id}
          title={group.title}
          characters={characters[group.id]}
          onAddCharacter={addCharacter}
          onApplyTag={applyTag}
        />
      )) }
    </Container>
  );
}

export default Characters;
