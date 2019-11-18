import React, {Component, useState} from 'react';
import {Modal} from 'antd';
import Map from "./Map";

const data = [
  {
    id: 1,
    name: "Park Slope",
    latitude: "40.6710729",
    longitude: "-73.9988001"
  }
];

data[0].circle = {
  radius: 3000,
  options: {
    strokeColor: "#ff0000"
  }
};



class LocationModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      coords: {
        latitude: "40.6710729",
        longitude: "-73.9988001",
      }
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
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  setCoords = (position) => {
    console.log(position);
    this.setState({
      coords: position.coords
    })
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.setCoords)

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

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const {coords} = this.state;
    console.log(coords)
    return (
        <Modal
            title={"Kies uw regio"}
            visible={this.state.visible}
            bodyStyle={{paddingBottom: 40}}
            footer={null}
            onCancel={this.handleCancel}
        >

          <div className={"map-wrapper"}>
            <Map
                center={{ lat: coords.latitude, lng: coords.longitude }}
                zoom={12}
                coords={coords}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key="
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: 400}} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
          </div>

        </Modal>
    );
  }
}

export default LocationModal;