import React, {Component} from 'react';
import {Input, Typography} from 'antd';
import "./AccountModal.css"

const { Title } = Typography;


class PasswordChange extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  changePassword() {
     this.props.setActiveComponent("Login")
  }

  keyPress(e){
    if(e.keyCode === 13){
      this.handleSubmit(e);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.changePassword();
  }


  render() {
    return (
        <div>
          <div className={"form-container"}>
            <Title className={"label"} level={4}>Verificatiecode</Title>
            <Input
                className={"input"} placeholder="Vul je ontvangen verificatiecode in"
                onKeyDown={this.keyPress}

            />

            <Title className={"label"} level={4}>Wachtwoord</Title>
            <Input
                className={"input"} placeholder="Vul je wachtwoord in"
                onKeyDown={this.keyPress}
            />
            <Title className={"label"} level={4}>Herhaal wachtwoord</Title>
            <Input
                className={"input"} placeholder="Vul nog een keer je wachtwoord in"
                onKeyDown={this.keyPress}
            />

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