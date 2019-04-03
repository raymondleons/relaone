import React, { Component } from 'react';
import '../assets/css/_style.scss';
import logo from '../assets/images/logo.png';
import { Link } from "react-scroll";
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
            <NavbarBrand className="navbar-brand"><Links to="/"><img src={logo} alt="relaone logo"/></Links></NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem className="navitem">
                    <NavLink>
                        <Link
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
                            to="contact-us"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        >Contact Us</Link>
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

export default NavBar;

