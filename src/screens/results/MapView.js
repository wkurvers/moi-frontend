import React, {Component} from "react";
import {Map, Marker, TileLayer, FeatureGroup} from 'react-leaflet'
import GeoSearch from "../../components/locationModal/GeoSearch"
import {OpenStreetMapProvider} from "leaflet-geosearch";

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: ["53.2402311", "6.5312574"],
      zoom: 14,
      markers: []
    };

    this.map = React.createRef();
    this.featureGroup = React.createRef();
  }

  componentDidMount() {
    this.updateMarkers()

  }

  async updateMarkers() {
    const map = this.map.current.leafletElement;
    const provider = new OpenStreetMapProvider();

    let markers = []
    for (let id in this.props.data.results) {
      let company = this.props.data.results[id]
      let searchQuery = company.Adres + " " + company.Plaats + " ";
      //console.log("Search Query:    " + searchQuery)
      const results = await provider.search({ query: searchQuery});
      //console.log(results)
      markers.push([results[0].y, results[0].x])
    }
    this.setState({
      markers: markers
    })

    if (markers.length > 0) {
      this.setState({
        position: markers[0]
      })
      const featureGroup = this.featureGroup.current.leafletElement;
      map.fitBounds(featureGroup.getBounds());
    }
  }


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
              <FeatureGroup ref={this.featureGroup}>
                {this.state.markers.map((position, id) =>
                    <Marker key={"marker-" + id} position={position} />
                )}
              </FeatureGroup>
            </Map>
          </div>
        </div>
    );
  }
}


export default MapView;