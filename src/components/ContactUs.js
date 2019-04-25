import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import '../assets/css/_style.scss'


class ContactUs extends Component {
  render() {
    return (
      <div className="contact-us" id="contact-us" name="contact-us">
        <Container>
          <Row>
              <Col sm="0" md="3" lg="4"></Col>
              <Col sm="12" md="6" lg="4">
                <h2 className="mb-5">Contact Us</h2>
                <div>
                  <h2>RelaOne Main Office</h2>
                  <p style={{fontSize:"20px"}}>Nongsa Digital Park
                  <br/>Jl. Hang Lekiu No.KM 2
                  <br/>Sambau, Nongsa, Batam, Kepulauan Riau 29465
                  <br/>Indonesia</p>
                  <p style={{fontSize:"20px"}}>
                  (+62) 778 2374043
                  relaonebinar@gmail.com
                  </p>
                </div>
              </Col>
          </Row>
        </Container>
      </div>  
    )
  }
}

export default ContactUs;

