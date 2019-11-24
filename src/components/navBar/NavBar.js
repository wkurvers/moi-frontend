import React, { Component } from "react";
import "antd/dist/antd.css";
import "./NavBar.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Avatar } from "antd";
import AccountModal from "../../components/accountModal/AccountModal.js";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.accountModal = React.createRef();
  }

  showModal = () => {
    this.accountModal.current.showModal();
  };

  render() {
    return (
      <div>
        <AccountModal ref={this.accountModal} />

        {/* <div className={"headerMain"}>
          <Navbar>
            <Navbar.Brand href="/">
              <img
                style={{ display: "inline-block", marginRight: 10, marginTop: 3 }}
                src={require("../../assets/MOI_logo.png")}
                width="60"
                height="40"
                className="d-inline align-top"
                alt="React Bootstrap logo"
              />
              MOI
            </Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="results">Zoekprofiel</Nav.Link>
            </Nav>

            <Nav className="justify-content-end" activeKey="/home">
              <Avatar
                size={42}
                style={{ cursor: "pointer" }}
                src="https://www.innovatiespotter.nl/assets/img/team/team-bob.jpg"
                onClick={this.showModal}
              />
            </Nav>
          </Navbar>
        </div> */}
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img
              style={{ display: "inline-block", marginRight: 10, marginTop: 3 }}
              src={require("../../assets/MOI_logo.png")}
              width="60"
              height="40"
              className="d-inline align-top"
              alt="React Bootstrap logo"
            />
            MOI
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="results">Zoekprofiel</Nav.Link>
              <Nav className="justify-content-end" activeKey="/home">
                <Avatar
                  size={42}
                  style={{ cursor: "pointer" }}
                  src="https://www.innovatiespotter.nl/assets/img/team/team-bob.jpg"
                  onClick={this.showModal}
                />
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
