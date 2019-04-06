import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../assets/css/_style.scss';
import { getSkillset } from '../actions/organizationActions';

class CreateEvent extends Component {

    componentDidMount(){
      this.props.getSkillset();
    }
  
  render() {
    const skillsets = this.props.skillsets
    const displaySkillset = skillsets.length ? (
      skillsets.map(skillset => {
        return (
            <div><label><input type="checkbox" name="skillSet" key={skillset._id} value={skillset._id}/> {skillset.name}</label><br></br></div>
        )
      })
    ) : (
        <div>no skills needed</div>
    );

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
                {displaySkillset}
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

const mapStateToProps = state => {
    return {
        skillsets: state.skillset.skillsets
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSkillset: () => { dispatch(getSkillset())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);

