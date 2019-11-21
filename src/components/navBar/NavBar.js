import React, { Component } from "react";
import "antd/dist/antd.css";
import "./NavBar.css";
import { Nav, Navbar} from "react-bootstrap";
import { Avatar} from "antd";
import AccountModal from  "../../components/accountModal/AccountModal.js"
import SearchProfileCreationModal from "../../components/searchProfileCreationModal/SearchProfileCreationModal.js"

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };

    this.accountModal = React.createRef()
    this.searchProfileCreationModal = React.createRef()
  }

  showAccountModal = () => {
    this.accountModal.current.showModal();
  };

  showSearchProfileCreationModal = () => {
    this.searchProfileCreationModal.current.showModal()
  }

  render() {
    return (
      <div>
        <AccountModal ref={this.accountModal} />
        <SearchProfileCreationModal ref={this.searchProfileCreationModal}/>

        <div className={"headerMain"}>
          <Navbar>
            <Navbar.Brand href="/">MOI</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link onClick={this.showSearchProfileCreationModal}>Zoekprofiel</Nav.Link>
            </Nav>

            <Nav className="justify-content-end" activeKey="/home">
              <Avatar icon="user"  onClick={this.showAccountModal}/>
            </Nav>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default NavBar;
