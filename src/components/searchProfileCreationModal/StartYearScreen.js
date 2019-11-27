import React, {Component} from 'react';
import {Slider} from 'antd';
import {connect} from 'react-redux';
import {storeStartYear,getProfile} from "../../actions/profileCreationActions";
import "./SearchProfileCreationModal.css"

class StartYearScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: [1900, new Date().getFullYear()]
    }
  }

  componentDidMount() {
    this.props.getProfile()
    this.setState({
      value: this.props.storedStartYear
    });
  }

  onChange(e) {
    this.setState({
      value: e
    });
    this.props.storeStartYear(e)
  }

  render() {
    return (
      <div className={"modal-container"}>
        <div className={"text-slider-container"}>
          <div className={"info-text"}>
            Geef de periode aan waarin het bedrijf begonnen mag zijn
          </div>
          <Slider min={1900} max={new Date().getFullYear()} range tooltipVisible value={this.state.value} onChange={(e) => this.onChange(e)}/>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state =>  ({
    storedStartYear: state.profile.startYear
});
export default connect(mapStateToProps,{storeStartYear,getProfile})(StartYearScreen);