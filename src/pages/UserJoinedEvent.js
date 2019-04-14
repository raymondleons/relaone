import React, { Component } from 'react'
import {Table, Spinner} from 'reactstrap'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { getUserJoinedEvent } from '../actions/memberActions' ;

class UserJoinedEvent extends Component {

  componentDidMount(){
    this.props.getUserJoinedEvent();
  }


  render() {
    const events = this.props.events
      const displayEvent = events.length ? (
          events.map(({_id, title, location, quota, quotaMax, deadline, organization}, i) => {
            return(
              <tr>
             
                    <td>1.</td>
                    <td key={_id}><Link to={'/user/event/details/' + _id}>{title}</Link></td>
                    <td key={_id}>{organization}</td>
                    <td key={_id}>{location}</td>
                    <td key={_id}>{quota}/{quotaMax}</td>
                    <td key={_id}>{deadline}</td>
                    
                  </tr>
            )
          })
      ) : (
        <div>
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color="primary" />
      </div> 
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
      getUserJoinedEvent: () => { dispatch(getUserJoinedEvent())},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserJoinedEvent);
