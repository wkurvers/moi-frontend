import React, {Component} from 'react';
import {Modal} from 'antd';
import GeoMap from "./GeoMap";
import "./LocationModal.css";


class LocationModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
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

  render() {
    return (
        <Modal
            title={"Kies uw regio"}
            visible={this.state.visible}
            footer={null}
            onCancel={this.handleCancel}
        >
          <GeoMap/>
        </Modal>
    );
  }
}

export default LocationModal;