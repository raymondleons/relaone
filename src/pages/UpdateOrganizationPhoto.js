import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import FormOrganizationPhoto from '../components/FormOrganizationPhoto';
import '../assets/css/_style.scss';
import ProfileBadge from '../layout/ProfileBadge';
import Header from '../layout/Header';
import OrganizationSideBar from '../layout/OrganizationSideBar';

class UpdateOrganizationPhoto extends Component {
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
              <FormOrganizationPhoto/>  
            </Col>
          </Row>
        </Container>      
      </div>
    )
  }
}

export default UpdateOrganizationPhoto;

