import React, { Component } from 'react'
import {Row, Col, Container} from 'reactstrap'
import '../assets/css/_style2.scss';
import Header from '../layout/Header'
import ProfileBadge from '../layout/ProfileBadge'
import UserEvent from './UserEvent'
import OrganizationSideBar from '../layout/OrganizationSideBar';

export default class UserEventPage extends Component {
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
              <OrganizationSideBar />
            </Col>
            <Col sm="12" md="8">
              <UserEvent />
            </Col>
          </Row>
        </Container>      
      </div>
    )
  }
}
