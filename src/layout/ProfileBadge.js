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
          <Col xs="3" sm="3" md="4">
            <img className="organization-picture" src={this.state.photo} alt={this.state.name}></img>
          </Col>
          <Col xs="9" sm="9" md="8">
            <p className="profile-name"><b>{this.state.name}</b><br></br>Verified</p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ProfileBadge;

