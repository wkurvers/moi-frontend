import React, {Component} from 'react';
import "./SearchProfileCreationModal.css"

class LocationScreen extends Component {

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
            Geef aan in welke buurt de bedrijven mogen zitten
          </div>
        </div>
      </div>
    );
  }
}

export default LocationScreen;