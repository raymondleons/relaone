import React, { Component } from 'react';
import { Form, Input, Container, Row, Col, Button } from 'reactstrap';
import bluelogo from '../assets/images/blue-logo.png';
import lock from '../assets/images/lock.png';
import '../assets/css/_style.scss'
import { forgotPassword } from '../actions/organizationActions';
import { connect } from 'react-redux';

class ForgotPassword extends Component {

  state = {
    email : ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.forgotPassword(this.state.email)

  }
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
                <Form onSubmit={this.onSubmit}>
                <div className="register-success-content">
                  <img src={lock} alt="check your email" className="icon-success"></img>
                  <h3>Forgot your password?</h3>
                  <p>Enter your email address below and we will get you back on track.</p>
                  <Input onChange={this.onChange} name="email" type="email" placeholder="user@example.com"></Input> 
                  <Button className="forgetpassword-button" color="primary">Send</Button>
                </div>
                </Form>
              </Col>
            </Row>
        </Container>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    forgotPassword: (email) => { dispatch(forgotPassword(email))}
  }
}

export default connect(null, mapDispatchToProps)(ForgotPassword);

