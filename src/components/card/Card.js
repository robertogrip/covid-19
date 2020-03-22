import React from 'react';
import { Card } from 'react-bootstrap';

const card = props => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.value}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.title}</Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default card;
