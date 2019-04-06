import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';
import {Link} from 'react-router-dom'
import '../assets/css/_style2.scss'
import test2 from '../assets/images/bg-contactus.jpg'

export default class UserCertification extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm="4">
            <CardImg  src={test2} alt="Card image cap" />
              <Card body>
                <CardTitle>Orgganisasi</CardTitle>
                <CardText>nama event</CardText>
                <Button color="primary">Details</Button>
              </Card>
            </Col>
            <Col  sm="4">
              <CardImg top width="100%" src={test2} alt="Card image cap" />
              <Card body>
                <CardTitle>Organisasi A</CardTitle>
                <CardText>nama event</CardText>
                <Button color="primary">
                  <Link to='/user/certification/details'>Details</Link>
                </Button>
              </Card>
            </Col>
            <Col  sm="4">
              <CardImg top width="100%" src={test2} alt="Card image cap" />
              <Card body>
                <CardTitle>Peran</CardTitle>
                <CardText>nama event</CardText>
                <Button color="primary">Details</Button>
              </Card>
            </Col>
          </Row>
      </div>
    )
  }
}
