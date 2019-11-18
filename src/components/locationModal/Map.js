/* global google */
import React, {Fragment} from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  Circle
} from "react-google-maps";

const Map = props => {
  console.log(props)
  return (
      <GoogleMap
          defaultZoom={props.zoom}
          defaultCenter={props.center}
      >
        <Marker
            position={{
              lat: parseFloat(props.coords.latitude),
              lng: parseFloat(props.coords.longitude)
            }}
        />
        {props.coords.circle && <Circle
            defaultCenter={{
              lat: parseFloat(props.coords.latitude),
              lng: parseFloat(props.coords.longitude)
            }}
            radius={props.coords.circle.radius}
            options={props.coords.circle.options}
        />}
      </GoogleMap>
  );
}

export default withScriptjs(withGoogleMap(Map));
