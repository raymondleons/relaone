import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Header from '../layout/Header'
import ProfileBadge from '../layout/ProfileBadge'
import SideNavBar from '../layout/SideNavBar'
import Dashboards from '../layout/DasboardDetail'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
          <Container>
            <Row>
              <Header/>
              <Col md="4">
                <ProfileBadge/>
                <SideNavBar/>
              </Col>
              <Col md="8">
                <Dashboards/>
              </Col>
            </Row>
          </Container>
      </div>
    )
  }
}
