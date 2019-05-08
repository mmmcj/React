import React from 'react'
import HEREMap from 'here-maps-react'

class Maps extends React.Component {
    render() {
      return (
        <HEREMap
          appId="react_exam"
          appCode="react_exam"
          center={{ lat: -12.0464, lng: -77.0428 }}
          zoom={12}
        />
      )
    }
  }