import React, { Component } from 'react';
import { UncontrolledCollapse } from 'reactstrap';
import { Link as Links} from 'react-router-dom';

class OrganizationSideBar extends Component {
  render() {
    return (
      <div className="side-bar">
        <div className="side-bar-list">
          <div className="side-bar-item"><Links className="side-bar-link" to="/user/dashboard">Dashboard</Links></div>

          <div className="side-bar-item" id="event">Event</div>
            <UncontrolledCollapse toggler="#event">
              <div className="side-bar-subitem"><Links className="side-bar-link" to="/user/event">Browse</Links></div>
              <div className="side-bar-subitem"><Links className="side-bar-link" to="/user/event/joined">Registered</Links></div>
            </UncontrolledCollapse>
        

          <div className="side-bar-item"><Links className="side-bar-link" to="/user/article">Article</Links></div>

          <div className="side-bar-item" id="setting">Setting</div>
            <UncontrolledCollapse toggler="#setting">
              <div className="side-bar-subitem">
                <Links className="side-bar-link" to="/user/profile/update">
                  Edit Profile
                </Links>
              </div>
              <div className="side-bar-subitem">
              <Links className="side-bar-link" to="/user/photo/update">
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

