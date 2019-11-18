import React, {Component} from 'react';
import {Input, Typography} from 'antd';
import "./AccountModal.css";
import {reactLocalStorage} from 'reactjs-localstorage';
import {loginUser,resetResponse} from "../../actions/loginActions";
import {connect} from 'react-redux';

const { Title } = Typography;


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",

      emailError: false,
      passwordError: false,
      errorMessage: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  componentDidUpdate() {
    if(this.props.response.status) {
      console.log(this.props.response)
      if(this.props.response.status === 200) {
        //TODO use redux???
        reactLocalStorage.set("authAccessToken", this.props.response.access);
        reactLocalStorage.set("authRefreshToken", this.props.response.refresh);
        //--------
        this.props.setActiveComponent("LoggedIn")
        this.resetResponse()
      } else if(this.props.response.status === 401) {
        this.resetResponse()
        this.handleError("Je inloggegevens zijn onjuist")
      } else {
        this.resetResponse()
        this.handleError("Er is iets fout gegaan")
      }
    }
  }

  resetResponse() {
    this.props.resetResponse()
  }

  handleError(msg) {
    this.setState({
      "emailError": true,
      "errorMessage": msg
    })
  }

  resetError() {
    this.setState({
      "emailError": false,
      "errorMessage": ""
    })
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  validateFields() {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Check if fields are filled in
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      this.setState({
        emailError: this.state.email.length === 0,
        passwordError: this.state.password.length === 0,
        errorMessage: "Vul alle velden in"
      });
      return false
    }

    // Check if email address is valid
    else if (!emailRegex.test(String(this.state.email.toLowerCase()))) {
      this.setState({
        emailError: true,
        passwordError: false,
        errorMessage: "Vul een geldig e-mailadres in"
      });
      return false
    }
    return true
  }

  clearErrors() {
    this.setState({
      emailError: false,
      passwordError: false,
      errorMessage: ""
    });
  }

  login() {
    this.clearErrors();
    this.validateFields();
    let userData = {
      "username": this.state.email,
      "password": this.state.password
    }
    this.props.loginUser(userData)
  }

  keyPress(e){
    if(e.keyCode === 13){
      this.handleSubmit(e);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.login();
  }

  render() {
    return (
        <div>

          <div className={"form-container"}>
            <Title className={"label"} level={4}>E-mailadres</Title>
            <Input
                className={"input " + (this.state.emailError ? "input-error" : "")}
                placeholder="Vul je e-mailadres in"
                value={this.state.email}
                name={"email"}
                onChange={this.handleChange}
                onKeyDown={this.keyPress}
            />
            <Title className={"label"} level={4}>Wachtwoord</Title>
            <Input.Password
                className={"input " + (this.state.passwordError ? "input-error" : "")}
                placeholder="Vul je wachtwoord in"
                value={this.state.password}
                name={"password"}
                onChange={this.handleChange}
                onKeyDown={this.keyPress}
            />
          </div>


          <div className={"password-forgot-container"}>
            <div className={"text-link"} onClick={() => this.props.setActiveComponent("PasswordForgot")}>{"Wachtwoord vergeten?"}</div>
          </div>
          {(this.state.emailError || this.state.passwordError) && (
              <div className={"error-container"}>
                <div className={"error-text"}>{this.state.errorMessage}</div>
              </div>
          )}
          <div className={"button-container button-margin-top"}>
            <div className={"custom-button"} onClick={() => this.login()}>
              Inloggen
            </div>
          </div>

          <div className={"back-container"}>
            <div className={"text-link"} onClick={() => this.props.setActiveComponent("BeginScreen")}>{"Terug"}</div>
          </div>

        </div>
    );
  }
}
const mapStateToProps = state =>  ({
    response: state.login.item
});
export default connect(mapStateToProps,{loginUser,resetResponse})(Login);