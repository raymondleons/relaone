import React, { Component } from 'react'
import {Col, Row, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap'
import test from '../assets/images/bg-contactus.jpg'

export default class UserEvent extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={6}>
          <Card className="mbot">
              <CardImg top width="100%" src={test} alt="Card image cap" />
              <CardBody>
                <CardTitle>Nama Event</CardTitle>
                <hr />
                <CardSubtitle>Oleh: Nama Org PT.blabla</CardSubtitle>
                <CardSubtitle>Location, Batam, blablabla</CardSubtitle>
                <CardSubtitle>Periode: 4 jam</CardSubtitle>
                <hr />
                <CardSubtitle>Due Date : 12345678</CardSubtitle>
                <Row>
                  <Col sm={6}>
                    <Button block color='primary'>More Details</Button>
                  </Col>
                  <Col sm={6}>
                    <Button block color='primary'>Join Now!</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm={6}>
          <Card className="mbot">
              <CardImg top width="100%" src={test} alt="Card image cap" />
              <CardBody>
                <CardTitle>Nama Event</CardTitle>
                <hr />
                <CardSubtitle>Oleh: Nama Org PT.blabla</CardSubtitle>
                <CardSubtitle>Location, Batam, blablabla</CardSubtitle>
                <CardSubtitle>Periode: 4 jam</CardSubtitle>
                <hr />
                <CardSubtitle>Due Date : 12345678</CardSubtitle>
                <Row>
                  <Col sm={6}>
                    <Button block color='primary'>More Details</Button>
                  </Col>
                  <Col sm={6}>
                    <Button block color='primary'>Join Now!</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm={6}>
          <Card className="mbot">
              <CardImg top width="100%" src={test} alt="Card image cap" />
              <CardBody>
                <CardTitle>Nama Event</CardTitle>
                <hr />
                <CardSubtitle>Oleh: Nama Org PT.blabla</CardSubtitle>
                <CardSubtitle>Location, Batam, blablabla</CardSubtitle>
                <CardSubtitle>Periode: 4 jam</CardSubtitle>
                <hr />
                <CardSubtitle>Due Date : 12345678</CardSubtitle>
                <Row>
                  <Col sm={6}>
                    <Button block color='primary'>More Details</Button>
                  </Col>
                  <Col sm={6}>
                    <Button block color='primary'>Join Now!</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm={6}>
            <Card className="mbot">
              <CardImg top width="100%" src={test} alt="Card image cap" />
              <CardBody>
                <CardTitle>Nama Event</CardTitle>
                <hr />
                <CardSubtitle>Oleh: Nama Org PT.blabla</CardSubtitle>
                <CardSubtitle>Location, Batam, blablabla</CardSubtitle>
                <CardSubtitle>Periode: 4 jam</CardSubtitle>
                <hr />
                <CardSubtitle>Due Date : 12345678</CardSubtitle>
                <Row>
                  <Col sm={6}>
                    <Button block color='primary'>More Details</Button>
                  </Col>
                  <Col sm={6}>
                    <Button block color='primary'>Join Now!</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
