import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Header from '../layout/Header'
import ProfileBadge from '../layout/ProfileBadge'
import ProfileDetail from '../components/ProfilePageDetail.js'

export default class ProfilePage extends Component {
  render() {
    return (
      <div>
        <Container>
           <Header/>
           <Row>
            <Col sm="12" md="4">
              <ProfileBadge></ProfileBadge>
            </Col>
            <Col sm="12" md="8">
                <ProfileDetail/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
