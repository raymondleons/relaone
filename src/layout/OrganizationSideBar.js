import React, { Component } from 'react';
import { UncontrolledCollapse } from 'reactstrap';
import { Link as Links } from 'react-router-dom';

class OrganizationSideBar extends Component {
  render() {
    return (
      <div className="side-bar">
        <div className="side-bar-list">
          <div className="side-bar-item" id="volunteer">Volunteer</div>
            <UncontrolledCollapse toggler="#volunteer">
              <div className="side-bar-subitem">
                <Links className="side-bar-link" to="/organization/volunteer-list">Volunteer List</Links>
              </div>

              <div className="side-bar-subitem"><Links className="side-bar-link" to="/organization/volunteer">Applicant</Links></div>
    
            </UncontrolledCollapse>
          <div className="side-bar-item" id="event">Event</div>
            <UncontrolledCollapse toggler="#event">
              <div className="side-bar-subitem">
                <Links className="side-bar-link" to="/organization/event">Event List</Links>
              </div>
              <div className="side-bar-subitem">
                <Links className="side-bar-link" to="/organization/create-event">Create Event</Links>
              </div>
            </UncontrolledCollapse>
          <div className="side-bar-item"><Links className="side-bar-link" to="/organization/article">Article</Links></div>
          <div className="side-bar-item" id="setting">Setting</div>
            <UncontrolledCollapse toggler="#setting">
              <div className="side-bar-subitem">
                <Links className="side-bar-link" to="/organization/update-profile">
                  Edit Profile
                </Links>
              </div>
              <div className="side-bar-subitem">
                <Links className="side-bar-link" to="/organization/update-photo">
                  Edit Photo
                </Links>
              </div>
            </UncontrolledCollapse>
        </div>
        
      </div>
    )
  }
}

export default OrganizationSideBar;

