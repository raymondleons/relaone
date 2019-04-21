import React, { Component } from 'react'
import { NavLink } from 'reactstrap'

export default class LeftSidebar extends Component {

  constructor(){
    super();
   
    this.state = {
          displayMenu: false,
        };
   
     this.showDropdownMenu = this.showDropdownMenu.bind(this);
     this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
   
   };
   
   showDropdownMenu(event) {
       event.preventDefault();
       this.setState({ displayMenu: true }, () => {
       document.addEventListener('click', this.hideDropdownMenu);
       });
     }
   
     hideDropdownMenu() {
       this.setState({ displayMenu: false }, () => {
         document.removeEventListener('click', this.hideDropdownMenu);
       });
   
     }

  render() {
    return (
      <div className="left main-sidebar">
        <div className="sidebar-inner leftscroll">
            <div id="sidebar-menu">
                <ul>
                <li className="submenu">
                        <a href="/admin/dashboard"><i className="fa fa-fw fa-bars"></i><span> Dashboard </span></a>
                    </li>
                    <li className="submenu">
                        <a href="/admin/users"><i className="fa fa-user"></i> <span> Users </span> <span class="menu-arrow"></span></a>
                          <ul className="list-unstyled">
                            <li><a href="/admin/users/add">Add New User</a></li>
                          </ul>
                    </li>
                    <li className="submenu">
                        <a href="/admin/article"><i className="fa fa-book"></i> <span> Article </span> <span class="menu-arrow"></span></a>
                          <ul className="list-unstyled">
                            <li><a href="/admin/article/add">Add New Article</a></li>
                          </ul>
                    </li>
                    <li className="submenu">
                        <a href="/admin/organization"><i className="fa fa-users"></i> <span> Organization </span> <span class="menu-arrow"></span></a>
                          <ul className="list-unstyled">
                            <li><a href="tables-basic.html">Add New Organization</a></li>
                          </ul>
                    </li>
                    <li className="submenu">
                        <a href="/admin/events" className="active"><i className="fa fa-user"></i> <span> Events </span> <span class="menu-arrow"></span></a>
                          <ul className="list-unstyled">
                            <li><a href="/admin/events/add">Add New Events</a></li>
                          </ul>
                    </li>
                    <li className="submenu">
                        <a href="/admin/skill-set" ><i class="fa fa-cogs"></i><span> Skill Sett </span></a>
                    </li>
                    <li className="submenu">
                        <a href="#" ><i className="fa fa-user"></i> <span> Logout</span></a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    )
  }
}
