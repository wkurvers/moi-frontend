import React, {Component} from 'react';
import {Input, Typography} from 'antd';
import "./AccountModal.css"

const { Title } = Typography;


class PasswordForgot extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  sendPasswordVerification() {
    this.props.setActiveComponent("PasswordChange")
  }

  keyPress(e){
    if(e.keyCode === 13){
      this.handleSubmit(e);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.sendPasswordVerification();
  }

  render() {
    return (
        <div>

          <div className={"form-container"}>
            <Title className={"label"} level={4}>E-mailadres</Title>
            <Input
                className={"input"} placeholder="Vul je e-mailadres in"
                onKeyDown={this.keyPress}
            />
          </div>

          <div className={"button-container"}>
            <div className={"custom-button"} onClick={() => this.sendPasswordVerification()}>
              Versturen
            </div>
          </div>

          <div className={"back-container"}>
            <text className={"text-link"} onClick={() => this.props.setActiveComponent("BeginScreen")}>{"Terug"}</text>
          </div>

        </div>
    );
  }
}

export default PasswordForgot;