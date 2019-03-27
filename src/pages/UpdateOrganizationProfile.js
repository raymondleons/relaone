import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

class UpdateOrganizationProfile extends Component {
  render() {
    return (
      <Container>
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
        <FormGroup>
          <Label for="exampleFile">Photo</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            Please upload your organization photo or logo.
          </FormText>
        </FormGroup>
        <Button>Save</Button>
      </Form>
      </Container>
    )
  }
}

export default UpdateOrganizationProfile;

