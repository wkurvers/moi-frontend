import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Modal, Button, Input, Typography, Divider} from 'antd';
import "./AccountModal.css"

const { Title } = Typography;


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      showLogin: false,
      showBeginScreen: true,
      showPasswordForgot: false,
      showPasswordChange: false
    }
  }

  componentDidMount() {

  }


  showModal() {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
    this.resetToDefault()
  };

  resetToDefault() {
    this.setState({
      showLogin: false,
      showBeginScreen: true,
      showPasswordForgot: false,
      showPasswordChange: false
    })
  }

  getTitleName() {
    if (this.state.showBeginScreen) {
      return "Registreren";
    } else if (this.state.showLogin){
      return "Inloggen";
    } else if (this.state.showPasswordForgot){
      return "Wachtwoord vergeten";
    } else if (this.state.showPasswordChange){
      return "Wachtwoord veranderen";
    }
  }

  switchComponent(component) {
    switch(component) {
      case "BeginScreen":
        this.setState({
          showLogin: false,
          showBeginScreen: true,
          showPasswordForgot: false,
          showPasswordChange: false
        });
        break;
      case "Login":
        this.setState({
          showLogin: true,
          showBeginScreen: false,
          showPasswordForgot: false,
          showPasswordChange: false
        });
        break;
      case "PasswordForgot":
        this.setState({
          showLogin: false,
          showBeginScreen: false,
          showPasswordForgot: true,
          showPasswordChange: false
        });
        break;
      case "PasswordChange":
        this.setState({
          showLogin: false,
          showBeginScreen: false,
          showPasswordForgot: false,
          showPasswordChange: true
        });
        break;
    }
  }

  register() {
    alert("Registreren")
  }

  sendPasswordVerification() {
    this.switchComponent("PasswordChange")
  }

  changePassword() {
    this.switchComponent("Login")
  }

  _renderBeginScreen() {
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
            <div className={"custom-button"} onClick={() => this.switchComponent("Login")}>
              Inloggen
            </div>
          </div>
        </div>
    )
  }

  _renderLogin() {
    return (
        <div>
          <div className={"form-container"}>
            <Title className={"label"} level={4}>E-mailadres</Title>
            <Input className={"input"} placeholder="Vul je e-mailadres in" />
            <Title className={"label"} level={4}>Wachtwoord</Title>
            <Input className={"input"} placeholder="Vul je wachtwoord in" />
          </div>
          <div className={"password-forgot-container"}>
            <text className={"text-link"} onClick={() => this.switchComponent("PasswordForgot")}>{"Wachtwoord vergeten?"}</text>
          </div>
          <div className={"button-container"}>
            <div className={"custom-button"} onClick={() => this.switchComponent("Login")}>
              Inloggen
            </div>
          </div>

          <div className={"back-container"}>
            <text className={"text-link"} onClick={() => this.switchComponent("BeginScreen")}>{"Terug"}</text>
          </div>

        </div>
    )
  }

  _renderPasswordForgot() {
    return (
        <div>

          <div className={"form-container"}>
            <Title className={"label"} level={4}>E-mailadres</Title>
            <Input className={"input"} placeholder="Vul je e-mailadres in" />
          </div>

          <div className={"button-container"}>
            <div className={"custom-button"} onClick={() => this.sendPasswordVerification()}>
                Versturen
            </div>
          </div>

          <div className={"back-container"}>
            <text className={"text-link"} onClick={() => this.switchComponent("BeginScreen")}>{"Terug"}</text>
          </div>

        </div>
    )
  }

  _renderPasswordChange() {
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
            <text className={"text-link"} onClick={() => this.switchComponent("BeginScreen")}>{"Terug"}</text>
          </div>

        </div>
    )
  }


  render() {
    return (
      <Modal
          title={this.getTitleName()}
          visible={this.state.visible}
          bodyStyle={{paddingBottom: 80}}
          footer={null}
          onCancel={this.handleCancel}
      >
        {this.state.showBeginScreen && this._renderBeginScreen()}
        {this.state.showLogin && this._renderLogin()}
        {this.state.showPasswordForgot && this._renderPasswordForgot()}
        {this.state.showPasswordChange && this._renderPasswordChange()}
      </Modal>
    );
  }
}

export default Home;