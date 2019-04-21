import React, { Component } from 'react'
import {Col, Row, Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Spinner} from 'reactstrap'
import {Link} from 'react-router-dom'
import '../../assets/css/_style.scss'
import { getEvent, putUserJoinEvent } from '../../actions/memberActions' ;
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
library.add(faCalendarAlt, faMapMarkerAlt);

class UserEvent extends Component {

  componentDidMount(){
    this.props.getEvent();
  }

  handleJoin = (e) => {
    let id = e.target.value
    putUserJoinEvent(id)
  }
  

  render() {
    // console.log(this.props.events)
    const events = this.props.events
    const displayEvent = events.length ? (
      events.map(event => {
        return (
          <Col sm={6} key={event._id}>
            <Card className="mbot card-height">
              <Link to={'/user/event/details/' + event._id}>
                <CardImg className="heigth" src={event.photo} alt="No Photos" />
              </Link>
              <CardBody className="px-1 py-1">
                <CardTitle><Link to={'/user/event/details/' + event._id}>{event.title}</Link></CardTitle>
                  <hr />
                  {/* <div className="d-flex align-items-center">
                    <div className="logoevent">
                      <CardImg className="imgg" src={event.organization.photo} alt="No Photos" />
                    </div>
                    <CardSubtitle className="p-2">{event.organization}</CardSubtitle>
                  </div> */}
                  <hr />
                  <Row>
                    <Col sm={6}>
                      <CardSubtitle><FontAwesomeIcon icon='calendar-alt' className="fa-1x mr-2"/>{event.deadline}</CardSubtitle>
                    </Col>
                    <Col sm={6}>
                      <CardSubtitle><FontAwesomeIcon icon='map-marker-alt' className="fa-1x mr-2"/>{event.location}</CardSubtitle>
                      <Link to={'/user/event/details/' + event._id}>Details...</Link>
                    </Col>
                </Row>
                  <Button block 
                  color="primary" 
                  className="my-3" 
                  value={event.id}
                  onClick={this.handleJoin}>
                  Join Now
                  </Button>
              </CardBody>
            </Card>
          </Col>
        )
      })
    ) : (
      <div>
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color="primary" />
      </div>  
    );

    return(
      <div className="article-list">
        <div className="content-title">
          <h3 className="bold-text">Event</h3>
        </div>
        <Row className="pt-3">
          {displayEvent}
        </Row>
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
      joinEvent : (id) => { dispatch(getEvent())}
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(UserEvent);


