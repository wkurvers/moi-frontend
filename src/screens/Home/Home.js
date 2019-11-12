import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button, Input } from "antd";
import "./Home.css";
import Header from "../../components/header/Header";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      showLogin: false,
      showRegistration: false
    }

    this.accountModal = React.createRef()
  }

  componentDidMount() {

  }


  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default Home;
