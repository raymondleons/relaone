import React, { Component } from 'react'
import {Col, Row, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap'
import test from '../assets/images/bg-contactus.jpg'

export default class UserEvent extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={3}>
            <p>nav</p>
          </Col>
          <Col className="padd" sm={9}>
          <Card>
            <CardImg top width="100%" src={test} alt="Card image cap" />
            <CardBody>
              <CardTitle>Nama Event</CardTitle>
              <CardSubtitle>Location, Batam, blablabla</CardSubtitle>
              <CardSubtitle>Oleh: Nama Org PT.blabla</CardSubtitle>
              <Button>Join</Button>
            </CardBody>
          </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
