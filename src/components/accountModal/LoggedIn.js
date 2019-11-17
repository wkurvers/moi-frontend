import React, {Component} from 'react';
import {Icon} from 'antd';
import "./AccountModal.css"
import {reactLocalStorage} from 'reactjs-localstorage';

class LoggedIn extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  logout() {
    reactLocalStorage.clear();
    this.props.setActiveComponent("BeginScreen")
  }


  render() {
    return (
        <div>

          <div className={"menu-container logged-in-container"}>

            <div className={"menu-section"}>
              <div className={"menu-item"}>
                <Icon type="user" className={"icon"}/>
                <text className={"menu-item-text"}>Mijn gegevens</text>
              </div>
              <div className={"menu-item"}>
                <Icon type="heart" className={"icon"}/>
                <text className={"menu-item-text"}>Favorieten</text>
              </div>
            </div>

            <div className={"menu-section"}>
              <div className={"menu-item"}>
                <Icon type="file-text" className={"icon"}/>
                <text className={"menu-item-text"}>Algemene voorwaarden</text>
              </div>

              <div className={"menu-item"}>
                <Icon type="key" className={"icon"}/>
                <text className={"menu-item-text"}>Privacy verklaring</text>

              </div>
              <div className={"menu-item"}>
                <Icon type="info-circle" className={"icon"}/>
                <text className={"menu-item-text"}>FAQ's</text>
              </div>
            </div>

            <div className={"menu-section"}>
              <div className={"menu-item"}>
                <Icon type="link" className={"icon"}/>
                <text className={"menu-item-text"}>Innovatiespotter</text>
              </div>

              <div className={"menu-item"}>
                <Icon type="message" className={"icon"}/>
                <text className={"menu-item-text"}>Taal</text>
              </div>
            </div>
          </div>

          <div className={"button-container logout-button-container"}>
            <div className={"custom-button logout-button"} onClick={() => this.logout()}>
              Uitloggen
            </div>
          </div>

        </div>
    );
  }
}

export default LoggedIn;