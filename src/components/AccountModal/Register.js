import React, {Component} from 'react';
import {Input, Typography, Divider} from 'antd';
import "./AccountModal.css"

const { Title } = Typography;


class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",

      errorEmail: false,
      errorPassword: false,
      loginError: true,
      loginErrorMessage: "sidfmds"
    }
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  register() {

  }

  render() {
    return (
        <div>
          <div className={"form-container"}>
            <Title className={"label"} level={4}>E-mailadres</Title>
            <Input className={"input"} placeholder="Vul je e-mailadres in" />
            <Title className={"label"} level={4}>Wachtwoord</Title>
            <Input className={"input"} placeholder="Vul je wachtwoord in" />
            <Title className={"label"} level={4}>Herhaal wachtwoord</Title>
            <Input className={"input"} placeholder="Vul nog een keer je wachtwoord in" />
          </div>

          <div className={"button-container"}>
            <div className={"custom-button"} onClick={() => this.register()}>
              Registreren
            </div>
          </div>

          <Divider className={"divider"}>Heb je al een account?</Divider>

          <div className={"button-container"}>
            <div className={"custom-button-outline"} onClick={() => this.props.setActiveComponent("Login")}>
              Inloggen
            </div>
          </div>

          {/*<div className={"back-container"}>*/}
          {/*  <text className={"text-link"} onClick={() => this.switchComponent("Login")}>{"Ik heb al een account"}</text>*/}
          {/*</div>*/}

        </div>
    );
  }
}

export default Register;