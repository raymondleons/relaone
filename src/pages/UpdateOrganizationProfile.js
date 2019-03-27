import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import FormOrganizationProfile from '../components/FormOrganizationProfile';
import bluelogo from '../assets/images/blue-logo.png'
import '../assets/css/_style.scss'
import ProfileBadge from '../components/ProfileBadge';

class UpdateOrganizationProfile extends Component {
  render() {
    return (
      <div className="update-organization-profile">
        <Container>
          <Row>
            <div className="update-profile-header">
              <img src={bluelogo} alt='BPBD'></img>
            </div>
          </Row>
          <Row>
            <Col md="3">
              <ProfileBadge></ProfileBadge>
            </Col>
            <Col md="9">
              <FormOrganizationProfile/>  
            </Col>
          </Row>
        </Container>      
      </div>
    )
  }
}

export default UpdateOrganizationProfile;

