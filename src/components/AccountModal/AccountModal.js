import React, {Component} from 'react';
import {Modal} from 'antd';
import "./AccountModal.css"
import Login from "./Login";
import Register from "./Register";
import BeginScreen from "./BeginScreen";
import PasswordForgot from "./PasswordForgot";
import PasswordChange from "./PasswordChange";


class AccountModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      activeComponent: "BeginScreen",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.setActiveComponent = this.setActiveComponent.bind(this);

  }

  showModal() {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
      activeComponent: "BeginScreen"
    });
  };

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  getTitleName() {
    switch(this.state.activeComponent) {
      case "BeginScreen":
        return "Mijn account";
      case "Login":
        return "Inloggen";
      case "Register":
        return "Registreren";
      case "PasswordForgot":
        return "Wachtwoord vergeten";
      case "PasswordChange":
        return "Wachtwoord veranderen";
    }
  }

  setActiveComponent(component) {
    this.setState({
      activeComponent: component
    })
  }

  getActiveComponent() {
    switch(this.state.activeComponent) {
      case "BeginScreen":
        return <BeginScreen setActiveComponent={this.setActiveComponent} />;
      case "Login":
        return <Login setActiveComponent={this.setActiveComponent} closeModal={this.handleCancel} />;
      case "Register":
        return <Register setActiveComponent={this.setActiveComponent} />;
      case "PasswordForgot":
        return <PasswordForgot setActiveComponent={this.setActiveComponent} />
      case "PasswordChange":
        return <PasswordChange setActiveComponent={this.setActiveComponent} />
    }
  }

  render() {
    return (
      <Modal
          title={this.getTitleName()}
          visible={this.state.visible}
          bodyStyle={{paddingBottom: 40}}
          footer={null}
          onCancel={this.handleCancel}
      >
        {this.getActiveComponent()}
      </Modal>
    );
  }
}

export default AccountModal;