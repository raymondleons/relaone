import React, { Component } from 'react';
import '../assets/css/_style.scss';
import logo from '../assets/images/logo.png';
import { Link as Links} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
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


        let token = localStorage.getItem('token');
        
        const logButton = (token !== null) ? (
            <Links to="/"><Button onClick={this.handleSignOut} className="login-button bold-text" color="warning">Log Out</Button></Links>
        ) : (
            <Links to="/login"><Button className="login-button bold-text" color="warning">Login</Button></Links>
        )

        return (
        <div>
            <Navbar dark expand="md" className="navbar">
            <div className="navbar-brand"><Links to="/"><img src={logo} alt="relaone logo"/></Links></div>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem className="navitem">
                        <Links to="/find-volunteer">Find Volunteer</Links>
                </NavItem>
                <NavItem className="navitem">
                        <Links to="/find-activity">Join Event</Links>
                </NavItem>
                <NavItem className="navitem">
                        <Links to="/register">Join</Links>
                </NavItem>
                <NavItem>
                    {logButton}
                </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
        )
    }
}

export default NavigationBar;

