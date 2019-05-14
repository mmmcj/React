import React from 'react';
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
        <React.Fragment>
            <ul className="cbp_tmtimeline">
            {this.state.flights.map(flight => (
                <li key={flight.id}>
                    <time className="cbp_tmtime">
                        <span>{flight.price},- DKK</span>
                    </time>
                    <div className="cbp_tmlabel">
                        <h4>{flight.airline}</h4>
                        <p>
														DeparturnDate: {flight.departureDate} - departureTime: {flight.departureTime}
														
                        </p>
												<h4>{flight.startDestenation}</h4>
                    </div>
                </li>
            ))}
            </ul>
        </React.Fragment>
	  )
	}
  
  }

  export default Flights;