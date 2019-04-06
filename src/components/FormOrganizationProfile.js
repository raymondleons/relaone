import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../assets/css/_style.scss';

class FormOrganizationProfile extends Component {

  render() {
    return (
      <div className="form-organization-profile">
        <div>
            <h3><b>Update Profile</b></h3>
        </div>
        <hr></hr>
        <Form>
            <FormGroup>
                <Label for="exampleName">Name</Label>
                <Input className="form-control" type="text" name="name" id="exampleName" placeholder="Organization Name" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleUsername">Username</Label>
                <Input type="text" name="name" id="exampleName" placeholder="Username" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="email@example.com" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePhone">Phone Number</Label>
                <Input type="text" name="phone" id="examplePhone" placeholder="Phone number" />
            </FormGroup>
            {/* <FormGroup>
                <Label for="exampleFile">Photo</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                    Please upload your organization photo or logo.
                </FormText>
            </FormGroup> */}
            <Button color="primary">Save</Button>
        </Form>
      </div>
    )
  }
}

export default FormOrganizationProfile;

