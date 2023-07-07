import React, { useCallback, useEffect, useState } from 'react';
import { Card, Col, Container, Nav, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getMonster, selectMonster } from '../bestiarySlice';
import { useParams } from 'react-router-dom';
import EmptyItem from '../components/EmptyItem';

function Details() {
  const dispatch = useDispatch();

  const { monsterId } = useParams();

  const monster = useSelector(selectMonster);

  const [selectedTab, setSelectedTab] = useState('#stats');

  const handleSelectTab = useCallback(
    (e) => {
      console.log(e);
      setSelectedTab(e);
    },
    [],
  );

  useEffect(
    () => {
      dispatch(getMonster({ id: monsterId }));
    },
    [
      dispatch,
      monsterId,
    ],
  );

  if (!monster) {
    return <EmptyItem />;
  }

  return (
    <Card>
      <Card.Header>
        <Nav
          variant="tabs"
          defaultActiveKey="#stats"
          onSelect={handleSelectTab}
        >
          <Nav.Item>
            <Nav.Link href="#stats">Свойства</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#lore">Описание</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>

      { (selectedTab === '#lore')
        ? (
          <Card.Body>
            { monster.description }
          </Card.Body>
        )
        : (
          <Card.Body>
            <Container>
              <Card.Title>{ monster.title }</Card.Title>
              <div>{ monster.type }, { monster.alignment }</div>
            </Container>

            <hr />

            <Container>
              <div><strong>Armor Class:</strong> { monster.ac }</div>
              <div><strong>Hit Points:</strong> { monster.hp }</div>
              <div><strong>Speed:</strong> { monster.speed }</div>
            </Container>

            <hr />

            <Container>
              {monster.stats && (
                <Row>
                  {Object.keys(monster.stats).map((statName) => (
                    <Col key={statName}>
                      <Card.Title>
                        {statName}
                      </Card.Title>
                      <div>
                        { monster.stats[statName] }
                      </div>
                    </Col>
                  ))}
                </Row>
              )}
            </Container>

            <hr />

            <Container>
              <div><strong>Saving throws:</strong> { monster.savingThrows }</div>
              <div><strong>Skills:</strong> { monster.skills }</div>
              <div><strong>Senses:</strong> { monster.senses }</div>
              <div><strong>Languages:</strong> { monster.languages }</div>
              <div><strong>Challenge:</strong> { monster.challenge }</div>
            </Container>

            <hr />

            <Container>
              { monster.special && monster.special.map((item) => (
                <p
                  key={item.title}
                >
                  <strong>{ item.title }</strong>
                  {' '}
                  { item.description }
                </p>
              )) }
            </Container>

            <hr />

            <Container>
              <Card.Subtitle className="py-2">Actions</Card.Subtitle>
              { monster.actions && monster.actions.map((item) => (
                <p
                  key={item.title}
                >
                  <strong>{ item.title }</strong>
                  {' '}
                  { item.description }
                </p>
              )) }
            </Container>

            <hr />

            <Container>
              <Card.Subtitle className="py-2">Legendary Actions</Card.Subtitle>
              { monster.legendaryActions && monster.legendaryActions.map((item) => (
                <p
                  key={item.title}
                >
                  <strong>{ item.title }</strong>
                  {' '}
                  { item.description }
                </p>
              )) }
            </Container>
          </Card.Body>
        )
      }
    </Card>
  );
}

export default Details;
