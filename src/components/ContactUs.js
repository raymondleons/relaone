import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, FormGroup, Input, Button } from 'reactstrap';
import '../assets/css/_style.scss'


class ContactUs extends Component {
  render() {
    return (
      <div className="contact-us section">
        <Container>
          <Row>
              <Col md="4"></Col>
              <Col md="4">
                <h2 className="mb-5">Contact Us</h2>
                <FormGroup>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="enter your email"
                        className="mb-3"
                    />
                    <Input type="textarea" name="text" id="exampleText" rows="8" placeholder="your messages" className="mb-3" />
                    <Button color="warning">Submit</Button>
                </FormGroup>
              </Col>
          </Row>
        </Container>
      </div>  
    )
  }
}

export default ContactUs;