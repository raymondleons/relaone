import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../assets/css/_style.scss'

class FormUpdateProfile extends Component {
  render() {
    return (
      <div className="form-update-profile">
        <div>
            <h3 className="title"><b>Update Profile</b></h3>
        </div>
        <hr></hr>
        <Form>
            <FormGroup>
                <Label for="exampleName">Full Name</Label>
                <Input className="form-control" type="text" name="name" id="exampleName" placeholder="Input Your Full Name" />
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
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="************"/>
            </FormGroup> 
            <FormGroup>
                <Label for="exampleResetPassword">Reset Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="************"/>
            </FormGroup> 
            <FormGroup>
                <Label for="examplePhone">Birth Date</Label>
                <Input type="date" name="birthdate" id="exampleBirthDate" placeholder="Phone number" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePhone">Gender</Label><br></br>
                <input type="radio" name="gender" value="male"/> Male <br></br>
                <input type="radio" name="gender" value="female"/> Female
            </FormGroup>
            <FormGroup>
                <Label for="examplePhone">Skill Set</Label><br></br>
                <input type="radio" name="gender" value="education"/> Education <br></br>
                <input type="radio" name="gender" value="timwork"/> Tim Work
            </FormGroup>
            <FormGroup>
                <Label for="examplePhone">Phone Number</Label>
                <Input type="text" name="phone" id="examplePhone" placeholder="Phone number" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePhone">Identity Card Number</Label>
                <Input type="text" name="phone" id="examplePhone" placeholder="Identity Card Number" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePhone">Bio</Label>
                <Input type="text" name="phone" id="examplePhone" placeholder="Please Input Your Bio" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleFile">Sertificate</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                    Please upload your sertificate scan.
                </FormText>
            </FormGroup>
            <FormGroup>
                <Label for="exampleFile">Photo</Label>
                <Input type="file" name="file" id="exampleFile" />
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

export default FormUpdateProfile;

