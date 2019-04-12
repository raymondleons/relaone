import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import OrganizationProfile from '../components/OrganizationProfile';
import '../assets/css/_style.scss';
import ProfileBadge from '../layout/ProfileBadge';
import Header from '../layout/Header';
import OrganizationSideBar from '../layout/OrganizationSideBar';

class OrganizationProfilePage extends Component {
  render() {
    return (
      <div className="update-organization-profile">
        <Container>
          <Row>
            <Header/>
          </Row>
          <Row>
            <Col sm="12" md="4">
              <ProfileBadge></ProfileBadge>
              <OrganizationSideBar/>
            </Col>
            <Col sm="12" md="8">
              <OrganizationProfile/>  
            </Col>
          </Row>
        </Container>      
      </div>
    )
  }
}

export default OrganizationProfilePage;

