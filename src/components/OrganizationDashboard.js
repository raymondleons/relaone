import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../assets/css/_style.scss';
import noevent from '../assets/images/noevent.png'

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
            <a>Select All</a>
            <a>Delete</a>
            <Button color="primary">Create Event</Button>
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

