import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CharacterFilters from '../../components/CharacterFilters';
import CharacterMaster from '../../components/CharacterMaster';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadCharacterGroups,
  loadCharacters,
  newCharacter,
} from '../../app/store/character/thunks';
import {
  selectCharacterGroups,
  selectCharacterTags,
  selectCharacters,
  selectSelectedCharacterGroups,
  selectSelectedCharacterTags,
} from '../../app/store/character/selectors';
import { setSelectedGroups, setSelectedTags } from '../../app/store/character/slice';

function Characters() {
  const dispatch = useDispatch();

  const [isCharacterMaster, setIsCharacterMaster] = useState(false);

  const characters = useSelector(selectCharacters);
  const characterGroups = useSelector(selectCharacterGroups);
  const characterTags = useSelector(selectCharacterTags);

  const groups = useSelector(selectSelectedCharacterGroups);
  const tags = useSelector(selectSelectedCharacterTags);

  const filters = useMemo(() => ({
    groups,
    tags,
  }), [
    groups,
    tags,
  ]);

  const filtered = useMemo(() => characters.filter((character) => (
    character
      && (groups.indexOf(character.groupId) >= 0)
      && ((tags.length === 0) || (character.tags.some(tag => tags.indexOf(tag) >= 0)))
  )), [
    characters,
    groups,
    tags,
  ]);

  const applyTag = useCallback((tagId) => () => {
    dispatch(setSelectedTags([tagId]));
  }, [dispatch]);

  const applyFilters = useCallback((newFilters) => {
    dispatch(setSelectedTags(newFilters.tags || []));
    dispatch(setSelectedGroups(newFilters.groups || []));
  }, [dispatch]);

  const addCharacter = useCallback((groupId) => () => {
    const character = {
      id: `${characters.length + 1}`,
      groupId,
      name: 'Boris Vasilijev',
      image: 'https://db4sgowjqfwig.cloudfront.net/images/3777054/Boris_Vasilijev_square_thumb.jpeg',
      description: 'Russian psychiatrist and noble in exile. Pompous and jovial.',
      url: `/characters/${characters.length + 1}`,
      tags: [],
    };
    setIsCharacterMaster(true);
    dispatch(newCharacter(character));
  }, [
    dispatch,
    characters,
  ]);

  useEffect(() => {
    dispatch(loadCharacterGroups);
    dispatch(loadCharacters);
  }, [
    dispatch,
  ]);

  if (isCharacterMaster) {
    return <CharacterMaster />;
  }

  return (
    <Container>
      <CharacterFilters
        groups={characterGroups}
        tags={characterTags}
        value={filters}
        onFilter={applyFilters}
      />

      { characterGroups.map((group) => (groups.indexOf(group.id) >= 0) && (
        <Card
          key={group.id}
          className="mb-2"
        >
          <Card.Header>
            <Card.Title>{ group.title }</Card.Title>
          </Card.Header>

          <Card.Body>
            <Row>
              <Col md={6}>
                <div className="d-grid">
                  <Button
                    size="lg"
                    variant="primary"
                    onClick={addCharacter(group.id)}
                  >
                    Add
                  </Button>
                </div>
              </Col>
              { filtered.map((character) => (character.groupId === group.id) && (
                <Col
                  key={character.id}
                  md={6}
                >
                  <Card className="my-1">
                    <Row>
                      <Col sm={3}>
                        <Card.Img
                          src={character.image}
                        />
                      </Col>
                      <Col>
                        <Card.Title>
                          <Link
                            to={character.url}
                          >
                            {character.name}
                          </Link>
                        </Card.Title>
                        <Card.Body>
                          <div>
                            { character.tags.map((tag, tagId) => (
                              <span key={tagId}>
                                <Button
                                  key={tagId}
                                  variant="link"
                                  onClick={applyTag(tag)}
                                >
                                  {tag}
                                </Button>
                                { (tagId < character.tags.length - 1) && ', ' }
                              </span>
                            )) }
                          </div>
                          <div>{character.description}</div>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              )) }
            </Row>
          </Card.Body>
        </Card>
      )) }
    </Container>
  );
}

export default Characters;
