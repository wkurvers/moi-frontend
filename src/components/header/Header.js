import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './Header.css'
import {Nav, Navbar, NavDropdown, NavItem,} from 'react-bootstrap'
import { Avatar,Icon } from 'antd';
import userImage from '../../assests/user_84308.png'


class Header extends Component {
    render() {
        return (
            <div>
                <div className={'headerMain'}>
                    <Navbar>
                        <Navbar.Brand href="/">MOI</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="results">Results</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>

                        <Nav className="justify-content-end" activeKey="/home">
                            <Avatar   icon="user" />
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

export default Header;
