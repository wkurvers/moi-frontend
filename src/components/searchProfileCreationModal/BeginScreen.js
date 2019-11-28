import React, {Component} from 'react';
import "./SearchProfileCreationModal.css"

class BeginScreen extends Component {

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
              Met een zoekprofiel kun je snel een uitgebreid zoekbeeld creëren zodat je bedrijven kunt vinden waar jij geïnteresseerd in bent!
            </div>
            <div className={"info-sub-text"}>
              Volg de stappen om je zoekprofiel op te bouwen, het duurt maar een paar minuten!
            </div>
          </div>
        </div>
    );
  }
}
export default BeginScreen;