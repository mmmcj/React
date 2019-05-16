import React from 'react'
import { geolocated, geoPropTypes } from 'react-geolocated';
import GoogleMapReact from 'google-map-react';
import Arrow from '@material-ui/icons/Place';

//const AnyReactComponent = ({ text }) => <div>{text}</div>;


class Maps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coords: []
    };
  }

  static defaultProps = {
    center: {
      lat: 50.5,
      lng: 50.5
    },
    zoom: 11
  };

 componentWillReceiveProps = (nextProps) => {
   if(nextProps.coords !== this.props.coords){
     this.props.setCoords(nextProps.coords.latitude, nextProps.coords.longitude)
   }
 }

  render() {
    return (
      !this.props.isGeolocationAvailable ? <div>Your browser does not support Geolocation</div>
        : !this.props.isGeolocationEnabled ? <div>Geolocation is not enabled</div>
          : this.props.coords ?
            <div style={{ height: '60vh', width: '100%' }}>
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