import React, { Component } from 'react';
import '../assets/css/_style.scss';
import logo from '../assets/images/logo.png';
import { Link as Links} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button } from 'reactstrap';

class NavigationBar extends Component {
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
            <NavbarBrand className="navbar-brand"><Links to="/"><img src={logo} alt="relaone logo"/></Links></NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink>
                        <Links to="/find-volunteer">Find Volunteer</Links>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Links to="/find-activity">Find Activity</Links>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Links to="/register">Join</Links>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Links to="/login"><Button className="login-button bold-text" color="warning">Login</Button></Links></NavLink>
                </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
        )
    }
}

export default NavigationBar;

