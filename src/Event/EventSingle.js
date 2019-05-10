import React from 'react';
import { Card, Container, Row, Col, Image} from 'react-bootstrap';
import Geolocated from '../Maps/Maps';
import Facade from '../Datafacade/Datafacade';



/*abc*/


navigator.geolocation.getCurrentPosition(componentDidMount)

componentDidMount = async (pos) => {
  var crd = pos.coords;
  const events = await Facade.getAirPortAndEventByDistance(
    this.props.event.startDate,
    crd.lattitude,
    crd.longitude,
    this.props.event.city.lattitude,
    this.props.event.city.longitude
    );
  this.setState({ events })
  this.props.setEvents(events)
}




function EventSingle({ match, events }) {
  const id = match.params.id;
  
  const singleEvent = events.filter(e => e.id == id)[0];

  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <Card.Text>
            <Container>
              <Row>
                <Col md={8}>
                  <h4>{singleEvent.title}</h4>
                  <h5>{singleEvent.city.city} - {singleEvent.country.country}</h5>
                  <h6>{singleEvent.startDate} - {singleEvent.endDate}</h6>
                  <h6>Price: {singleEvent.price} DKK</h6>
                  <h6>Short Description</h6>
                  <p>{singleEvent.shortDesc}</p>
                  <h6>Long Description</h6>
                  <p>{singleEvent.longDesc}</p>
                  <h6>Location:</h6>
                  <Geolocated event={singleEvent}/>

                </Col>
                <Col md={4}>
                  <Image src={singleEvent.defaultImg} />
                </Col>
              </Row>
            </Container>;
          </Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default EventSingle;