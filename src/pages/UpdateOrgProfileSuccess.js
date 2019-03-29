import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import bluelogo from '../assets/images/blue-logo.png';
import updatesuccess from '../assets/images/update-profile-success.png';
import '../assets/css/_style.scss'

class UpdateOrgProfileSuccess extends Component {
  render() {
    return (
      <div className="update-organization-profile">
        <Container>
            <Row>
                <div className="logo-center">
                    <img src={bluelogo} alt="RelaOne Logo"></img>
                </div>
            </Row>
            <Row>
              <Col md="2"></Col>
              <Col md="8">
                <div className="update-success-content">
                  <img src={updatesuccess} alt="wait for verification" className="icon-success"></img>
                  <h3><b>Thank you for updating your profile.</b></h3>
                  <p>Your profile will be reviewed by our team.</p>
                  <br></br>
                  <Button color="primary">Dashboard</Button>
                </div>
              </Col>
            </Row>
        </Container>
    </div>
    )
  }
}

export default UpdateOrgProfileSuccess;

