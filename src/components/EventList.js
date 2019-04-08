import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import '../assets/css/_style.scss'
import { getEvent } from '../actions/organizationActions';

class EventList extends Component {

    componentDidMount(){
        this.props.getEvent();
    }


  render() {
      const events = this.props.events
      

      const displayEvent = events.length ? (
          events.map(event => {
              return(
                  <tr>
                    {/* <th scope="row">1</th> */}
                    <td key={event._id}>{event.title}</td>
                    <td key={event._id}>{event.location}</td>
                    <td key={event._id}>{event.quotaMax}</td>
                    <td key={event._id}>{event.deadline}</td>
                    <td key={event._id}><a>x</a></td>
                </tr>
              )
          })
      ) : (
          <tr>Create more event</tr>
      );

    return (
      <div className="event">
        <div className="content-title content-header">
            <div>
                <h3 className="title bold-text">Event</h3>
            </div>
            <div className="event-count">
                <h4>{this.props.events.length}</h4>
                <p>EVENT FOUND</p>
            </div>
        </div>
        <div>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Quota</th>
                        <th>Deadline</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {displayEvent}
                </tbody>
            </Table>
        </div>
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
        getEvent: () => { dispatch(getEvent())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList);



