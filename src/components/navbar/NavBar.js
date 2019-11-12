import React, { Component } from "react";
import "antd/dist/antd.css";
import "./NavBar.css";
import { Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import { Avatar, Icon } from "antd";
import userImage from "../../assets/user_84308.png";
import AccountModal from  "../../components/AccountModal/AccountModal.js"

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
              <Avatar icon="user" onClick={this.showModal}/>
              {/*<div className={'dropdownContainer'}>*/}
              {/*    <NavDropdown title={*/}
              {/*        <div className="pull-left">*/}
              {/*            <img className="thumbnail-image"*/}
              {/*                 src={userImage}*/}
              {/*                 alt="user pic"*/}
              {/*            />*/}
              {/*        </div>*/}
              {/*    } id="nav-dropdown">*/}
              {/*        <NavDropdown.Item eventKey="4.1">mijn account</NavDropdown.Item>*/}
              {/*        <NavDropdown.Divider/>*/}
              {/*        <NavDropdown.Item eventKey="4.2">favorieten</NavDropdown.Item>*/}
              {/*    </NavDropdown>*/}
              {/*</div>*/}
            </Nav>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default NavBar;
