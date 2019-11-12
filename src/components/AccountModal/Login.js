import React, {Component} from 'react';
import {Input, Typography} from 'antd';
import "./AccountModal.css"

const { Title } = Typography;


class Login extends Component {

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

  login() {

  }

  render() {
    return (
        <div>

          <div className={"form-container"}>
            <Title className={"label"} level={4}>E-mailadres</Title>
            <Input
                className={"input"}
                placeholder="Vul je e-mailadres in"
                value={this.state.email}
                name={"email"}
                onChange={this.handleChange}
            />
            <Title className={"label"} level={4}>Wachtwoord</Title>
            <Input className={"input"} placeholder="Vul je wachtwoord in" value={this.state.password}/>
          </div>



          <div className={"password-forgot-container"}>
            <text className={"text-link"} onClick={() => this.props.setActiveComponent("PasswordForgot")}>{"Wachtwoord vergeten?"}</text>
          </div>
          {this.state.loginError && (
              <div className={"error-container"}>
                <text className={"error-text"}>{this.state.loginErrorMessage}</text>
              </div>
          )}
          <div className={"button-container login-button"}>
            <div className={"custom-button"} onClick={() => this.props.setActiveComponent("Login")}>
              Inloggen
            </div>
          </div>

          <div className={"back-container"}>
            <text className={"text-link"} onClick={() => this.props.setActiveComponent("BeginScreen")}>{"Terug"}</text>
          </div>

        </div>
    );
  }
}

export default Login;