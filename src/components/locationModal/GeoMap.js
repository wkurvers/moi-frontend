import React, {Component} from "react";
import { Map, Marker, MapControl, TileLayer, Circle, withLeaflet} from 'react-leaflet'
import GeoSearch from "./GeoSearch"

class GeoMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: ["53.2402311", "6.5312574" ],
      coords: {
        latitude: "53.2402311",
        longitude: "6.5312574",
      },
      distance: 10,
      zoom: 13
    }
    this.map = React.createRef();
    this.circle = React.createRef();
    this.updateZoom = this.updateZoom.bind(this);
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
    console.log(position);
    this.setState({
      position: [position.coords.latitude, position.coords.longitude]
    })
  }

  onError(err) {
    console.warn(err);
  }

  updateZoom = () => {
    console.log("YOOOOO")
    this.map.current.leafletElement.fitBounds(this.circle.current.leafletElement.getBounds())

    this.setState({
      zoom: this.map.current.leafletElement.getZoom()
    })
  }

  updateLocation = (e) => {
    //this.map.current.leafletElement.fitBounds(e.latlng)
    //console.log(this.marker.current.leafletElement._latlng)
    //console.log(this.map.current.leafletElement.getBounds().pad(this.props.radius))

    console.log(this.circle.current.leafletElement.getBounds())
    this.map.current.leafletElement.fitBounds(this.circle.current.leafletElement.getBounds())
    console.log(this.map.current.leafletElement.getZoom())
    //this.map.current.leafletElement.setBounds(this.marker.current.leafletElement._latlng)
    this.setState({ position: e.latlng});
  }


  render() {
    const {position} = this.state;
    return (
        <div className={"leaflet-container"}>
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
            <GeoSearch />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Circle ref={this.circle} center={position} radius={this.props.radius}>
              <Marker position={position} />
            </Circle>
          </Map>
        </div>
    );
  }
}


export default GeoMap