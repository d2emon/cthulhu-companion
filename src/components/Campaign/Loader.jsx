import React from 'react';
import {
    Container,
} from 'react-bootstrap';
import ToBeDone from '../ToBeDone';

function Loader() {
  return (
    <Container>
      <h1>Loading...</h1>

      <ToBeDone />
    </Container>
  );
};

export default Loader;
