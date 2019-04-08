import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../assets/css/_style.scss';
import { getSkillset, addEvent } from '../actions/organizationActions';
import { Redirect } from 'react-router-dom';

class CreateEvent extends Component {
    state = {
        title : "",
        description : "",
        deadline : "",
        location : "",
        quotaMax : "",
        skillset : [],
        redirect : false
    }

    componentDidMount(){
      this.props.getSkillset();
    }
  
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addEvent(this.state.title, this.state.description, this.state.deadline, this.state.location, this.state.quotaMax, this.state.skillset);
        this.setState({
            title : "",
            description : "",
            deadline : "",
            location : "",
            quotaMax : "",
            skillset : [],
            redirect : true
        });
    }

  render() {
    const { redirect } = this.state;

    if (redirect) {
        return <Redirect to='/event'/>
    } 

    const skillsets = this.props.skillsets
    const displaySkillset = skillsets.length ? (
      skillsets.map(skillset => {
        return (
            <div><label><input type="checkbox" name="skillSet" key={skillset._id} value={skillset._id}/> {skillset.name}</label><br></br></div>
        )
      })
    ) : (
        <div>Loading skill-set list</div>
    );

    return (
      <div className="form-create-event">
        <div>
            <h3 className="title bold-text">Create Event</h3>
        </div>
        <hr></hr>
        <Form onSubmit={this.onSubmit}>
            <FormGroup>
                <Label for="exampleTitle">Event title</Label>
                <Input onChange={this.onChange} value={this.state.title} className="form-control" type="text" name="title" id="exampleTitle" placeholder="" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleDescripion">Description</Label>
                <Input onChange={this.onChange} value={this.state.description} type="textarea" name="description" id="exampleDescription" placeholder="" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleLocation">Location</Label>
                <Input onChange={this.onChange} value={this.state.location} className="form-control" type="text" name="location" id="exampleLocation" placeholder="" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleMaxQuota">Maximum Quota</Label>
                <Input onChange={this.onChange} value={this.state.quotaMax} className="form-control" type="text" name="quotaMax" id="exampleMaxQuota" placeholder="" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleSkillSet">Skill Set</Label><br></br>
                {displaySkillset}
            </FormGroup>
            <FormGroup>
                <Label for="exampleDeadline">Deadline</Label>
                <Input onChange={this.onChange} value={this.state.deadline} type="date" name="deadline" id="exampleDeadline" placeholder="" />
            </FormGroup>
            {/* <FormGroup>
                <Label for="exampleFile">Photo</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                    Please upload photo or poster related to your event.
                </FormText>
            </FormGroup> */}
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
        getSkillset: () => { dispatch(getSkillset())},
        addEvent: (title, description, deadline, location, quotaMax, skillSet) => { dispatch(addEvent(title, description, deadline, location, quotaMax, skillSet))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);

