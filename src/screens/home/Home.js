import React, { Component } from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import LocationModal from  "../../components/locationModal/LocationModal.js"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      showLogin: false,
      showRegistration: false
    };

    this.locationModal = React.createRef()
  }

  componentDidMount() {

  }

  showModal = () => {
    this.locationModal.current.showModal();
  };


  render() {
    return (
      <div>
        <Header />
        <LocationModal ref={this.locationModal}/>
        <div className={"home-region-button-container"}>
          <div className={"home-region-button"} onClick={this.showModal} >
            Kies regio
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
