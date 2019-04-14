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
      phoneNumber : props.phoneNumber,
      photo : props.photo
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
      phoneNumber : props.phoneNumber,
      photo : props.photo
  })
  }

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.editProfile(this.state.organizationName, this.state.username, this.state.email, this.state.phoneNumber, this.state.photo);
}

  render() {
    return (
      <div className="form-organization-profile">
        <div>
            <h3><b>Update Profile</b></h3>
        </div>
        <hr></hr>
        <Form onSubmit={this.onSubmit}>
            <FormGroup>
                <Label for="exampleName">Name</Label>
                <Input defaultValue={this.state.organizationName} onChange={this.onChange} className="form-control" type="text" name="name" id="exampleName"/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleUsername">Username</Label>
                <Input defaultValue={this.state.username} onChange={this.onChange} type="text" name="name" id="exampleName" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input defaultValue={this.state.email} onChange={this.onChange} type="email" name="email" id="exampleEmail"/>
            </FormGroup>
            <FormGroup>
                <Label for="examplePhone">Phone Number</Label>
                <Input defaultValue={this.state.phoneNumber} onChange={this.onChange} type="text" name="phone" id="examplePhone"/>
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
    editProfile: (organizationName, username, email, phoneNumber, photo) => { dispatch(editProfile(organizationName, username, email, phoneNumber, photo))}

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormOrganizationProfile);



