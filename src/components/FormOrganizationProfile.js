import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../assets/css/_style.scss';
import { connect } from 'react-redux';
import { getProfile } from '../actions/organizationActions';

class FormOrganizationProfile extends Component {

  state = {
    organizationName: this.props.organizationName,
    photo: this.props.photo,
    confirmed: this.props.confirmed,
    username: this.props.username,
    email: this.props.email,
    phoneNumber: this.props.phoneNumber
  }

  componentDidMount(){
    this.props.getProfile();
  }

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.editProfile(this.state.organizationName, this.state.username, this.state.email, this.state.phoneNumber, this.state.photo);
    this.setState({
        organizationName : "",
        username : "",
        email : "",
        phoneNumber : "",
        photo : ""
    });
}

  render() {
    console.log(this.state)
    return (
      <div className="form-organization-profile">
        <div>
            <h3><b>Update Profile</b></h3>
        </div>
        <hr></hr>
        <Form onSubmit={this.onSubmit}>
            <FormGroup>
                <Label for="exampleName">Name</Label>
                <Input onChange={this.onChange} className="form-control" type="text" name="name" id="exampleName"/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleUsername">Username</Label>
                <Input onChange={this.onChange} value={this.state.username} type="text" name="name" id="exampleName" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input onChange={this.onChange} value={this.state.email} type="email" name="email" id="exampleEmail"/>
            </FormGroup>
            <FormGroup>
                <Label for="examplePhone">Phone Number</Label>
                <Input onChange={this.onChange} value={this.state.phoneNumber} type="text" name="phone" id="examplePhone"/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleFile">Photo</Label>
                <Input onChange={this.onChange} type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                    Please upload your organization photo or logo.
                </FormText>
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
    photo: state.orgProfile.photo,
    confirmed: state.orgProfile.confirmed

  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfile: () => { dispatch(getProfile()) },
    // addEvent: (organizationName, username, email, phoneNumber, photo) => { dispatch(addEvent(organizationName, username, email, phoneNumber, photo))}

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormOrganizationProfile);

