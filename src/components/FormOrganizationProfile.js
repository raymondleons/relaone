import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../assets/css/_style.scss';
import { connect } from 'react-redux';
import { getProfile, editProfile } from '../actions/organizationActions';

class FormOrganizationProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      organizationName : props.organizationName,
      username : props.username,
      email : props.email,
      phoneNumber : props.phoneNumber
    }
  }

  componentWillMount(){
    this.props.getProfile();
  }


  componentWillReceiveProps(props){
    this.setState({
      organizationName : props.organizationName,
      username : props.username,
      email : props.email,
      phoneNumber : props.phoneNumber
  })
  }

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.editProfile(this.state.organizationName, this.state.username, this.state.email, this.state.phoneNumber);
}

  render() {

    return (
      <div className="form-organization-profile">
        <div>
            <h2><b>Update Profile</b></h2>
        </div>
        <hr></hr>
        <Form onSubmit={this.onSubmit}>
            <FormGroup>
                <Label for="exampleName">Organization Name</Label>
                <Input defaultValue={this.state.organizationName} onChange={this.onChange} className="form-control" type="text" name="organizationName" id="exampleName"/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleUsername">Username</Label>
                <Input defaultValue={this.state.username} onChange={this.onChange} type="text" name="username" id="exampleName" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input defaultValue={this.state.email} onChange={this.onChange} type="email" name="email" id="exampleEmail"/>
            </FormGroup>
            <FormGroup>
                <Label for="examplePhone">Phone Number</Label>
                <Input defaultValue={this.state.phoneNumber} onChange={this.onChange} type="text" name="phoneNumber" id="examplePhone"/>
            </FormGroup>
            <Button color="primary">Save</Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    organizationName: state.orgProfile.organizationName,
    username: state.orgProfile.username,
    email: state.orgProfile.email,
    phoneNumber : state.orgProfile.phoneNumber,
    confirmed: state.orgProfile.confirmed
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfile: () => { dispatch(getProfile()) },
    editProfile: (organizationName, username, email, phoneNumber) => { dispatch(editProfile(organizationName, username, email, phoneNumber))}

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormOrganizationProfile);



