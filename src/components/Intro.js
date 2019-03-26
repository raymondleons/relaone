import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'reactstrap';
import phone from '../assets/images/phone.png';
import '../assets/css/_style.scss';

class Intro extends Component {
  render() {
    return (
      <div className="section intro" id="intro" name="intro">
          <Container>
            <Row>
                <Col sm="0" md="1" lg="1"></Col>
                <Col sm="12" md="5" lg="5" className="intro-text">
                    <h1>What is RelaOne?</h1>
                    <h5><b>RelaOne</b> is an application that makes it easy to find activities that best suit the interests and abilities of volunteers.</h5>
                    <h5><b>RelaOne for Organization</b> is a services for organization or community that facilitate the seach of volunteers.</h5>
                    <Button color="warning">Get it on Playstore</Button>
                </Col>
                <Col sm="0" md="1" lg="1"></Col>
                <Col sm="12" md="5" lg="4">
                    <img src={phone} alt="RelaOne Application" className="intro-image"/>
                </Col>
            </Row>
          </Container>
      </div>
    )
  }
}

export default Intro;

