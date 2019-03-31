import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OrganizationSideBar extends Component {
  render() {
    return (
        <aside className="left-panel">
            <nav className="navbar">
                <ul className="navbar-nav">
                
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-dashboard"></i> <span className="menu-title">Dashboard</span>
                    </a>
                    <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/event">Event</Link>
                    <Link className="dropdown-item" to="/article">Article</Link>
                    <Link className="dropdown-item" to="/article/detail">Article Detail</Link>
                    </div>
                </li>
                </ul>
            </nav>
            </aside>
    )
  }
}

export default OrganizationSideBar;