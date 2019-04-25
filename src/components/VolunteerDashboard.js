import React, { Component } from 'react';
import { Table, FormGroup, Label, CustomInput, Button } from 'reactstrap';
import '../assets/css/_style.scss';
import { connect } from 'react-redux';
import { getEvent, getApplicant, acceptApplicant, rejectApplicant } from '../actions/organizationActions';
import { Link } from 'react-router-dom'

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
    let id = this.state.id;
    let idmember = e.target.value;
    this.props.acceptApplicant(id, idmember)
  }

  onClicked = (e) => {
    let id = this.state.id;
    let idmember = e.target.value;
    this.props.rejectApplicant(id, idmember)
  }

  render() {
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

    let applicants = []
    if (this.props.applicants) {
      applicants = this.props.applicants
    };

    const displayApplicant = applicants.length ? (
      applicants.map(applicant => {
        let status = applicant.status
        let idMember = ''
        if (applicant.idMember) {
          idMember = applicant.idMember
        }

        let fullname = ''
        if (idMember.fullname) {
          fullname = idMember.fullname
        }

        const action = status === "Waiting" ? (
          <div><Button value={idMember._id} color="link" onClick={this.onClick}> accept</Button>
          <Button color="link" value={idMember._id} onClick={this.onClicked}> reject</Button></div>
        ) : (
          <p></p>
        )

        return (
          <tr key={applicant._id}>
            <td><Link to={'/organization/volunteer/detail/' + idMember._id}>{fullname}</Link></td>
            <td>{applicant.status}</td>
            <td>{action}</td>
          </tr>
        )
      })
    ) : (
      <tr><td>No applicant yet</td></tr>
    )

    return (
      <div className="organization-dashboard">
        <div className="content-title content-header">
            <div>
              <h3>Applicants</h3>
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
    getApplicant: (id) => { dispatch(getApplicant(id)) },
    acceptApplicant: (id, idmember) => { dispatch(acceptApplicant(id, idmember)) },
    rejectApplicant: (id, idmember) => { dispatch(rejectApplicant(id, idmember))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VolunteerDashboard);

