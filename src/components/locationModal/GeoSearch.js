import React from "react";
import {MapControl, withLeaflet} from "react-leaflet";
import {GeoSearchControl, OpenStreetMapProvider} from "leaflet-geosearch";

class GeoSearch extends MapControl {
  constructor(props) {
    super(props);
  }

  createLeafletElement(opts) {
    const provider = new OpenStreetMapProvider();
    return new GeoSearchControl({
      provider: provider,
      position: "topleft"
    });
  }

  componentDidMount() {
    const { map } = this.props.leaflet;
    map.addControl(this.leafletElement);
  }
}

export default withLeaflet(GeoSearch);
