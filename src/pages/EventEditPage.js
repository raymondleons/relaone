import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
// import EventEdit from '../components/EventEdit';
import Edit from '../components/Edit';
import '../assets/css/_style.scss';
import ProfileBadge from '../layout/ProfileBadge';
import Header from '../layout/Header';
import OrganizationSideBar from '../layout/OrganizationSideBar';

class EventEditPage extends Component {
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
              {/* <EventEdit/>   */}
              <Edit/>
            </Col>
          </Row>
        </Container>      
      </div>
    )
  }
}

export default EventEditPage;

