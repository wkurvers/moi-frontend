import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Modal, Button, Input, Typography, Divider} from 'antd';
import "./Home.css"

const { Title } = Typography;


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      showLogin: false,
      showBeginScreen: true,
      showPasswordForgot: false,
      showPasswordChange: false
    }
  }

  componentDidMount() {

  }


  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  switchLoginView() {
    this.setState({
      showLogin: true,
      showBeginScreen: false,
      showPasswordForgot: true
    })
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
            <div className={"custom-button"} onClick={() => this.registrate()}>
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
          <div className={"button-container"}>
            <div className={"custom-button"} onClick={() => this.switchComponent("Login")}>
              Inloggen
            </div>
          </div>

        </div>
    )
  }

  _renderPasswordForgot() {
    return (
        <div>
          <h1>E-mailadres</h1>
          <Input placeholder="Vul hier je e-mailadres in" />
        </div>
    )
  }

  _renderPasswordChange() {
    return (
        <div>
          <Title className={"label"} level={4}>Verificatiecode</Title>
          <Input className={"input"} placeholder="Vul je ontvangen verificatiecode in" />
          <Title className={"label"} level={4}>Wachtwoord</Title>
          <Input className={"input"} placeholder="Vul je wachtwoord in" />
          <Title className={"label"} level={4}>Herhaal wachtwoord</Title>
          <Input className={"input"} placeholder="Vul nog een keer je wachtwoord in" />

          <div className={"button-container"}>
            <div className={"custom-button"} onClick={() => alert("yo")}>
              Verander uw wachtwoord
            </div>
          </div>
        </div>
    )
  }


  render() {
    return (
        <div>
          <div>
            <Button type="primary" onClick={this.showModal}>
              Open Modal
            </Button>
            <Modal
                title={"Mijn Account"}
                visible={this.state.visible}
                bodyStyle={{paddingBottom: 80}}
                footer={null}
                onCancel={this.handleCancel}
            >
              {this.state.showBeginScreen && this._renderBeginScreen()}
              {this.state.showLogin && this._renderLogin()}
            </Modal>
          </div>
        </div>
    );
  }
}

export default Home;