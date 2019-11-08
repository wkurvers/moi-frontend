import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './Header.css'
import {Nav, Navbar} from 'react-bootstrap'


class Header extends Component {
    render() {
        return (
            <div>
                <div className={'headerMain'}>
                    <Navbar>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Navbar>
                </div>

            </div>
        );
    }
}

export default Header;
