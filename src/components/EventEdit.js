import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../assets/css/_style.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getSkillset, getEvent } from '../actions/organizationActions';

class EventEdit extends Component {

  constructor(props) {
    super(props);

    const { skillsets, events } = this.props;

    this.state = {
      skillsets : skillsets,
      events : events
    }
  }

  componentWillMount(){
    this.props.getSkillset();
    this.props.getEvent();
  }

  componentWillReceiveProps(props){
    this.setState({
        skillsets : props.skillsets,
        events : props.events,
  })
  }

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.editEvent(this.state.title, this.state.description, this.state.location, this.state.deadline, this.state.quotaMax);
}

  render() {
    this.state.events.title && console.log('eventst', this.state.events)
    // console.log(this.state.events.quota)
    const skillsets = this.props.skillsets
    console.log(skillsets)
    const displaySkillset = skillsets.length ? (
      skillsets.map(skillset => {
        return (
            <div><label><input onChange={this.handleCheck} type="checkbox" name="skillSet" key={skillset._id} value={skillset._id}/> {skillset.name}</label><br></br></div>
        )
      })
    ) : (
        <div>Loading skill-set list</div>
    );
    // const events = this.props.events
    // console.log(events.title)

    return (
      <div className="form-organization-profile">
        <div>
            <h3><b>Update Event</b></h3>
        </div>
        <hr></hr>
        <Form onSubmit={this.onSubmit}>
            <FormGroup>
                <Label for="exampleTitle">Title</Label>
                <Input defaultValue={this.state.jtitle} onChange={this.onChange} className="form-control" type="text" name="title" id="exampleTitle"/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleDescription">Description</Label>
                <Input defaultValue={this.state.description} onChange={this.onChange} type="textarea" name="description" id="exampleDescription" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleLocation">Location</Label>
                <Input defaultValue={this.state.loaction} onChange={this.onChange} type="text" name="location" id="exampleLocation"/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleQuotaMax">Maximal Quota</Label>
                <Input defaultValue={this.state.quotaMax} onChange={this.onChange} type="text" name="quotaMax" id="exampleQuotaMax"/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleSkillSet">Skill Set</Label><br></br>
                {displaySkillset}
            </FormGroup>
            <FormGroup>
                <Label for="exampleDeadline">Deadline</Label>
                <Input required onChange={this.onChange} value={this.state.deadline} type="date" name="deadline" id="exampleDeadline" placeholder="" />
            </FormGroup>
            <Button color="primary">Save</Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.event_id;
    return {
      skillsets: state.skillset.skillsets,
      events: state.event.events.find(event => event._id === id)
    }
  }

const mapDispatchToProps = dispatch => {
  return {
    getSkillset: () => { dispatch(getSkillset()) },
    getEvent: () => { dispatch(getEvent()) },
    // editEvent: (title, description, location, deadline, quotaMax) => { dispatch(editEvent(title, description, location, deadline, quotaMax))}

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventEdit));


