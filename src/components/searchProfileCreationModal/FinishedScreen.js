import React, {Component} from 'react';
import {Button } from "antd";
import {connect} from 'react-redux';
import {getProfile} from "../../actions/profileCreationActions";
import "./SearchProfileCreationModal.css"

class FinishedScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
    this.props.getProfile()
    console.log(this.props)
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


const mapStateToProps = state =>  ({
    profile: state.profile
});
export default connect(mapStateToProps,{getProfile})(FinishedScreen);