import React, { Component } from 'react';
import { UncontrolledCollapse } from 'reactstrap';
import { Link as Links} from 'react-router-dom';

class OrganizationSideBar extends Component {
  render() {
    return (
      <div className="side-bar">
        <div className="side-bar-list">
          <div className="side-bar-item"><Links className="side-bar-link" to="/dashboard">Dashboard</Links></div>

          <div className="side-bar-item" id="event">Event</div>
            <UncontrolledCollapse toggler="#event">
              <div className="side-bar-subitem"><Links className="side-bar-link" to="/user/event">Browse</Links></div>
              <div className="side-bar-subitem">Registered</div>
            </UncontrolledCollapse>
        

          <div className="side-bar-item"><Links className="side-bar-link" to="/article">Article</Links></div>

          <div className="side-bar-item" id="setting">Setting</div>
            <UncontrolledCollapse toggler="#setting">
              <div className="side-bar-subitem">
                <Links className="side-bar-link" to="/user/update-profile">
                  Edit Profile
                </Links>
              </div>
            </UncontrolledCollapse>

        </div>
<<<<<<< HEAD
        
=======
        <div className="side-bar-item"><Links className="side-bar-link" to="/user/certification">Certificate</Links></div>
>>>>>>> 8999aca0223cb4d315b6edb9d78e14964181dec1
        
      </div>
    )
  }
}

export default OrganizationSideBar;

