import React, { Component } from 'react'
import {Row, Col, Container} from 'reactstrap'
import '../assets/css/_style2.scss';
import Header from '../layout/Header'
import ProfileBadge from '../layout/ProfileBadge'
import UserCertificationDetails from './UserCertificationDetails'
import UserSideBar from '../layout/UserSideBar'

export default class UserCertificationDetailsPage extends Component {
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
              <UserSideBar />
            </Col>
            <Col sm="12" md="8">
              <UserCertificationDetails />
            </Col>
          </Row>
        </Container>      
      </div>
    )
  }
}
