import React, {Component} from 'react';
import {Input, Typography} from 'antd';
import "./AccountModal.css"

const { Title } = Typography;


class PasswordChange extends Component {

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

  changePassword() {
     this.props.setActiveComponent("Login")
  }

  render() {
    return (
        <div>
          <div className={"form-container"}>
            <Title className={"label"} level={4}>Verificatiecode</Title>
            <Input className={"input"} placeholder="Vul je ontvangen verificatiecode in" />
            <Title className={"label"} level={4}>Wachtwoord</Title>
            <Input className={"input"} placeholder="Vul je wachtwoord in" />
            <Title className={"label"} level={4}>Herhaal wachtwoord</Title>
            <Input className={"input"} placeholder="Vul nog een keer je wachtwoord in" />
          </div>
          <div className={"button-container"}>
            <div className={"custom-button"} onClick={() => this.changePassword()}>
              Verander uw wachtwoord
            </div>
          </div>

          <div className={"back-container"}>
            <text className={"text-link"} onClick={() => this.props.setActiveComponent("BeginScreen")}>{"Terug"}</text>
          </div>

        </div>
    );
  }
}

export default PasswordChange;