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
                </ul>
            </div>
        </div>
      </div>
    )
  }
}
