import React from 'react';
<<<<<<< HEAD
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
=======

import Geolocated from '../Maps/Maps';
import Facade from '../Datafacade/Datafacade';
import Flights from '../FlightInfo/FlightTableView';

class EventSingle extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			singleEvent: {},
			lat: '',
			long: ''
		};
	}


	componentWillMount = async () => {
		const id = this.props.match.params.id;
		const singleEvent = await Facade.getEventById(id);
		this.setState({ singleEvent })
	}


	setCoords = (lati, longi) => {
		this.setState({ lat: lati })
		this.setState({ long: longi })

	}

	render() {
		return !this.state.singleEvent.city ? (<React.Fragment>
			<div className="bg_color_1 mm">
				<div className="container event-content" >
					<h1>This event dosn't Exist</h1>
				</div>
			</div>
		</React.Fragment>)
			: !this.state.lat ? (
				<React.Fragment>
					<div className="bg_color_1 mm">
						<div className="container event-content" >
							<div className="row" >
								<div className="col-lg-7">
									<section id="description">

										{/* Google map ligger her. */}
										<Geolocated event={this.state.singleEvent} setCoords={this.setCoords} />

									</section>
								</div>
							</div>
						</div>
					</div>
				</React.Fragment>)
				: (
					<React.Fragment>
						<div className="bg_color_1 mm">
							<div className="container event-content" >
								<div className="row" >
									<div className="col-lg-7">
										<section id="description">

											<h2>{this.state.singleEvent.title}</h2>
											<p>{this.state.singleEvent.longDesc}</p>

											{/* Google map ligger her. */}
											<Geolocated event={this.state.singleEvent} setCoords={this.setCoords} />

											{/* Alle fly rejser ligger her */}
											<Flights lat={this.state.lat} long={this.state.long} event={this.state.singleEvent} />


										</section>
									</div>

									<aside className="col-lg-5" id="aside">
										<div className="purchase-box">
											<div className="box_detail booking">
												<div className="price">
													<img src={this.state.singleEvent.defaultImg} className="img-fluid" alt={this.state.singleEvent.title} width="800" height="533" />
												</div>
												<div className="price">
													<span>{this.state.singleEvent.price}
														<small>kr ,- DKK</small>
													</span>
													<div className="score">
														<span>Start: {this.state.singleEvent.startDate}
															<em>Slut: {this.state.singleEvent.endDate}</em>
														</span>
													</div>
												</div>
											</div>
										</div>

									</aside>
								</div>
							</div>
						</div>
					</React.Fragment>
				);
	}
>>>>>>> html
}

export default EventSingle;

