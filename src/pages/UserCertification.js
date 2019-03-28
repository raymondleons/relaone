import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';
import test from '../assets/images/bg-contactus.jpg'

export default class UserCertification extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={3}>
          </Col>
          <Col className="padd" sm={9}>
            <Row>
              <Col sm="6">
                <CardImg top width="100%" src={test} alt="Card image cap" />
                <Card body>
                  <CardTitle>Orgganisasi</CardTitle>
                  <CardText>nama event</CardText>
                  <Button color="primary">Details</Button>
                </Card>
              </Col>
              <Col  sm="6">
                <CardImg top width="100%" src={test} alt="Card image cap" />
                <Card body>
                  <CardTitle>Organisasi A</CardTitle>
                  <CardText>nama event</CardText>
                  <Button color="primary">Details</Button>
                </Card>
              </Col>
              
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
