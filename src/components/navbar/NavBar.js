import React, { Component } from "react";
import "antd/dist/antd.css";
import "./NavBar.css";
import { Nav, Navbar} from "react-bootstrap";
import { Avatar} from "antd";
import AccountModal from  "../../components/accountModal/AccountModal.js"

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };

    this.accountModal = React.createRef()
  }

  showModal = () => {
    this.accountModal.current.showModal();
  };

  render() {
    return (
      <div>
        <AccountModal ref={this.accountModal} />

        <div className={"headerMain"}>
          <Navbar>
            <Navbar.Brand href="/">MOI</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="results">Zoekprofiel</Nav.Link>
            </Nav>

            <Nav className="justify-content-end" activeKey="/home">
              <Avatar icon="user"  onClick={this.showModal}/>
            </Nav>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default NavBar;
