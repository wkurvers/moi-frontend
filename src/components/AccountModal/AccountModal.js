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
      visible: true,
      activeComponent: "BeginScreen",

      showLogin: false,
      showRegistration: false,
      showBeginScreen: true,
      showPasswordForgot: false,
      showPasswordChange: false,

      email: "",
      password: "",

      errorEmail: false,
      errorPassword: false,
      loginError: true,
      loginErrorMessage: "sidfmds"
    }
    this.handleChange = this.handleChange.bind(this);
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
    if (this.state.showBeginScreen) {
      return "Mijn account";
    } else if (this.state.showLogin){
      return "Inloggen";
    } else if (this.state.showRegistration){
      return "Inloggen";
    } else if (this.state.showPasswordForgot){
      return "Wachtwoord vergeten";
    } else if (this.state.showPasswordChange){
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
        return <Login setActiveComponent={this.setActiveComponent} />;
      case "Registration":
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