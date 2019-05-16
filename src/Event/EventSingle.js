import React from 'react';

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
}

export default EventSingle;

