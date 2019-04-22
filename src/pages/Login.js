import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { signInOrganization } from '../actions/organizationActions';

class LoginContoh extends Component {

  state = {
    username : '',
    password : ''
  } 

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.signInOrganization(this.state.username, this.state.password);
}

  render() {
    return (
      <div>
      <Form onSubmit={this.onSubmit}>
          <FormGroup>
              <Label for="exampleUserame">Organization Username</Label>
              <Input value={this.state.username} onChange={this.onChange} className="form-control" type="text" name="username" id="exampleUsername"/>
          </FormGroup>
          <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input value={this.state.password} onChange={this.onChange} type="password" name="password" id="examplePassword" />
          </FormGroup>
          <Button color="primary">Login</Button>
      </Form>        
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
        signInOrganization: (username, password) => { dispatch(signInOrganization(username, password)) }
    }
}

export default connect(null, mapDispatchToProps)(LoginContoh)

