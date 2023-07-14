import React, { useCallback, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Counter } from '../../features/counter/Counter';
import RollModal from '../../features/savageWorlds/modals/RollModal';
import Roll from '../../features/savageWorlds/Roll';
import logo from './logo.svg';
import './ToBeDone.css';

function ToBeDone() {
  const [showRoll, setShowRoll] = useState(false);

  const handleShowRoll = useCallback(
    () => {
      setShowRoll(true);
    },
    [],
  );

  const handleHideRoll = useCallback(
    () => {
      setShowRoll(false);
    },
    [],
  );

    return (
        <Container>
          <RollModal
            show={showRoll}
            onHide={handleHideRoll}
          />

          <Button
            variant="primary"
            onClick={handleShowRoll}
          >
            Roll
          </Button>

          <hr />

          <Row>
            <Col md={3}>
                <Link to="/bestiary">5e Bestiary</Link>
            </Col>
            <Col md={3}>5e Companion App</Col>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>Бестиарий D&D</Col>
          </Row>
          <Row>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>Генератор случайных...</Col>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>&nbsp;</Col>
          </Row>
          <Row>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>Adventuresmith</Col>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>&nbsp;</Col>
          </Row>
          <Row>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>campaign_manager</Col>
            <Col md={3}>Character Sheet for any RPG</Col>
            <Col md={3}>&nbsp;</Col>
          </Row>
          <Row>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>Complete Reference</Col>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>&nbsp;</Col>
          </Row>
          <Row>
            <Col md={3}>Cthulhu's Creations</Col>
            <Col md={3}>Cyberpunk Red Companion</Col>
            <Col md={3}>D&D Beyond</Col>
            <Col md={3}>&nbsp;</Col>
          </Row>
          <Row>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>Dungeon Map Generator</Col>
          </Row>
          <Row>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>Game Master 5</Col>
            <Col md={3}>Game Master Journal</Col>
            <Col md={3}>&nbsp;</Col>
          </Row>
          <Row>
            <Col md={3}>Gurps CS</Col>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>Haversack</Col>
          </Row>
          <Row>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>Pocket Campaigns</Col>
          </Row>
          <Row>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>Pro DnD</Col>
            <Col md={3}>&nbsp;</Col>
          </Row>
          <Row>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>Roll 20</Col>
          </Row>
          <Row>
            <Col md={3}>RPG Campaign Manager</Col>
            <Col md={3}>RPG Companion</Col>
            <Col md={3}>RPG Master Sound Mixer</Col>
            <Col md={3}>RPG Notes</Col>
          </Row>
          <Row>
            <Col md={3}>RPG Simple Dice</Col>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>&nbsp;</Col>
          </Row>
          <Row>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>Story Plotter</Col>
          </Row>
          <Row>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>&nbsp;</Col>
            <Col md={3}>Titan Companion</Col>
          </Row>

        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Counter />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <span>
                <span>Learn </span>
                <a
                    className="App-link"
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    React
                </a>
                <span>, </span>
                <a
                    className="App-link"
                    href="https://redux.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Redux
                </a>
                <span>, </span>
                <a
                    className="App-link"
                    href="https://redux-toolkit.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Redux Toolkit
                </a>
                ,<span> and </span>
                <a
                    className="App-link"
                    href="https://react-redux.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    React Redux
                </a>
            </span>
        </header>
        </Container>
    );
}

export default ToBeDone;
