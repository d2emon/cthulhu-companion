import React from 'react';
import './ToBeDone.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Applications() {
  return (
    <Card>
      <Container>
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
      </Container>
    </Card>
  );
}

export default Applications;
