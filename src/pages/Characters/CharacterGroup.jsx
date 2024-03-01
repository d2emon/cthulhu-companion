import React, {
  useCallback,
} from 'react';
import {
  Button,
  Card,
  Col,
  Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
  
function CharacterGroup({
  characters,
  groupId,
  title,
  onAddCharacter,
  onApplyTag,
}) {
  const applyTag = useCallback((tagId) => () => {
    if (onApplyTag) {
        onApplyTag(tagId);
    }
  }, [onApplyTag]);
  
  const addCharacter = useCallback(() => {
    if (onAddCharacter) {
      const character = {
        groupId,
        name: 'Boris Vasilijev',
        image: 'https://db4sgowjqfwig.cloudfront.net/images/3777054/Boris_Vasilijev_square_thumb.jpeg',
        description: 'Russian psychiatrist and noble in exile. Pompous and jovial.',
        tags: [],
      };
      onAddCharacter(character);
    }
  }, [
    groupId,
    onAddCharacter,
  ]);
  
  return (
    <Card
      className="mb-2"
    >
      <Card.Header>
        <Card.Title>{ title }</Card.Title>
      </Card.Header>
  
      <Card.Body>
        <Row>
          <Col md={6}>
            <div className="d-grid">
              <Button
                size="lg"
                variant="primary"
                onClick={addCharacter}
              >
                Add
              </Button>
            </div>
          </Col>

          { characters && characters.map((character) => (
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
  );
}
  
export default CharacterGroup;
  