import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, Button, Spinner } from 'reactstrap';
import '../assets/css/_style.scss'
import { getEvent, delEvent } from '../actions/organizationActions';
import noevent from '../assets/images/noevent.png';


class EventList extends Component {

    componentDidMount(){
        this.props.getEvent();
    }

    delete = (id) => {
        this.props.delEvent(id)
    }

  render() {
      const events = this.props.events
      
      const displayEvent = events.length ? (
        events.map(({_id, title, location, quotaMax, deadline, skillSet}, i) => {
            return(
                <tr key={_id}>
                  <td><Link to={'/organization/event/detail/' + _id}>{title}</Link></td>
                  <td>{location}</td>
                  <td>{quotaMax}</td>
                  <td>{deadline}</td>
                  <td>{skillSet.map(skill => <p key={skill._id}>{skill.name}</p>)}</td>
                  <td>
                      <Button color="link" className="event-action" onClick={() => this.delete(_id)}> 
                          x
                      </Button>
                  </td>
              </tr>
            )
        })
    ) : (
      <tr>
          <Spinner type="grow" color="primary" />
          <Spinner type="grow" color="primary" />
          <Spinner type="grow" color="primary" />   
      </tr>
        
    );

      const displayTable = events.length ? (
        <div>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Quota</th>
                        <th>Deadline</th>
                        <th>Required Skillset</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {displayEvent}
                </tbody>
            </Table>
        </div>
      ) : (
        <div className="no-event">
            <img src={noevent} alt="no event" className="no-event-icon"/>
            <h3>You have no event yet.</h3>
            <p>Please create an voluntary event to find volunteers.</p>
        </div>
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
        {displayTable}
        <div className="event-action">
            <Button color="primary"><Link to="/organization/create-event" className="create-event-button">Create Event</Link></Button>
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
        getEvent: () => { dispatch(getEvent())},
        delEvent: (id) => { dispatch(delEvent(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
