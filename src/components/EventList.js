import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';
import '../assets/css/_style.scss'
import { getEvent, delEvent } from '../actions/organizationActions';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash, faEdit);

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
                  <tr>
                    <td key={_id}><Link to={'/event/detail/' + _id}>{title}</Link></td>
                    <td key={_id}>{location}</td>
                    <td key={_id}>{quotaMax}</td>
                    <td key={_id}>{deadline}</td>
                    <td key={_id}>{skillSet.map(skill => <p key={skill._id}>{skill.name}</p>)}</td>
                    <td key={_id}>
                        <Button color="link" className="event-action"> 
                        <Link to={'/organization/event/edit/' + _id}><FontAwesomeIcon icon='edit'/></Link>
                        </Button>
                        <Button color="link" className="event-action" onClick={() => this.delete(_id)}> 
                            <FontAwesomeIcon icon='trash'/>
                        </Button>
                    </td>
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
                        <th>Required Skillset</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {displayEvent}
                </tbody>
            </Table>
        </div>
        <div className="event-action">
            <Button color="primary"><Link to="/create-event" className="create-event-button">Create Event</Link></Button>
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



