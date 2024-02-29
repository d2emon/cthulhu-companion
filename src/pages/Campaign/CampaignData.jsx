import React from 'react';
import {
    Col,
    Container,
    Row,
} from 'react-bootstrap';
import { Outlet } from 'react-router';

// Components
import Campaign from '../../components/Campaign';

function CampaignData(props) {
  const {
    campaign,
  } = props;

  if (!campaign) {
    return <Campaign.Loader />;
  }

  return (
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
  );
};

export default CampaignData;
