import React from 'react'
import HEREMap from 'here-maps-react'
import { geolocated, geoPropTypes } from 'react-geolocated';

class Maps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      maps: [],
    };
  }
  render() {
    return !this.props.isGeolocationAvailable ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? <table>
            <tbody>

              <HEREMap
                appId="wFS81lgBZbllqWstFRLV"
                appCode="NmSaoJI-U3P6PQq9Tinhvw"
                center={{lat: -12.0464, lng: -77.0428 }}
                zoom={12}
              />


              <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
              <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
            </tbody>
          </table>
          : <div>Getting the location data&hellip; </div>;
  }
}



Maps.propTypes = { ...Maps.propTypes, ...geoPropTypes };

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Maps);