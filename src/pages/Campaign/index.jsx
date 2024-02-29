import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import MainBar from '../../components/MainBar';

// Containers

// Styles
import './Campaign.css';

// Selectors
import {
  selectCampaign,
  selectCampaignIsReady,
} from '../../app/store/campaign/selectors';

// Thunks
import { loadDefaultCampaign } from '../../app/store/campaign/thunks';
import CampaignData from './CampaignData';

function Game() {
  const dispatch = useDispatch();

  const isReady = useSelector(selectCampaignIsReady);
  const campaign = useSelector(selectCampaign);

  const backgroundImage = useMemo(
    () => (campaign ? `url(${campaign.background})` : null),
    [campaign],
  );

  useEffect(
    () => {
      if (!isReady) {
        dispatch(loadDefaultCampaign);
      }
    },
    [
      dispatch,
      isReady,
    ],
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

      <CampaignData
        campaign={campaign}
      />
    </div>
  );
};

export default Game;
