import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../assets/css/_style.scss';
import ProfileBadge from '../layout/ProfileBadge';
import Header from '../layout/Header';
import CreateEvent from '../components/CreateEvent';

class UpdateOrganizationProfile extends Component {
  render() {
    return (
      <div className="create-event">
        <Container>
          <Row>
            <Header/>
          </Row>
          <Row>
            <Col sm="12" md="4">
              <ProfileBadge></ProfileBadge>
            </Col>
            <Col sm="12" md="8">
                <CreateEvent/>
            </Col>
          </Row>
        </Container>      
      </div>
    )
  }
}

export default UpdateOrganizationProfile;

