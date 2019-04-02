import React, { Component } from 'react';
import { UncontrolledCollapse } from 'reactstrap';
import { Link } from 'react-router-dom';

class OrganizationSideBar extends Component {
  render() {
    return (
      <div className="side-bar">
        <div className="side-bar-list">
          <div className="side-bar-item"><Link to="/event">Event</Link></div>
          <div className="side-bar-item" id="volunteer">Volunteer</div>
            <UncontrolledCollapse toggler="#volunteer">
              <div className="side-bar-subitem">Registered</div>
              <div className="side-bar-subitem">Accepted</div>
              <div className="side-bar-subitem">Rejected</div>
            </UncontrolledCollapse>
          <div className="side-bar-item" id="setting">Setting</div>
            <UncontrolledCollapse toggler="#setting">
              <div className="side-bar-subitem">Edit Profile</div>
            </UncontrolledCollapse>
        </div>
        
      </div>
    )
  }
}

export default OrganizationSideBar;

