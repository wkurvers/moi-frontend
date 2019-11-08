import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Modal, Button, Input } from 'antd';
import "./Home.css"

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      showLogin: false,
      showRegistration: false
    }
  }

  componentDidMount() {

  }


  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };


  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  callback(key) {
    console.log(key);
  }

  showComponent(component) {
    switch(component) {
      case "login":
        this.setState({
          showLogin: true,
          showRegistration: false
        });
        break;

      case "registration":
        this.setState({
          showLogin: false,
          showRegistration: true
        });
      break;
    }
  }

  _renderLogin() {
    return (
        <div>
          <h1>E-mailadres</h1>
          <Input placeholder="Vul hier je e-mailadres in" />
          <h1>Wachtwoord</h1>
          <Input placeholder="Basic usage" />
        </div>
    )
  }

  _renderRegister() {
    return (
        <div>
          <h1>Gebruikersnaam</h1>
          <Input placeholder="Basic usage" />
          <h1>Wachtwoord</h1>
          <Input placeholder="Basic usage" />
        </div>
    )
  }


  _renderModal() {
    return (
        <div>
          <Button
              type="primary"
              ghost
              style={{width: "40%", marginRight: "2%"}}
              onClick={() => this.showComponent("login")}>
            Inloggen
          </Button>
          <Button
              type="primary"
              style={{width: "40%"}}
              onClick={() =>  this.showComponent("registration")}>
            Registreren
          </Button>
        </div>
    )
  }

  _renderModalHeader() {
    return (
        <div style={{width: "100%"}}>
          <h1 style={{}}>Moi eem</h1>
        </div>
    )
  }

  render() {
    return (
        <div>
          <div>
            <Button type="primary" onClick={this.showModal}>
              Open Modal
            </Button>
            <Modal
                style={{ top: 100 }}

                title={this._renderModalHeader()}
                visible={this.state.visible}
                bodyStyle={{height: 500, width: 500}}
            >
              {this._renderModal()}

            </Modal>
          </div>
        </div>
    );
  }
}

export default Home;