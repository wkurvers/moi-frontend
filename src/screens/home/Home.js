import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button, Input } from "antd";
import "./Home.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CompanyNearby from "../../components/companyNearby/CompanyNearby";
import { registerUser } from "../../actions/registrationActions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      showLogin: false,
      showRegistration: false
    };

    this.accountModal = React.createRef();
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Header />
        <CompanyNearby />
        <Footer />
      </div>
    );
  }
}

export default Home;
