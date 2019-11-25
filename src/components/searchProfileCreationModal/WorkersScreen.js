import React, {Component} from 'react';
import {Slider} from 'antd';
import "./SearchProfileCreationModal.css"

class WorkersScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className={"modal-container"}>
        <div className={"text-slider-container"}>
          <div className={"info-text"}>
            Geef het aantal werknemers dat het bedrijf mag hebben aan
          </div>
          <Slider min={0} max={150} range tooltipVisible defaultValue={[0,150]}/>
        </div>
      </div>
    );
  }
}

export default WorkersScreen;