import React, { Component } from 'react';
import '../assets/css/_style.scss';
import logo from '../assets/images/logo.png';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button } from 'reactstrap';

class NavBar extends Component {
    constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        isOpen: false
    };
    }
    toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
    }  

    render() {
        return (
        <div>
            <Navbar dark expand="md" className="navbar">
            <NavbarBrand><img src={logo} alt="relaone logo"/></NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>How to Join</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Testimony</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Contact Us</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Join Now!</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Button className="login-button" color="warning"><b>Login</b></Button></NavLink>
                </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
        )
    }
}

export default NavBar;