import React from 'react';
import { Card, Button } from 'react-bootstrap'

function EventSingle({ match, events }) {
  const id = match.params.id;

  const singleEvent = events.filter(e => e.id == id)[0];

  return (
    <React.Fragment>
      <Card>
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Text>
            <h4>{singleEvent.title}</h4>
            <h5>{singleEvent.city.city} - {singleEvent.country.country}</h5>
            <h6>{singleEvent.startDate} - {singleEvent.endDate}</h6>
            <h6>Price: {singleEvent.price} DKK</h6>
            <p>Description: SomeDescription</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default EventSingle;