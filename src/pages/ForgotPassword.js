import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import bluelogo from '../assets/images/blue-logo.png';
import lock from '../assets/images/lock.png';
import '../assets/css/_style.scss'

class ForgotPassword extends Component {
  render() {
    return (
      <div className="register-success">
        <Container>
            <Row>
                <div className="logo-center">
                    <img src={bluelogo} alt="RelaOne Logo"></img>
                </div>
            </Row>
            <Row>
              <Col md="2"></Col>
              <Col md="8">
                <div className="register-success-content">
                  <img src={lock} alt="check your email" className="icon-success"></img>
                  <h3>Forgot your password?</h3>
                  <p>Enter your email address below and we will get you back on track.</p>
                  <input type="email" placeholder="user@example.com"></input> 
                  <Button className="forgetpassword-button" color="primary">Send</Button>
                </div>
              </Col>
            </Row>
        </Container>
    </div>
    )
  }
}

export default ForgotPassword;

