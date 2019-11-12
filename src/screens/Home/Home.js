import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button, Input } from "antd";
import "./Home.css";
import Header from "../../components/header/Header";
import AccountModal from  "../../components/AccountModal/AccountModal.js"

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

  showModal = () => {
    this.accountModal.current.showModal();
  };


  render() {
    return (
      <div>
        <Header />

        <div>
          <Button type="primary" onClick={this.showModal}>
            Open Modal
          </Button>
          <AccountModal ref={this.accountModal} />

        </div>
      </div>
    );
  }
}

export default Home;
