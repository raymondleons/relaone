import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, FormText, Button, Row, Col } from 'reactstrap';
import {Link, Redirect} from 'react-router-dom'
import '../assets/css/_style2.scss';
import Img from '../assets/images/image1.png'
import Logo from '../assets/images/blue-logo.png'
import { signup } from "../actions/organizationActions";
import { connect } from "react-redux";


class OrganizationRegister extends Component {

  componentDidMount(){
    document.title= "RelaOne | Register for Organization"
}

  constructor(props) {
    super(props)
    this.state = {  
      organizationName: '',
      username:'',
      phoneNumber: '',
      email: '',
      password: ''
    };
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.signup(
      this.state.organizationName,
      this.state.username,
      this.state.phoneNumber,
      this.state.email,
      this.state.password
    );
    this.setState({
      organizationName: '',
      username:'',
      phoneNumber: '',
      email: '',
      password: '',
      redirect : true
    });
  };


  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/register/success"/>
    }
    return (
      <div className="container2">
        <div className=" my-4 logo" >
          <Link to="/"><img className="" src={Logo} alt=""/></Link>
        </div>
        <Row className="whitebg mbot">
          <Col md={6} className="nopadding">
            <img className="width" src={Img} alt=""/>
          </Col>
          <Col md={6} className="right">
            <Row className="box">
              <Form onSubmit={this.onSubmit}>
                <FormGroup className="form-group2">
                  <Label >Organization Name</Label>
                  <Input
                    onChange={this.onChange}
                    value={this.state.organizationName} 
                    className="input-border form-control2" 
                    type="text" 
                    name="organizationName" 
                    id="organizationName" 
                    placeholder="Your Organization" 
                  />
                </FormGroup>
                <FormGroup className="form-group2">
                  <Label >Username</Label>
                  <Input
                    onChange={this.onChange}
                    value={this.state.username} 
                    className="input-border form-control2" 
                    type="text" 
                    name="username" 
                    id="username" 
                    placeholder="Your Name" 
                  />
                </FormGroup>
                    <FormGroup className="form-group2">
                      <Label>Phone Number</Label>
                      <Input 
                      onChange={this.onChange}
                      value={this.state.phoneNumber}
                      className="input-border form-control2" 
                      type="text" 
                      
                      name="phoneNumber" 
                      id="phoneNumber" 
                      placeholder="Your Number" />
                    </FormGroup>
                    <FormGroup className="form-group2">
                      <Label >Email</Label>
                      <Input 
                      onChange={this.onChange}
                      value={this.state.email}
                      className="input-border form-control2" 
                      type="email" 
                      name="email" 
                      id="email" 
                      placeholder="Your Email" />
                    </FormGroup>
                    <FormGroup className="form-group2">
                      <Label >Password</Label>
                      <Input 
                      onChange={this.onChange}
                      value={this.state.password}
                      className="input-border form-control2" 
                      type="password" 
                      name="password" 
                      id="password" 
                      placeholder="Your Password" />
                    </FormGroup>
                    <FormText>
                      Creating an account means you’re okay with our <Link to='/terms' target='_blank' rel="noopener">Terms and Conditons</Link>
                    </FormText>
                    <Button color="primary button-right mt-3">Sign Up</Button>
                    <FormText className=" clear text-center mtop">
                      Already have an account? <Link to='/Login'>Login here</Link>
                      , Or <Link to='/user/register'>Register as User.</Link>
                    </FormText>
                  </Form>
                </Row>
              </Col>
            </Row>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signup: (organizationName, username, phoneNumber, email, password) => {
      dispatch(signup(organizationName, username, phoneNumber, email, password))}
     
    
  };
};

export default connect(
  null,
  mapDispatchToProps
)(OrganizationRegister);
