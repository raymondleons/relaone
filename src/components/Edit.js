import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../assets/css/_style.scss';
import { getSkillset, getEvent, editEvent } from '../actions/organizationActions';
import Moment from 'moment'

class Edit extends Component {

    componentWillMount() {
        this.props.getEvent();
        this.props.getSkillset();
    }

    constructor(props) {
        super(props);

        let skillsets = []
        if (this.props.skillsets) {
            skillsets = this.props.skillsets
        }

        let events = {}
        if (this.props.events) {
            events = this.props.events
        }

        let initDeadline = events.deadline
        Moment.locale('en');
        let deadline = Moment(initDeadline).format('YYYY-MM-DD')

        let initQuota = events.quotaMax
        let quotaMax = initQuota.toString()

        this.state = {
            id : props.match.params.event_id,
            skillsets : skillsets,
            events : events,
            title : events.title,
            description : events.description,
            location : events.location,
            deadline : deadline,
            quotaMax : quotaMax,
            skillSet : events.skillSet

        }
    }

      onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
      }
    
      onChangeNum = (e) => {
        let num = e.target.value;
        let str = num.toString();
        this.setState({
          [e.target.name]: str
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
        this.props.editEvent(this.state.id, this.state.title, this.state.description, this.state.location, this.state.quotaMax, this.state.skillSet, this.state.deadline);
    }
    
    render() {
        console.log(this.props)
        console.log(this.state)

        const skillsets = this.props.skillsets    

        for (let i=0; i<skillsets.length; i++){ 
          for (let j=0; j<this.state.skillSet.length; j++){
            if (skillsets[i].name===this.state.skillSet[j].name){
              skillsets[i].status=true
            }
          }
        }
    
        const displaySkillset = skillsets.length ? (
          skillsets.map(skillset => {
            return (
                <div key={skillset._id}><label><input onChange={this.handleCheck} defaultChecked={skillset.status} type="checkbox" name="skillSet" key={skillset._id} value={skillset._id}/> {skillset.name}</label><br></br></div>
            )
          })
        ) : (
            <div>Loading skill-set list</div>
        );
    

        return(
            <div className="form-organization-profile">
              <div>
                  <h3><b>Update Event</b></h3>
              </div>
              <hr></hr>
              <Form onSubmit={this.onSubmit}>
                  <FormGroup>
                      <Label for="exampleTitle">Title</Label>
                      <Input defaultValue={this.state.title} onChange={this.onChange} className="form-control" type="text" name="title" id="exampleTitle"/>
                  </FormGroup>
                  <FormGroup>
                      <Label for="exampleDescription">Description</Label>
                      <Input defaultValue={this.state.description} onChange={this.onChange} type="text" name="description" id="exampleDescription" />
                  </FormGroup>
                  <FormGroup>
                      <Label for="exampleLocation">Location</Label>
                      <Input defaultValue={this.state.location} onChange={this.onChange} type="text" name="location" id="exampleLocation"/>
                  </FormGroup>
                  <FormGroup>
                      <Label for="exampleQuotaMax">Maximal Quota</Label>
                      <Input defaultValue={this.state.quotaMax} onChange={this.onChangeNum} type="text" name="quotaMax" id="exampleQuotaMax"/>
                  </FormGroup>
                  <FormGroup>
                      <Label for="exampleSkillSet">Skill Set</Label><br></br>
                      {displaySkillset}
                  </FormGroup>
                  <FormGroup>
                      <Label for="exampleDeadline">Deadline</Label>
                      <Input required onChange={this.onChange} defaultValue={this.state.deadline} type="date" name="deadline" id="exampleDeadline" placeholder="" />
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
        editEvent: (_id, title, description, location, quotaMax, skillSet, deadline) => { dispatch(editEvent(_id, title, description, location, quotaMax, skillSet, deadline))}
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));

