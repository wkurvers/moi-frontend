import React, {Component} from "react";
import { Map, Marker, Popup, TileLayer, Circle } from 'react-leaflet'

class MapTwo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
      radius: 3000
    }
  }

  render() {
    const position = [this.props.lat, this.props.lng];
    return (
        <div className={"leaflet-container"}>
          <Map center={position} zoom={this.state.zoom}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Circle center={position} radius={this.props.radius}>
              <Marker position={position} />
            </Circle>
          </Map>
        </div>
    );
  }
}


export default MapTwo