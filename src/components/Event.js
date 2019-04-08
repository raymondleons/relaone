import React, { Component } from 'react'
import { Card, Row, Col, CardImg, CardBody, CardTitle, CardText, Pagination, PaginationItem, PaginationLink, Button } from 'reactstrap'
import Banjir from '../assets/images/event/banjir.jpg'

export default class Event extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <h5 className="bold-text">Event</h5>
      </div>
      <div>
      <Card>
          <Row>
            <Col md="4">
                <CardImg className="article-image" src={Banjir} alt="article-1"></CardImg>
            </Col>
            <Col md="8">
                <CardBody>
                    <CardTitle><h4>Bantu Banjir Bandang Yang Melanda Papua!</h4></CardTitle>
                    <CardText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam non error officiis soluta necessitatibus nemo.</CardText>
                    <CardText className="text-muted">Created by Mitra Tarigan</CardText>
                </CardBody>
            </Col>
          </Row>
      </Card>
      </div>
      </div>
    )
    
  }
}
