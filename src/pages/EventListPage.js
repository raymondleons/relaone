import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../assets/css/_style.scss';
import ProfileBadge from '../layout/ProfileBadge';
import Header from '../layout/Header';
import EventList from '../components/EventList';
import OrganizationSideBar from '../layout/OrganizationSideBar';

class EventListPage extends Component {
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
              <OrganizationSideBar/>
            </Col>
            <Col sm="12" md="8">
                <EventList/>
            </Col>
          </Row>
        </Container>      
      </div>
    )
  }
}

export default EventListPage;

