import React, { Component } from 'react'
import {Table, Spinner} from 'reactstrap'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { getUserJoinedEvent } from '../../actions/memberActions' ;
import Moment from 'moment'

class UserJoinedEvent extends Component {

  componentDidMount(){
    this.props.getUserJoinedEvent();
  }

  render() {
    
    let initdeadLine = this.props.deadLine
    Moment.locale('en');
    let deadline = Moment(initdeadLine).format('YYYY-MM-DD')

    const events = this.props.events 
    console.log(events)
      const displayEvent = events.length ? (
          events.map(({_id, title, location, quota, quotaMax, organization}, i) => {
            return(
              <tr>
                <td>1.</td>
                <td key={_id}><Link to={'/user/event/details/' + _id}>{title}</Link></td>
                <td key={_id}>{organization.organizationName}</td>
                <td key={_id}>{location}</td>
                <td key={_id}>{quota}/{quotaMax}</td>
                <td key={_id}>{deadline}</td> 
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
      events: state.event.events
  }
}
const mapDispatchToProps = dispatch => {
  return {
      getUserJoinedEvent: () => { dispatch(getUserJoinedEvent())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserJoinedEvent);
