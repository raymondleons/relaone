import React, { Component } from 'react'

export default class LeftSidebar extends Component {
  render() {
    return (
      <div className="left main-sidebar">
        <div className="sidebar-inner leftscroll">
            <div id="sidebar-menu">
                <ul>
                    <li className="submenu">
                        <a href="#" className="active"><i className="fa fa-fw fa-bars"></i><span> Dashboard </span></a>
                    </li>
                    <li className="submenu">
                        <a href="#"><i className="fa fa-user"></i> <span> Users </span> <span class="menu-arrow"></span></a>
                          <ul className="list-unstyled">
                            <li><a href="tables-basic.html">Add New User</a></li>
                          </ul>
                    </li>
                    <li className="submenu">
                        <a href="#"><i className="fa fa-book"></i> <span> Article </span> <span class="menu-arrow"></span></a>
                          <ul className="list-unstyled">
                            <li><a href="tables-basic.html">Add New Article</a></li>
                          </ul>
                    </li>
                    <li className="submenu">
                        <a href="#"><i className="fa fa-users"></i> <span> Organization </span> <span class="menu-arrow"></span></a>
                          <ul className="list-unstyled">
                            <li><a href="tables-basic.html">Add New Organization</a></li>
                          </ul>
                    </li>
                    <li className="submenu">
                        <a href="#"><i className="fa fa-user"></i> <span> Events </span> <span class="menu-arrow"></span></a>
                          <ul className="list-unstyled">
                            <li><a href="tables-basic.html">Add New Events</a></li>
                          </ul>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    )
  }
}
