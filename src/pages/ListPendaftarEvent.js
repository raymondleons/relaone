import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Header from '../layout/Header'
import ProfileBadge from '../layout/ProfileBadge';
import ListPendaftar from '../components/ListEventRegister'

export default class ListPendaftarEvent extends Component {
  render() {
    return (
      <div>
        <Container>
            <Row>
                <Header/>
            </Row>
            <Row>
                <Col md="4">
                    <ProfileBadge></ProfileBadge>
                </Col>
                <Col md="8">
                    <ListPendaftar/>
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}

