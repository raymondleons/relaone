import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Header from '../layout/Header'
import ProfileBadge from '../layout/ProfileBadge'
import SideNavBar from '../layout/SideNavBar'
import ListEvent from '../components/FormEventListOrganization'

export default class ListPendaftarEventOrganisasi extends Component {
  render() {
    return (
      <div>
        <Container>
            <Row>
            <Header/>
        </Row>
        <Row>
        <Col sm="12" md="4">
              <ProfileBadge></ProfileBadge>
              <SideNavBar></SideNavBar>
        </Col>
        <Col sm="12" md="8">
            <ListEvent/>
        </Col>
        </Row>
        </Container>
      </div>
    )
  }
}
