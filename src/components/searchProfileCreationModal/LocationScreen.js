import React, {Component} from 'react';
import {connect} from 'react-redux';
import {storeLocation, getProfile} from "../../actions/profileCreationActions";
import GeoMap from "../locationModal/GeoMap";
import "./SearchProfileCreationModal.css"

class LocationScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }

  }

  componentDidUpdate() {
    console.log(this.props)
  }

  render() {
    return (
      <div className={"modal-location-container"}>
        <div className={"info-text-container"}>
          <div className={"info-text"}>
            Geef aan in welke buurt de bedrijven mogen zitten
          </div>
        </div>
        <GeoMap startPosition={this.props.storedLocation}/>
      </div>
    );
  }
}

const mapStateToProps = state =>  ({
    storedLocation: state.profile.location
});
export default connect(mapStateToProps,{storeLocation,getProfile})(LocationScreen);