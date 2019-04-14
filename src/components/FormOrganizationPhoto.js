import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../assets/css/_style.scss';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getProfile, editProfile } from '../actions/organizationActions';

class FormOrganizationProfile extends Component {

  

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.editProfile(this.state.organizationName, this.state.username, this.state.email, this.state.phoneNumber);
    this.setState({
      redirect : true
    })
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
                <Label for="examplePhoto">Organization Photo</Label>
                <Input onChange={this.onChange} type="file" name="photo" id="examplePhoto"/>
            </FormGroup>

            <Button color="primary">Upload</Button>
        </Form>
      </div>
    )
  }
}



const mapDispatchToProps = dispatch => {
  return {
    editProfile: (organizationName, username, email, phoneNumber) => { dispatch(editProfile(organizationName, username, email, phoneNumber))}
  }
}

export default connect(null, mapDispatchToProps)(FormOrganizationProfile);



