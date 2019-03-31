import React, { Component } from 'react'
import { Row, Col, Card, CardImg, CardTitle } from 'reactstrap'
import usersfoto from '../assets/images/users.png'

export default class ProfilePageDetail extends Component {
  render() {
    return (
        <div className="profile-detail">
        <div className="content-title">
            <h3 className="title bold-text">Profile</h3>
        </div>
        <br></br>
        <Row>
            <Col md="4">
                <Card>
                    <CardImg src={usersfoto}></CardImg>
                </Card>
            </Col>
            <Col md="8">
                <Card>
                    <CardTitle><h4>Name : Mark Zuckerberg</h4></CardTitle>
                </Card>
            </Col>
        </Row>
      </div>
    )
  }
}
