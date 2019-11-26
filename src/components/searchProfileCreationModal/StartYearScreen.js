import React, {Component} from 'react';
import {Slider} from 'antd';
import {connect} from 'react-redux';
import {storeStartYear} from "../../actions/profileCreationActions";
import "./SearchProfileCreationModal.css"

class StartYearScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onAfterChange(e) {
    this.props.storeStartYear(e)
  }

  render() {
    return (
      <div className={"modal-container"}>
        <div className={"text-slider-container"}>
          <div className={"info-text"}>
            Geef de periode aan waarin het bedrijf begonnen mag zijn
          </div>
          <Slider min={1900} max={new Date().getFullYear()} range tooltipVisible defaultValue={[1900,new Date().getFullYear()]}/>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state =>  ({
    storedStartYear: state.profile.startYear
});
export default connect(mapStateToProps,{storeStartYear})(StartYearScreen);