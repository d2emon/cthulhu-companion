import React from 'react';
import { useSelector } from 'react-redux';

// Components
import { Col, Row } from 'react-bootstrap';
import Campaign from '../../components/Campaign';

// Containers

// Data

// Styles

// Selectors
import {
  selectCampaign,
  selectGameSystem,
  selectMaster,
  selectPlayers,
} from '../../app/store/campaign/selectors';

// Thunks

function Game() {
  const campaign = useSelector(selectCampaign);
  const gameSystem = useSelector(selectGameSystem);
  const master = useSelector(selectMaster);
  const players = useSelector(selectPlayers);

  if (!campaign) {
    return <Campaign.Loader />;
  }

  return (
    <Row>
      <Col>
        <Campaign.Description
          description={campaign.description}
        />
      </Col>

      <Col lg={4}>
        <Campaign.CampaignData
          comments={campaign.comments}
          fans={campaign.fans}
          gameSystem={gameSystem}
          isLookingForPlayers={campaign.isLookingForPlayers}
          lastUpdate={campaign.lastUpdate}
          master={master}
          players={players}
          status={campaign.status}
          stream={campaign.stream}
        />
      </Col>
    </Row>
  );
}

export default Game;
