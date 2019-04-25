import React, { Component } from 'react'
import { Link } from "react-scroll";
import { Link as Links} from 'react-router-dom';
import {
  Button } from 'reactstrap';

// CSS
import '../../assets/css/admin/bootstrap.min.css'
import '../../assets/css/admin/paper-dashboard.css'
import '../../assets/css/admin/demo/demo.css'

// Img
import Logo from '../../assets/css/admin/img/logo-small.png'

class ListAdminSidebar extends Component {
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

    handleSignOut = () =>{
        localStorage.clear()
      }

  render() {
    let token = localStorage.getItem('token');
        
        const logButton = (token !== null) ? (
            <Links to="/"><Button onClick={this.handleSignOut} className="login-button bold-text" color="warning">Log Out</Button></Links>
        ) : (
            <Links to="/log-in"><Button className="login-button bold-text" color="warning">Login</Button></Links>
        )
    return (
      <div className="sidebar" data-color="white" data-active-color="danger">
        <div className="logo">
           <a href="#" className="simple-text logo-mini">
            <div className="logo-image-small">
              <img src={Logo} alt=""/>
            </div>
           </a>
           <a href="#" className="simple-text logo-normal">
            Relaone Tim
           </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li>
              <a href="/admin">
                <i className="nc-icon nc-bank"></i>
                <p>Dashboard</p>
              </a>
            </li>
            <li>
              <a href="/admin/users">
                <i className="nc-icon nc-single-02"></i>
                <p>Users</p>
              </a>
            </li>
            <li>
              <a href="/admin/article">
                <i className="nc-icon nc-single-copy-04"></i>
                <p>Article</p>
              </a>
            </li>
            <li>
              <a href="/admin/organization">
                <i className="nc-icon nc-shop"></i>
                <p>Organization</p>
              </a>
            </li>
            <li>
              <a href="/admin/event">
                <i className="nc-icon nc-album-2"></i>
                <p>Event</p>
              </a>
            </li>
            <li>
              <a href="/admin/skill-sett">
                <i className="nc-icon nc-align-left-2"></i>
                <p>Skill Set</p>
              </a>
            </li>
            <li className="active">
              <a href="/admin/list-admin">
                <i className="nc-icon nc-circle-10"></i>
                <p>List Admin</p>
              </a>
            </li>
            <li className="active-pro">
              <a href="#">
                <i className="nc-icon nc-spaceship"></i>
                <p>Logout</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ListAdminSidebar;