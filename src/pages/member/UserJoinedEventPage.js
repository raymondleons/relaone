import React, { Component } from 'react'
import {Container, Row, Col} from 'reactstrap'
import Header from '../../layout/Header'
import UserProfileBadge from '../../layout/UserProfileBadge'
import UserJoinedEvent from '../../components/member/UserJoinedEvent'
import UserSideBar from '../../layout/UserSideBar'

export default class UserJoinedEventPage extends Component {
  render() {
    return (
      <div>
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
              <UserJoinedEvent />
            </Col>
          </Row>
        </Container>      
      </div>
      </div>
    )
  }
}
