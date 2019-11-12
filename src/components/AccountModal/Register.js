import React, {Component} from 'react';
import {Input, Typography, Divider} from 'antd';
import "./AccountModal.css"

const { Title } = Typography;


class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstPassword: "",
      secondPassword: "",


      emailError: false,
      firstPasswordError: false,
      secondPasswordError: false,
      errorMessage: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);

  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  validateFields() {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Check if fields are filled in
    if (this.state.email.length === 0 ||
        this.state.firstPassword.length === 0||
        this.state.secondPassword.length === 0) {

      this.setState({
        emailError: this.state.email.length === 0,
        firstPasswordError: this.state.firstPassword.length === 0,
        secondPasswordError: this.state.secondPassword.length === 0,
        errorMessage: "Vul alle velden in"
      });
      return false
    }

    // Check if email address is valid
    else if (!emailRegex.test(String(this.state.email.toLowerCase()))) {
      this.setState({
        emailError: true,
        firstPasswordError: false,
        secondPasswordError: false,
        errorMessage: "Vul een geldig e-mailadres in"
      });
      return false
    }

    // Check if passwords are equal
    else if (this.state.firstPassword !== this.state.secondPassword) {
      this.setState({
        emailError: false,
        firstPasswordError: true,
        secondPasswordError: true,
        errorMessage: "Wachtwoorden zijn niet gelijk"
      });
      return false
    }

    // Check if passwords contains minimum amount of characters
    else if (this.state.firstPassword.length < 8) {
      this.setState({
        emailError: false,
        firstPasswordError: true,
        secondPasswordError: true,
        errorMessage: "Wachtwoord moet minimaal 8 karakters bevatten"
      });
      return false
    }

    return true
  }

  clearErrors() {
    this.setState({
      emailError: false,
      firstPasswordError: false,
      secondPasswordError: false,
      errorMessage: ""
    });
  }


  register() {
    this.clearErrors();
    this.validateFields();
  }

  keyPress(e){
    if(e.keyCode === 13){
      this.handleSubmit(e);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.register();
  }


  render() {
    return (
        <div>
          <div className={"form-container"}>
            <Title className={"label"} level={4}>E-mailadres</Title>
            <Input
                className={"input " + (this.state.emailError ? "input-error" : "")}
                placeholder="Kies een e-mailadres"
                value={this.state.email}
                name={"email"}
                onChange={this.handleChange}
                onKeyDown={this.keyPress}
            />

            <Title className={"label"} level={4}>Wachtwoord</Title>
            <Input.Password
                className={"input " + (this.state.firstPasswordError ? "input-error" : "")}
                placeholder="Kies een wachtwoord"
                value={this.state.firstPassword}
                name={"firstPassword"}
                onChange={this.handleChange}
                onKeyDown={this.keyPress}
            />

            <Title className={"label"} level={4}>Herhaal wachtwoord</Title>
            <Input.Password
                className={"input " + (this.state.secondPasswordError ? "input-error" : "")}
                placeholder="Herhaal het wachtwoord"
                value={this.state.secondPassword}
                name={"secondPassword"}
                onChange={this.handleChange}
                onKeyDown={this.keyPress}
            />
          </div>

          {(this.state.emailError || this.state.firstPasswordError || this.state.secondPasswordError) && (
              <div className={"error-container"}>
                <text className={"error-text"}>{this.state.errorMessage}</text>
              </div>
          )}

          <div className={"button-container button-margin-top"}>
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