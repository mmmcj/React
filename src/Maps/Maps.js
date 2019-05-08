import React from 'react';
import {geolocated, geoPropTypes} from 'react-geolocated';

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