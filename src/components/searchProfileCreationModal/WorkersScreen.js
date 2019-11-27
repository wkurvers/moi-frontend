import React, {Component} from 'react';
import {Slider} from 'antd';
import {connect} from 'react-redux';
import {storeWorkers,getProfile} from "../../actions/profileCreationActions";
import "./SearchProfileCreationModal.css"

class WorkersScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: [0,150]
    }
  }

  componentDidMount() {
    this.props.getProfile()
    this.setState({
      value: this.props.storedWorkers
    });
  }

  onChange(e) {
    this.setState({
      value: e
    });
    this.props.storeWorkers(e)
  }

  render() {
    return (
      <div className={"modal-container"}>
        <div className={"text-slider-container"}>
          <div className={"info-text"}>
            Geef het aantal werknemers dat het bedrijf mag hebben aan
          </div>
          <Slider min={0} max={150} range tooltipVisible value={this.state.value} onChange={(e) => this.onChange(e)}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>  ({
    storedWorkers: state.profile.workers
});
export default connect(mapStateToProps,{storeWorkers,getProfile})(WorkersScreen);