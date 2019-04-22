import React, { Component } from 'react';
import '../assets/css/_style.scss';
import logo from '../assets/images/logo.png';
import { Link } from "react-scroll";
import { Link as Links} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
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
            <div className="navbar-brand"><Links to="/"><img src={logo} alt="relaone logo"/></Links></div>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem className="navitem">
                        <Link
                            to="intro"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        >Home</Link>
                </NavItem>
                <NavItem className="navitem">
                        <Link
                            to="how-to-join"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        >How to Join</Link>
                </NavItem>
                <NavItem className="navitem">
                        <Link
                            to="testimony"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        >Testimony</Link>
                </NavItem>
                <NavItem className="navitem">
                        <Link
                            to="contact-us"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        >Contact Us</Link>
                </NavItem>
                
                    <UncontrolledDropdown nav inNavbar className="navitem drop">
                        <DropdownToggle nav caret>
                        Take Action
                        </DropdownToggle>
                        <DropdownMenu right className="dropdown">
                        <DropdownItem className="dropdown">
                            <Links className="footer-links" exact="true" to="/find-activity">Join Event</Links>
                        </DropdownItem>
                        <DropdownItem className="dropdown">
                            <Links className="footer-links" exact="true" to="/find-volunteer">Find Volunteer</Links>
                        </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                
                <NavItem className="navitem">
                        <Links to="/register">Join</Links>
                </NavItem>
                <NavItem>
                    <Links to="/login"><Button className="login-button bold-text" color="warning">Login</Button></Links>
                </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
        )
    }
}

export default NavBar;

