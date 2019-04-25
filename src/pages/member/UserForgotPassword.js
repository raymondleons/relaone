import React, { Component } from 'react';
import { Form, Input, Container, Row, Col, Button } from 'reactstrap';
import bluelogo from '../../assets/images/blue-logo.png';
import lock from '../../assets/images/lock.png';
import '../../assets/css/_style.scss'
import { forgotPassword } from '../../actions/memberActions';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

class ForgotPassword extends Component {

  componentDidMount(){
    window.scrollTo(0, 0);
    document.title = "RelaOne | Forgot Password";
  }
  
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
                    <Link to="/"><img src={bluelogo} alt="RelaOne Logo"></img></Link>
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
                  <Row>
                    <Col md="10">
                      <Input onChange={this.onChange} name="email" type="email" placeholder="user@example.com"></Input>                     
                    </Col>
                    <Col md="2">
                      <Button className="forgetpassword-button" color="primary">Send</Button>                    
                    </Col>
                  </Row>
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

