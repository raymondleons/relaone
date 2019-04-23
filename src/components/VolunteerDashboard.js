import React, { Component } from 'react';
import { Table, FormGroup, Label, CustomInput, Button } from 'reactstrap';
import '../assets/css/_style.scss';
import { connect } from 'react-redux';
import { getEvent, getApplicant } from '../actions/organizationActions';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes  } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck, faTimes);


class VolunteerDashboard extends Component {

  componentDidMount() {
    this.props.getEvent();
  }

  componentWillReceiveProps() {
    this.setState({
      applicants : this.props.applicants
    })
  }

  onChange = (e) => {
    this.setState({
      id : e.target.value
    })
    this.props.getApplicant(e.target.value)
  }

  onClick = (e) => {
    console.log(this.state)
    console.log(e.target.value)
  }

  render() {
    console.log(this.props.applicants)
    let events = this.props.events
    const displayEvent = events.length ? (
      events.map(event => {
        return(
          <option key={event._id} value={event._id}>{event.title}</option>
        )
      })
    ) : (
      <option value="">No Event</option>
    )

    let applicants = this.props.applicants;

    const displayApplicant = applicants.length ? (
      applicants.map(applicant => {
        let status = applicant.status
        // let id = applicant._id
        console.log(applicant._id)
        const action = status === "Waiting" ? (
          <Button color="link" value="asdf" onClick={this.onClick}><FontAwesomeIcon icon='check'/></Button>
        ) : (
          <p></p>
        )

        return (
          <tr key={applicant._id}>
            <td>{applicant.idMember.fullname}</td>
            <td>{applicant.status}</td>
            <td>{action}</td>
          </tr>
        )
      })
    ) : (
      <tr> No applicant yet </tr>
    )

    return (
      <div className="organization-dashboard">
        <div className="content-title content-header">
            <div>
              <h3>Volunteers</h3>
            </div>
            <div className="event-count">
                <h4>{this.props.applicants.length}</h4>
                <p>VOLUNTEERS FOUND</p>
            </div>
        </div>
        <div>
        <FormGroup>
          <Label for="exampleSelectEvent">Select Event</Label>
          <CustomInput onChange={this.onChange} type="select" id="exampleSelectEvent" name="customSelect">
            <option value="">Select</option>
            {displayEvent}
          </CustomInput>
        </FormGroup>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
              </tr>
          </thead>
          <tbody>
                {displayApplicant}
          </tbody>
        <tbody>
        </tbody>
      </Table>
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    events: state.event.events,
    applicants : state.volunteer.applicants    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getEvent: () => { dispatch(getEvent()) },
    getApplicant: (id) => { dispatch(getApplicant(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VolunteerDashboard);

