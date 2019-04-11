import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../assets/css/_style.scss';
import noevent from '../assets/images/noevent.png';
import { Link } from 'react-router-dom';

class FormOrganizationProfile extends Component {
  render() {
    return (
      <div className="organization-dashboard">
        <div className="content-title content-header">
            <div>
              <h3>Event</h3>
            </div>
            <div className="event-count">
                <h4>0</h4>
                <p>EVENT FOUND</p>
            </div>
        </div>
        <div className="event-action">
            <Button color="primary"><Link to="/create-event" className="create-event-button">Create Event</Link></Button>
        </div>
        <div className="no-event">
            <img src={noevent} alt="no event" className="no-event-icon"/>
            <h3>You have no event yet.</h3>
            <p>Please create an voluntary event to find volunteers.</p>
        </div>
        
      </div>
    )
  }
}

export default FormOrganizationProfile;

