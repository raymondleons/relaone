import React, { Component } from 'react'
import {Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from 'reactstrap'
import test from '../assets/images/bg-contactus.jpg'

export default class UserEventDetails extends Component {
  render() {
    return (
      <div>
          <Card>
            <CardImg top width="100%" src={test} alt="Card image cap" />
            <CardBody>
              <CardTitle>Nama Event</CardTitle>
              <CardSubtitle>Location, Batam, blablabla</CardSubtitle>
              <CardSubtitle>Oleh: Nama Org PT.blabla</CardSubtitle>
              <CardText>desc Lorem50</CardText>
              <Button>Join</Button>
            </CardBody>
          </Card>
      </div>
    )
  }
}
