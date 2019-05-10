import React from 'react'
import { geolocated, geoPropTypes } from 'react-geolocated';
import GoogleMapReact from 'google-map-react';
import Marker from '../Event/Marker';
import Facade from '../Datafacade/Datafacade'

const AnyReactComponent = ({ text }) => <div>{text}</div>;


class Maps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coords: [],
    };
  }

  static defaultProps = {
    center: {
      lat: 50.5,
      lng: 50.5
    },
    zoom: 11
  };


  componentDidMount = async (PropParams) => {
    const events = await Facade.getAirPortAndEventByDistance(PropParams);
    this.setState({ events })
    this.props.setEvents(events)
    navigator.geolocation.getCurrentPosition(ourFunction)
  }




  render() {
    return (
      !this.props.isGeolocationAvailable ? <div>Your browser does not support Geolocation</div>
        : !this.props.isGeolocationEnabled ? <div>Geolocation is not enabled</div>
          : this.props.coords ?
            <div style={{ height: '100vh', width: '100%' }}>
              latitude: {this.props.coords.latitude}
              longitude: {this.props.coords.longitude}
              <GoogleMapReact
                defaultCenter={{ lat: this.props.event.city.lattitude, lng: this.props.event.city.longitude }}
                defaultZoom={this.props.zoom}
              >
                <img src={this.props.event.defaultImg}
                    height="30rem"
                    width="20rem"
                    alt="map marker"
                />
              </GoogleMapReact>
            </div>
            : <div>Getting the location data&hellip; </div>
    );
  }
}

Maps.propTypes = { ...Maps.propTypes, ...geoPropTypes };

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Maps);