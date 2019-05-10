import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import Geolocated from '../Maps/Maps';
import Facade from '../Datafacade/Datafacade';


class Flights extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flights: [],
    };
  }


  componentDidMount = async () => {
    const flights = await Facade.getAirPortAndEventByDistance(
      this.props.event.startDate,
      this.props.lat,
      this.props.long,
      this.props.event.city.lattitude,
      this.props.event.city.longitude
    );

    this.setState({ flights })
  }



  render() {
    return (
      <div>
        <table align='center' >
          <thead>
            <tr align='center'>

              <th>flight|</th>
              <th>price|</th>
              <th>departureTime|</th>
              <th>departureDate|</th>
              <th>airline</th>
            </tr>
          </thead>
          <tbody>

            {this.state.flights.map(flight => (
              <tr align='center'>
                <td>{flight.id}</td>
                <td>{flight.price}</td>
                <td>{flight.departureDate}</td>
                <td>{flight.departureTime}</td>
                <td>{flight.airline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }


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

                </Col>
                <Col md={4}>
                  <Image src={singleEvent.defaultImg} />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Geolocated event={singleEvent} />
                </Col>
                <Col md={3}>
                  <Flights lat={singleEvent.city.lattitude} long={singleEvent.city.longitude} event={singleEvent} />
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