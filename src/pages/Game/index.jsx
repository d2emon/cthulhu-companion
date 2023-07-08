import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Campaign from '../../components/Campaign';
import ToBeDone from '../../components/ToBeDone';
import { campaign } from '../Campaign/data';

function Game() {
  return (
    <Row>
      <Col>
        <Campaign>
          <div
            dangerouslySetInnerHTML={{ __html: campaign.description }}
          />
          <hr />
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
