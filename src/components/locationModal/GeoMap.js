import React, {Component} from "react";
import {Circle, Map, Marker, TileLayer} from 'react-leaflet'
import GeoSearch from "./GeoSearch"
import {Slider} from "antd";

class GeoMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: ["53.2402311", "6.5312574"],
      coords: {
        latitude: "53.2402311",
        longitude: "6.5312574",
      },
      distance: 1,
      zoom: 14,
      radius: 500
    };
    this.map = React.createRef();
    this.circle = React.createRef();
  }

  componentDidMount() {

    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(this.setPosition, this.onError, options)
  }

  setPosition = (position) => {
    this.setState({
      position: [position.coords.latitude, position.coords.longitude]
    })
  };

  onError(err) {
    console.warn(err);
  }

  updateZoom = () => {
    this.map.current.leafletElement.fitBounds(this.circle.current.leafletElement.getBounds());

    this.setState({
      zoom: this.map.current.leafletElement.getZoom()
    })
  };

  updateLocation = (e) => {
    this.map.current.leafletElement.fitBounds(this.circle.current.leafletElement.getBounds());
    this.setState({position: e.latlng});
  };

  updateDistance = distance => {
    this.setState({
      distance: distance,
      radius: distance * 500
    });
    this.updateZoom()
  }

  render() {
    const {position} = this.state;
    return (
        <div>
          <div className={"map-wrapper"}>
            <Map
                ref={this.map}
                center={position}
                zoom={this.state.zoom}
                maxZoom={14}
                onClick={this.updateLocation}
                doubleClickZoom={false}
                touchZoom={false}
                scrollWheelZoom={true}
            >
              <GeoSearch/>
              <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              <Circle ref={this.circle} center={position} radius={this.state.radius}>
                <Marker position={position}/>
              </Circle>
            </Map>
          </div>

          <div className={"location-modal-slider-container"}>
            <div>
              Afstand
            </div>
            <div>
              {this.state.distance + " km"}
            </div>

            <Slider min={1} max={200} onChange={this.updateDistance} name={"distance"} value={this.state.distance}>

            </Slider>
          </div>
        </div>
    );
  }
}


export default GeoMap;