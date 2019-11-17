import React, {Component} from 'react';
import {Icon} from 'antd';
import "./AccountModal.css"

class BeginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
        <div>

          <div className={"two-button-container"}>
            <div className={"button-container"}>
              <div className={"custom-button-outline"} onClick={() => this.props.setActiveComponent("Login")}>
                Inloggen
              </div>
            </div>

            <div className={"button-container"}>
              <div className={"custom-button"} onClick={() => this.props.setActiveComponent("Register")}>
                Registreren
              </div>
            </div>
          </div>

          <div className={"menu-container"}>
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


        </div>
    );
  }
}

export default BeginScreen;