import React, { useEffect, useMemo } from 'react';
import {
    Col,
    Container,
    Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';

// Components
import MainBar from '../../components/MainBar';
import Campaign from '../../components/Campaign';

// Containers

// Styles
import './Campaign.css';

// Selectors
import { selectCampaign } from '../../app/store/campaign/selectors';

// Thunks
import { loadCampaign } from '../../app/store/campaign/thunks';
import Loader from './Loader';

const campaignId = 'default-campaign';

function Game() {
  const dispatch = useDispatch();

  const campaign = useSelector(selectCampaign);

  const backgroundImage = useMemo(
    () => (campaign ? `url(${campaign.background})` : null),
    [campaign],
  );

  useEffect(
    () => {
      dispatch(loadCampaign(campaignId));
    },
    [dispatch],
  );

  return (
    <div
      className="App"
      style={{
        backgroundImage,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <MainBar />

      {
        campaign
          ? (
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
          )
          : (<Loader />)
      }
    </div>
  );
};

export default Game;
