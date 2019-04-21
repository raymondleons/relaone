import React, { Component } from 'react'
import '../../assets/css/admin/style.css'
import 'font-awesome/css/font-awesome.min.css';
import Logo from '../../assets/images/logo.png'
import Avatar from '../../assets/images/avatar.png'

export default class TopNavbar extends Component {
  render() {
    return (
      <div className="headerbar">
        {/* logo */}
        <div className="headerbar-left">
            <a href="#" className="logo"><img src={Logo} alt="Logo"/></a>
        </div>

        <nav className="navbar-custom">
            <ul className="list-inline float-right mb-0">
                <li className="list-inline-item dropdown notif">
                    <a className="nav-link dropdown-toggle nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                        <img src={Avatar} alt="Profile image" className="avatar-rounded"/>
                        Ba
                    </a>      
                </li>
            </ul>
        </nav>
      </div>
    )
  }
}
