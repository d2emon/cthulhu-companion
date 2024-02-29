import React from 'react';

// Components
import { Card } from 'react-bootstrap';
import ToBeDone from '../ToBeDone';

function Description(props) {
  const { description } = props;

  return (
    <div>
      <Card>
        {description && (
          <Card.Body
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </Card>

      <hr />

      <ToBeDone />
    </div>
  );
}

export default Description;
