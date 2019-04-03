import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import bluelogo from '../assets/images/blue-logo.png';
import updatesuccess from '../assets/images/update-profile-success.png';
import '../assets/css/_style.scss';
import { Link as Links } from 'react-router-dom';

class UpdateUserProfileSuccess extends Component {
  render() {
    return (
      <div className="update-organization-profile">
        <Container>
            <Row>
                <div className="logo-center">
                  <Links to="/">
                    <img src={bluelogo} alt="RelaOne Logo"></img>
                  </Links>
                </div>
            </Row>
            <Row>
              <Col md="2"></Col>
              <Col md="8">
                <div className="update-success-content">
                  <img src={updatesuccess} alt="wait for verification" className="icon-success"></img>
                  <h3 className="bold-text">Thank you for updating your profile.</h3>
                  <p>Complete profile will make it easier for Organization to review your profile</p>
                  <Button color="primary">
                    <Links className="button-text" to="/dashboard">
                      Dashboard
                    </Links>
                  </Button>
                </div>
              </Col>
            </Row>
        </Container>
    </div>
    )
  }
}

export default UpdateUserProfileSuccess;