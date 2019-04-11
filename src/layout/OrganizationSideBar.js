import React, { Component } from 'react';
import { UncontrolledCollapse } from 'reactstrap';
import { Link as Links} from 'react-router-dom';

class OrganizationSideBar extends Component {
  render() {
    return (
      <div className="side-bar">
        <div className="side-bar-list">
          <div className="side-bar-item"><Links className="side-bar-link" to="/event">Event</Links></div>
          <div className="side-bar-item" id="volunteer">Volunteer</div>
            <UncontrolledCollapse toggler="#volunteer">
              <div className="side-bar-subitem">Registered</div>
              <div className="side-bar-subitem">Accepted</div>
              <div className="side-bar-subitem">Rejected</div>
            </UncontrolledCollapse>
          <div className="side-bar-item" id="setting">Setting</div>
            <UncontrolledCollapse toggler="#setting">
              <div className="side-bar-subitem">
                <Links className="side-bar-link" to="/organization/update-profile">
                  Edit Profile
                </Links>
              </div>
            </UncontrolledCollapse>
        </div>
        
      </div>
    )
  }
}

export default OrganizationSideBar;

