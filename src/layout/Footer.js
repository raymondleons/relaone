import React, { Component } from 'react';
import '../assets/css/_style.scss';
import bluelogo from '../assets/images/blue-logo.png';
import {
    Container,
    Row,
    Col
  } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
         <Container>
             <Row>
                <Col lg="3"><div><img src={bluelogo} alt="RelaOne Logo"></img></div></Col>
                <Col lg="5"></Col>
                <Col lg="4"><div><p>Find us on : Facebook Twitter Instagram</p></div></Col>
            </Row>
            <Row>
              <Col lg="4">
                <br></br>
                <p>RelaOne is a service to facilitate both for volunteer and organization to meet needs related to voluntary activity</p>
                <br></br>
                <p>Indonesia</p>
              </Col>
              <Col lg="2"></Col>
              <Col lg="2">
                <p><b>TAKE ACTION</b></p>
                <p>Join Event</p>
                <p>Find Volunteer</p>
              </Col>
              <Col lg="2">
                <p><b>LEARN MORE</b></p>
                <p>How to Join</p>
              </Col>
              <Col lg="2">
                <p><b>CONNECT</b></p>
                <p>Contact Us</p>
              </Col>
            </Row>
             <hr></hr>
             <Row>
               <p className="footer-copyright">Copyright © 2019 RelaOne All Rights Reserved</p>
             </Row>
         </Container>
      </div>
    )
  }
}

export default Footer;

