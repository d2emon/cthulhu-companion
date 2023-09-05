import React from 'react';
import { Container } from 'react-bootstrap';
import PartyMembers from './PartyMembers';
import QuickStats from './QuickStats';
import Stream from './Stream';

function Data({
  comments,
  fans,
  gameSystem,
  isLookingForPlayers,
  lastUpdate,
  master,
  players,
  status,
  stream,
}) {
  return (
    <Container>
      <PartyMembers
        gm={master}
        players={players}
      />

      <QuickStats
        comments={comments}
        fans={fans}
        gameSystem={gameSystem}
        isLookingForPlayers={isLookingForPlayers}
        lastUpdate={lastUpdate}
        status={status}
      />

      <Stream
        stream={stream}
      />
    </Container>
  );
}

export default Data;
