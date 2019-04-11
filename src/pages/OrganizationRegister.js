import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, FormText, Button, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom'
import '../assets/css/_style2.scss';
import Img from '../assets/images/image1.png'
import Logo from '../assets/images/blue-logo.png'
// import { signup } from "../actions/Actions";
import axios from 'axios'
import { connect } from "react-redux";


export default class OrganizationRegister extends Component {
  render() {
    return (
      <div className="container2">
        <div className=" my-4 logo" >
        <Link to="/"><img className="" src={Logo} alt=""/></Link>
        </div>
        <Row className="whitebg">
          <Col md={6} className="nopadding">
            <img className="width" src={Img} alt=""/>
          </Col>
          <Col md={6} className="right">
          <Row className="box">
                  <Form>
                    <FormGroup className="form-group2">
                      <Label >Organization Name</Label>
                      <Input className="input-border form-control2" type="text" name="organizationname" id="organizationname" placeholder="Your Organization" />
                    </FormGroup>
                    <FormGroup className="form-group2">
                      <Label>Phone Number</Label>
                      <Input className="input-border form-control2" type="text" pattern="[0-9]{9-10}" name="phoneNumber" id="phoneNumber" placeholder="Your Number" />
                    </FormGroup>
                    <FormGroup className="form-group2">
                      <Label >Email</Label>
                      <Input className="input-border form-control2" type="email" name="email" id="email" placeholder="Your Email" />
                    </FormGroup>
                    <FormGroup className="form-group2">
                      <Label >Password</Label>
                      <Input className="input-border form-control2" type="password" name="password" id="password" placeholder="Your Password" />
                    </FormGroup>
                    <FormText>
                      Creating an account means you’re okay with our <Link to='/terms' target='_blank' rel="noopener">Terms and Conditons</Link>
                    </FormText>
                    <Button color="primary button-right mt-3">Sign Up</Button>
                    <FormText className=" clear text-center mtop">
                      Already have an account? <Link to='/Login'>Login here.</Link>
                    </FormText>
                  </Form>
                </Row>
                </Col>
                </Row>
      </div>
    )
  }
}
