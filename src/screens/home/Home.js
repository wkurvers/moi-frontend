import React, {Component} from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CompanyNearby from "../../components/companyNearby/CompanyNearby";
import LocationModal from "../../components/locationModal/LocationModal.js"

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


  showModal = () => {
    this.locationModal.current.showModal();
  };


  _renderCompanyHeader() {
    return (
        <div className={"home-company-header"}>
          <h2>Bedrijven in de buurt</h2>
          <div className={"home-region-button"} onClick={this.showModal}>
            Kies regio
          </div>
        </div>
    )
  }


  render() {
    return (
        <div>
          <Header/>
          <LocationModal ref={this.locationModal}/>
          {this._renderCompanyHeader()}
          <CompanyNearby/>
          <Footer/>
        </div>
    );
  }
}

export default Home;
