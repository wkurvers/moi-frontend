import React, {Component, useState} from 'react';
import {Input, Modal, Slider} from 'antd';
import Map from "./Map";
import MapTwo from "./MapTwo";
import "./LocationModal.css";


class LocationModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      coords: {
        latitude: "40.6710729",
        longitude: "-73.9988001",
      },
      distance: 10,

      // data: {
      //   //id: 1,
      //
      //   // circle: {
      //   //   radius: 3000,
      //   //   options: {
      //   //     strokeColor: "#ff0000"
      //   //   }
      //   // }
      // }

    };
    this.updateDistance = this.updateDistance.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  setCoords = (position) => {
    console.log(position);
    this.setState({
      coords: position.coords
    })
  }

  onError(err) {
    console.warn(err);
  }

  componentDidMount() {

    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(this.setCoords, this.onError, options)
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
  }

  render() {
    const {coords} = this.state;
    let circle = {
      radius: 500 * this.state.distance,
      options: {
        strokeColor: "#01A7C2"
      }
    };
    return (
        <Modal
            title={"Kies uw regio"}
            visible={this.state.visible}
            footer={null}
            onCancel={this.handleCancel}
        >

          <div className={"map-wrapper"}>
            <MapTwo
                lat={coords.latitude}
                lng={coords.longitude}
                radius={ 500 * this.state.distance}
            />
            {/*<Map*/}
            {/*    center={{ lat: coords.latitude, lng: coords.longitude }}*/}
            {/*    zoom={12}*/}
            {/*    coords={coords}*/}
            {/*    circle={circle}*/}
            {/*    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB-FsfMSTBRL8SgxjYWp4EUn1_KCw9U_88"*/}
            {/*    loadingElement={<div style={{ height: 400 }} />}*/}
            {/*    containerElement={<div style={{ height: 400}} />}*/}
            {/*    mapElement={<div style={{ height: 400 }} />}*/}
            {/*/>*/}
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