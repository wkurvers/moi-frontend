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
    reactLocalStorage.clear()
    this.props.setActiveComponent("BeginScreen")
  }

  render() {
    return (
        <div>

          <div className={"menu-container logged-in-container"}>

            <div className={"menu-section"}>
              <div className={"menu-item"}>
                <Icon type="user" className={"icon"}/>
                <div className={"menu-item-text"}>Mijn gegevens</div>
              </div>
              <div className={"menu-item"}>
                <Icon type="heart" className={"icon"}/>
                <div className={"menu-item-text"}>Favorieten</div>
              </div>
            </div>

            <div className={"menu-section"}>
              <div className={"menu-item"}>
                <Icon type="file-text" className={"icon"}/>
                <div className={"menu-item-text"}>Algemene voorwaarden</div>
              </div>

              <div className={"menu-item"}>
                <Icon type="key" className={"icon"}/>
                <div className={"menu-item-text"}>Privacy verklaring</div>

              </div>
              <div className={"menu-item"}>
                <Icon type="info-circle" className={"icon"}/>
                <div className={"menu-item-text"}>FAQ's</div>
              </div>
            </div>

            <div className={"menu-section"}>
              <div className={"menu-item"}>
                <Icon type="link" className={"icon"}/>
                <div className={"menu-item-text"}>Innovatiespotter</div>
              </div>

              <div className={"menu-item"}>
                <Icon type="message" className={"icon"}/>
                <div className={"menu-item-text"}>Taal</div>
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