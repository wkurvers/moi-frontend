import React, {Component, useState} from 'react';
import {Input, Modal, Slider} from 'antd';
import GeoMap from "./GeoMap";
import "./LocationModal.css";


class LocationModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      position: ["40.6710729", "-73.9988001" ],
      coords: {
        latitude: "40.6710729",
        longitude: "-73.9988001",
      },
      distance: 10,
      zoom: 13
    };

    this.geoMap = React.createRef();
    this.updateDistance = this.updateDistance.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }


  showModal() {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  updateDistance(distance) {
    this.setState({distance});
    this.geoMap.current.updateZoom()
  }

  render() {
    return (
        <Modal
            title={"Kies uw regio"}
            visible={this.state.visible}
            footer={null}
            onCancel={this.handleCancel}
        >

          <div className={"map-wrapper"}>
            <GeoMap
              ref={this.geoMap}
              distance={this.state.distance}
              radius={ 500 * this.state.distance}
            />
          </div>

          <div className={"location-modal-slider-container"}>
            <div>
              Afstand
            </div>
            <div>
              {this.state.distance + " km"}
            </div>

            <Slider min={0} max={200} onChange={this.updateDistance} name={"distance"} value={this.state.distance}>

            </Slider>
          </div>
        </Modal>
    );
  }
}

export default LocationModal;