import React, { Component } from 'react'
import {Row, Col, Container} from 'reactstrap'
import Header from '../layout/Header'
import ProfileBadge from '../layout/ProfileBadge'
import UserEventDetails from './UserEventDetails'

export default class UserEventDetailsPage extends Component {
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
              <UserEventDetails />
            </Col>
          </Row>
        </Container>      
      </div>
    )
  }
}
