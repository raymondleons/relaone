import React, { Component } from 'react';
import '../assets/css/_style.scss';
import logo from '../assets/images/logo.png';
import { Link, animateScroll as scroll } from "react-scroll";
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
            <NavbarBrand className="navbar-brand"><img src={logo} alt="relaone logo"/></NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem className="navitem">
                    <NavLink>
                        <Link
                            activeClass="active"
                            to="intro"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        >Home</Link>
                    </NavLink>
                </NavItem>
                <NavItem className="navitem">
                    <NavLink>
                        <Link
                            activeClass="active"
                            to="how-to-join"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        >How to Join</Link>
                    </NavLink>
                </NavItem>
                <NavItem className="navitem">
                    <NavLink>
                        <Link
                            activeClass="active"
                            to="testimony"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        >Testimony</Link>
                    </NavLink>
                </NavItem>
                <NavItem className="navitem">
                    <NavLink>
                        <Link
                            activeClass="active"
                            to="contact-us"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        >Contact Us</Link>
                    </NavLink>
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

