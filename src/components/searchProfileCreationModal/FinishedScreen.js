import React, {Component} from 'react';
import {Button } from "antd";
import "./SearchProfileCreationModal.css"

class FinishedScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
        <div className={"modal-container"}>
          <div className={"info-text-container"}>
            <div className={"info-text"}>
              Je hebt je zoekprofiel nu opgebouwd!
            </div>
            <div className={"info-sub-text"}>
              Je kunt dit zoekprofiel nu gebruiken om interessante bedrijven te vinden.
            </div>
            <Button type="primary"className={"finished-button"}>Toepassen</Button>
          </div>
        </div>
    );
  }
}

export default FinishedScreen;