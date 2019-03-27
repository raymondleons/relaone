import React, { Component } from 'react'
import orgprofpic from '../assets/images/organization1.png'
import {
  Row,
  Col
} from 'reactstrap';

class ProfileBadge extends Component {
    state = {
        photo : orgprofpic,
        name : 'BPBD',
        verified : true
    }
  
    isVerified = () => this.state.varified ?
      <p>Verified</p> : <p></p>

  render() {
    return (
      <div className="profile-badge">
        <Row>
          <Col md="4">
            <img className="organization-picture" src={this.state.photo} alt={this.state.name}></img>
          </Col>
          <Col md="8">
            <p><b>{this.state.name}</b><br></br>Verified</p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ProfileBadge;