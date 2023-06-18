import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Campaign from '../../components/Campaign';
import ToBeDone from '../../components/ToBeDone';

function Game() {
  return (
    <Row>
      <Col>
        <Campaign>
          <ToBeDone />
        </Campaign>
      </Col>
      <Col lg={4}>
        <Campaign.CampaignData />
      </Col>
    </Row>
  );
}

export default Game;
