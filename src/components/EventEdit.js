import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../assets/css/_style.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getSkillset, getEvent } from '../actions/organizationActions';
import Moment from 'moment'

class EventEdit extends Component {

  constructor(props) {
    super(props);

    this.state = {
      skillsets : this.props.skillsets,
      events : this.props.events,
      title : "",
      description : "",
      deadline : "",
      location : "",
      quotaMax : "", 
      skillset : []
    }
  }


  componentWillMount(){
    this.props.getSkillset();
    this.props.getEvent();
  }


  componentWillReceiveProps(props){
    this.setState({
      skillsets : props.skillsets,
      events : props.events
    })

    // let events = {}
    // if (this.props.events) {
    //   events = this.props.events
    // }

    // // let title = ""
    // // if (events.title) {
    // //   title = events.title
    // // }

    // this.setState({
    //   title : events.title,
    //   // description : events.description,
    //   // deadline : events.deadline,
    //   // location : events.location      
    // })
    

  }

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleCheck = (e) => {
    const id = (e.target.value)
    const skillsets = this.props.skillsets
    const skills = skillsets.filter(skill => skill._id === id)
    skills[0].status = !(skills[0].status)
    if (skills[0].status === true) {
        this.setState({
            skillset: [...this.state.skillset, skills[0]._id]
        })
    } else {
        this.setState({
            skillset: this.state.skillset.filter(x => x !== skills[0]._id)
        })
    }
}

  onSubmit = (e) => {
    e.preventDefault();
    this.props.editEvent(this.state.title, this.state.description, this.state.location, this.state.deadline, this.state.quotaMax);
}

  render() {
    console.log(this.state)
    console.log(this.props)

    let events = {}
    if (this.props.events) {
      events = this.props.events
    }

    let skillSet = []
    if (events.skillSet) {
      skillSet = events.skillSet
    }    
    
    const skillsets = this.props.skillsets    

    for (let i=0; i<skillsets.length; i++){ 
      for (let j=0; j<skillSet.length; j++){
        if (skillsets[i].name===skillSet[j].name){
          skillsets[i].status=true
        }
      }
    }

    const displaySkillset = skillsets.length ? (
      skillsets.map(skillset => {
        return (
            <div><label><input onChange={this.handleCheck} defaultChecked={skillset.status} type="checkbox" name="skillSet" key={skillset._id} value={skillset._id}/> {skillset.name}</label><br></br></div>
        )
      })
    ) : (
        <div>Loading skill-set list</div>
    );

    let initDeadline = events.deadline
    Moment.locale('en');
    let deadline = Moment(initDeadline).format('YYYY-MM-DD')


    return (
      <div className="form-organization-profile">
        <div>
            <h3><b>Update Event</b></h3>
        </div>
        <hr></hr>
        <Form onSubmit={this.onSubmit}>
            <FormGroup>
                <Label for="exampleTitle">Title</Label>
                <Input defaultValue={events.title} onChange={this.onChange} className="form-control" type="text" name="title" id="exampleTitle"/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleDescription">Description</Label>
                <Input defaultValue={events.description} onChange={this.onChange} type="text" name="description" id="exampleDescription" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleLocation">Location</Label>
                <Input defaultValue={events.location} onChange={this.onChange} type="text" name="location" id="exampleLocation"/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleQuotaMax">Maximal Quota</Label>
                <Input defaultValue={events.quotaMax} onChange={this.onChange} type="text" name="quotaMax" id="exampleQuotaMax"/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleSkillSet">Skill Set</Label><br></br>
                {displaySkillset}
            </FormGroup>
            <FormGroup>
                <Label for="exampleDeadline">Deadline</Label>
                <Input required onChange={this.onChange} defaultValue={deadline} type="date" name="deadline" id="exampleDeadline" placeholder="" />
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
    getEvent: () => { dispatch(getEvent()) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventEdit));


