import React, { useCallback, useMemo, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CharacterFilters from '../../components/CharacterFilters';

const characterGroups = [
  {
    id: 'pc',
    title: 'Player Characters',
  },
  {
    id: 'npc',
    title: 'Non-Player Characters',
  },
];

const characterTags = [
  {
    id: 'tag-1',
    title: 'Tag 1',
  },
  {
    id: 'tag-2',
    title: 'Tag 2',
  },
];

function Characters() {
  const [groups, setGroups] = useState(['pc', 'npc']);
  const [tags, setTags] = useState([]);

  const [characters, setCharacters] = useState([
    {
      id: '1',
      groupId: 'pc',
      name: 'Boris Vasilijev',
      image: 'https://db4sgowjqfwig.cloudfront.net/images/3777054/Boris_Vasilijev_square_thumb.jpeg',
      description: 'Russian psychiatrist and noble in exile. Pompous and jovial.',
      url: '/characters/1',
      tags: ['tag-1'],
    },
    {
      id: '2',
      groupId: 'npc',
      name: 'Boris Vasilijev',
      image: 'https://db4sgowjqfwig.cloudfront.net/images/3777054/Boris_Vasilijev_square_thumb.jpeg',
      description: 'Russian psychiatrist and noble in exile. Pompous and jovial.',
      url: '/characters/2',
      tags: [],
    },
  ]);

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

  const applyFilters = useCallback((newFilters) => {
    setTags(newFilters.tags || []);
    setGroups(newFilters.groups || []);
  }, []);

  const applyTag = useCallback((tagId) => () => {
    setTags([tagId]);
  }, []);

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
    setCharacters([
      ...characters,
      character,
    ])
  }, [
    characters,
  ]);

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
                              <>
                                <Button
                                  key={tag}
                                  variant="link"
                                  onClick={applyTag(tag)}
                                >
                                  {tag}
                                </Button>
                                { (tagId < character.tags.length - 1) && ', ' }
                              </>
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
