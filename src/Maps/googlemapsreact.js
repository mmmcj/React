import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    constructor(props) {
        super(props)
        
    }

    
    static defaultProps = {
        center: {
            lat: 20.25,
            lng: 20.25
        },
        zoom: 11
    };

    render() {
        return (
            <GoogleMapReact

                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <AnyReactComponent
                    lat={20.25}
                    lng={20.25}
                    text="My Marker"
                />
            </GoogleMapReact>
        );
    }
}


export default SimpleMap;