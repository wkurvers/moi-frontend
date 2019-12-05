import React, {Component} from "react";
import {Circle, Map, Marker, TileLayer} from 'react-leaflet'
import GeoSearch from "../../components/locationModal/GeoSearch"
import {GeoSearchControl, OpenStreetMapProvider} from "leaflet-geosearch";

class MapView extends Component {
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
    this.updateMarkers()

  }

  updateMarkers() {
    const map = this.map.leafletElement;
    //const searchControl = new ELG.Geosearch().addTo(map);

    const provider = new OpenStreetMapProvider();
    return new GeoSearchControl({
      provider: provider,
      position: "topleft"
    });

    for (let company in this.props.data) {
      console.log("YOOOOO")
      this.map.current.leafletElement.on('geosearch_showlocation', function (result) {
        console.log("yes pls")
        let position = [result.x, result.y]
        let marker = <Marker position={position}/>
        marker.addTo(this.map.current.leafletElement);
      });
    }
  }


  onError(err) {
    console.warn(err);
  }


  setPosition = (position) => {
    this.setState({
      position: [position.coords.latitude, position.coords.longitude]
    })
  };

  render() {
    const {position} = this.state;
    return (
        <div>
          <div className={"results-mapview"}>
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
        </div>
    );
  }
}


export default MapView;