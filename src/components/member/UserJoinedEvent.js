import React, { Component } from 'react'
import {Table, Spinner} from 'reactstrap'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { getUserJoinedEvent, getUserProfile } from '../../actions/memberActions' ;
import Moment from 'moment'

class UserJoinedEvent extends Component {

  componentDidMount(){
    this.props.getUserJoinedEvent()
    this.props.getUserProfile();
  }

  render() {
    
    let initdeadLine = this.props.deadLine
    Moment.locale('en');
    let deadline = Moment(initdeadLine).format('YYYY-MM-DD')

    const events = this.props.events 
    console.log(events)
      const displayEvent = events.length ? (
          events.map(({_id, title, location, quota, quotaMax, organization, member}, i) => {
            return(
              <tr>
                <td>1.</td>
                <td key={_id}><Link to={'/user/event/details/' + _id}>{title}</Link></td>
                <td key={_id}>{organization.organizationName}</td>
                <td key={_id}>{location}</td>
                <td key={_id}>{quota}/{quotaMax}</td>
                <td key={_id}>{deadline}</td> 
                <td>
                  {/* {member.filter(members => members.idMember === this.props.id  {
                      return members.status
                    }
                  )} */}
                </td>
              </tr>
            )
          })
      ) : (
        <tr>
        <Spinner type="grow" color="primary" ></Spinner>
        <Spinner type="grow" color="primary" ></Spinner>
        <Spinner type="grow" color="primary" ></Spinner>
        </tr>
      );








    return (
      <div>
        <div className="event-count">
          <h4>{this.props.events.length}</h4>
          <p>Event Joined</p>
        </div>
        <Table responsive>
          <thead>
            <tr>
              <th>No.</th>
              <th>Event</th>
              <th>Organization</th>
              <th>Location</th>
              <th>Quota</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {displayEvent}
          </tbody>
        </Table>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
      events: state.event.events,
      id: state.userProfile.id
  }
}
const mapDispatchToProps = dispatch => {
  return {
      getUserJoinedEvent: () => { dispatch(getUserJoinedEvent())},
      getUserProfile: () => { dispatch(getUserProfile()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserJoinedEvent);
