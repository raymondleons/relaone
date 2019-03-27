import React from 'react';
import { Form, FormGroup, Label, Input, FormText, TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import '../assets/css/_style.scss';
import Img from '../assets/images/image1.png'
import Logo from '../assets/images/blue-logo.png'


export default class Example extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className=" my-4 logo" >
            <img className="" src={Logo} alt=""/>
        </div>
        <Row>
          <Col md={6}>
            <img className="width" src={Img} alt=""/>
          </Col>
          <Col md={6} className="right">
            <Nav tabs>
              <NavItem className="nav-item">
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  Register as User
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  Register as Organization
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row className="box">
                  <Form className="width">
                    <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label >First Name</Label>
                          <Input className="input-border" type="text" name="firstname" id="firstname" placeholder="Your First Name" />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label >Last Name</Label>
                          <Input className="input-border" type="text" name="lastname" id="lastname" placeholder="Your Last Name" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <Label >Username</Label>
                      <Input  className="input-border" type="text" name="username" id="username" placeholder="Your Username" />
                    </FormGroup>
                    <FormGroup>
                      <Label >Email</Label>
                      <Input className="input-border" type="email" name="email" id="email" placeholder="Your Email" />
                    </FormGroup>
                    <FormGroup>
                      <Label >Password</Label>
                      <Input className="input-border" type="password" name="password" id="password" placeholder="Your Password" />
                    </FormGroup>
                    <Button color="primary">Submit</Button>
                    <FormText color="muted">
                      Already have an account? Login here.
                    </FormText>
                  </Form>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row className="box">
                  <Form>
                    <FormGroup className="form-group2">
                      <Label >Name</Label>
                      <Input className="input-border form-control2" type="text" name="name" id="name" placeholder="Your Name" />
                    </FormGroup>
                    <FormGroup className="form-group2">
                      <Label >Organization Name</Label>
                      <Input className="input-border form-control2" type="text" name="organizationname" id="organizationname" placeholder="Your Organization" />
                    </FormGroup>
                    <FormGroup className="form-group2">
                      <Label>Contact</Label>
                      <Input className="input-border form-control2" type="number" name="number" id="number" placeholder="Your Number" />
                    </FormGroup>
                    <FormGroup className="form-group2">
                      <Label >Email</Label>
                      <Input className="input-border form-control2" type="email" name="email" id="email" placeholder="Your Email" />
                    </FormGroup>
                    <FormGroup className="form-group2">
                      <Label >Password</Label>
                      <Input className="input-border form-control2" type="password" name="password" id="password" placeholder="Your Password" />
                    </FormGroup>
                    <FormGroup className="form-group2">
                      <Label>Address</Label>
                      <Input className="input-border form-control2" type="text" name="address" id="address" placeholder="1234 Main St"/>
                    </FormGroup>
                    <Button color="primary">SIGN UP</Button>
                    <FormText color="muted">
                      Already have an account? Login here.
                    </FormText>
                  </Form>
                </Row>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </div>
    );
  }
}
