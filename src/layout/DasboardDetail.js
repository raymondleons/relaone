import React, { Component } from 'react'
import { Alert, Button } from 'reactstrap'
import noevent from '../assets/images/noevent.png'

export default class DasboardDetail extends Component {
  render() {
    return (
      <div className="profile-detail">
      <div className="content-title">
          <h3 className="title bold-text">Dashboard</h3>
      </div>
      <br/>
      <div>
        <Alert color="danger">Silahkan verifikasi email terlebih dahulu! </Alert>
      </div>
      <div className="no-event">
            <img src={noevent} alt="no event" className="no-event-icon"/>
            <h3>You have no activity yet.</h3>
            <p>It looks like you haven't participated in any of the events. Let's participate!</p>
        </div>
      </div>
    )
  }
}
