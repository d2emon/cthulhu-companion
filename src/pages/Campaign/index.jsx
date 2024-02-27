import React from 'react';
import {
    Col,
    Container,
    Row,
} from 'react-bootstrap';
import { Outlet } from 'react-router';

// Components
import MainBar from '../../components/MainBar';
import Campaign from '../../components/Campaign';

// Containers

// Data
import campaigns from '../../data/campaigns';

// Styles
import './Campaign.css';

const campaign = campaigns[0];

function Game() {
  return (
    <div
        className="App"
        style={{
            backgroundImage: `url(${campaign.background})`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}
    >
        <MainBar />

        <Container>
            <Campaign.Header
                title={campaign.title}
                banner={campaign.banner}
            />

            <Row>
                <Col sm={2}>
                    <Campaign.Nav />
                </Col>
                <Col>
                    <Outlet />
                </Col>
            </Row>
        </Container>
     
    </div>
  );
}

export default Game;
