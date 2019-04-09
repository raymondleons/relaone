import React, { Component } from 'react'
import {Row, Col, Container} from 'reactstrap'
import '../assets/css/_style2.scss';
import Header from '../layout/Header'
import UserProfileBadge from '../layout/UserProfileBadge'
import UserEvent from './UserEvent'
import UserSideBar from '../layout/UserSideBar'

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
              <UserProfileBadge></UserProfileBadge>
              <UserSideBar />
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
