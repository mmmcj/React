import React from 'react';
import airlogo from './airportlogo.png';

class Marker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src={airlogo}
                    height="30rem"
                    width="20rem"
                    alt="map marker"
                />
            </div>
        )
    }
}

export default Marker;