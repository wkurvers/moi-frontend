import React, {Component} from "react";
import {Circle, Map, Marker, TileLayer} from 'react-leaflet'
import GeoSearch from "./GeoSearch"
import {Slider} from "antd";
import {connect} from 'react-redux';
import {storeLocation} from "../../actions/profileCreationActions";

class GeoMap extends Component {
  constructor(props) {
    super(props);
    let startPosition = ["53.2402311", "6.5312574"]
    if(this.props.position !== undefined) {
      startPosition = this.props.startPosition
    }
    this.state = {
      position: startPosition,
      coords: {
        latitude: startPosition[0],
        longitude: startPosition[1],
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
    this.props.storeLocation({position: this.state.position, distance: this.state.distance});
  };

  updateDistance = distance => {
    this.setState({
      distance: distance,
      radius: distance * 500
    });
    this.props.storeLocation({position: this.state.position, distance: this.state.distance});
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

const mapStateToProps = state =>  ({
    storedLocation: state.profile.location
});
export default connect(mapStateToProps,{storeLocation})(GeoMap);