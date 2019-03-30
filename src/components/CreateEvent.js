import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../assets/css/_style.scss'

class CreateEvent extends Component {
  render() {
    return (
      <div className="form-create-event">
        <div>
            <h3 className="title bold-text">Create Event</h3>
        </div>
        <hr></hr>
        <Form>
            <FormGroup>
                <Label for="exampleTitle">Event title</Label>
                <Input className="form-control" type="text" name="title" id="exampleTitle" placeholder="" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleDescripion">Description</Label>
                <Input type="textarea" name="description" id="exampleDescription" placeholder="" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleMaxQuota">Maximum Quota</Label>
                <Input className="form-control" type="text" name="maxQuota" id="exampleMaxQuota" placeholder="" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleSkillSet">Skill Set</Label><br></br>
                <input type="checkbox" name="skillSet" value="education"/> Education <br></br>
                <input type="checkbox" name="skillSet" value="teamwork"/> Team Work <br></br>
                <input type="checkbox" name="skillSet" value="education"/> Counseling <br></br>
                <input type="checkbox" name="skillSet" value="teamwork"/> Teaching <br></br>
                <input type="checkbox" name="skillSet" value="education"/> Madical Aid <br></br>
                <input type="checkbox" name="skillSet" value="teamwork"/> Disaster Relief <br></br>
            </FormGroup>
            <FormGroup>
                <Label for="exampleDeadline">Deadline</Label>
                <Input type="date" name="deadline" id="exampleDeadline" placeholder="" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleFile">Photo</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                    Please upload photo or poster related to your event.
                </FormText>
            </FormGroup>
            <Button color="primary">Submit</Button>
        </Form>
      </div>
    )
  }
}

export default CreateEvent;

