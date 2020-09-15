import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"

const Maps = (props) => {
  return (
    <GoogleMap
       defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
     />
  )
}

export default withScriptjs (
  withGoogleMap(
    Maps
  )
)
