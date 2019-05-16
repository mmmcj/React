import React from 'react'
import { geolocated, geoPropTypes } from 'react-geolocated';
import GoogleMapReact from 'google-map-react';
<<<<<<< HEAD
import Airlogo from '../Event/airportlogo.png';
import Arrow from '@material-ui/icons/Place';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
=======
import Arrow from '@material-ui/icons/Place';

//const AnyReactComponent = ({ text }) => <div>{text}</div>;
>>>>>>> html


class Maps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
<<<<<<< HEAD
      coords: [],
=======
      coords: []
>>>>>>> html
    };
  }

  static defaultProps = {
    center: {
      lat: 50.5,
      lng: 50.5
    },
    zoom: 11
  };

<<<<<<< HEAD
=======
 componentWillReceiveProps = (nextProps) => {
   if(nextProps.coords !== this.props.coords){
     this.props.setCoords(nextProps.coords.latitude, nextProps.coords.longitude)
   }
 }

>>>>>>> html
  render() {
    return (
      !this.props.isGeolocationAvailable ? <div>Your browser does not support Geolocation</div>
        : !this.props.isGeolocationEnabled ? <div>Geolocation is not enabled</div>
          : this.props.coords ?
<<<<<<< HEAD
            <div style={{ height: '100vh', width: '100%' }}>
=======
            <div style={{ height: '60vh', width: '100%' }}>
>>>>>>> html
              <GoogleMapReact
                defaultCenter={{ lat: this.props.event.city.lattitude, lng: this.props.event.city.longitude }}
                defaultZoom={this.props.zoom}>
                <img src={this.props.event.defaultImg}
                  height="30rem"
                  width="30rem"
                  alt="map marker"
                  lat={this.props.event.city.lattitude}
                  lng={this.props.event.city.longitude}
                />
                <Arrow
                  lat={this.props.coords.latitude}
                  lng={this.props.coords.longitude}
                />         
<<<<<<< HEAD

              </GoogleMapReact>
=======
                

              </GoogleMapReact>
              
>>>>>>> html
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