import React, { Component } from 'react'
import {Col, Row, Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Spinner} from 'reactstrap'
import {Link} from 'react-router-dom'
import '../../assets/css/_style.scss'
import Moment from 'moment'
import { getEvent} from '../../actions/memberActions' ;
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
library.add(faCalendarAlt, faMapMarkerAlt);

class UserEvent extends Component {

  componentDidMount(){
    this.props.getEvent();
  }
  
  componentWillReceiveProps() {
    this.setState({
      events : this.props.articles
    })
  }

 
  

  render() {

    let initDate = this.props.deadline
    Moment.locale('en');
    let Date = Moment(initDate).format('YYYY-MM-DD')

    let initEvents = []
    let events = []
    if (this.props.events){
      initEvents = this.props.events
      events = initEvents.slice(0,4)
    }    
   
    const displayEvent = events.length ? ( 
      events.map(({_id, photo, title, location, organization, deadline}, i) => {
        return (
          <Col sm={6} key={_id}>
            <Card className="mbot card-height">
              <Link to={'/user/event/details/' + _id}>
                <CardImg className="heigth" src={photo} alt="No Photos" />
              </Link>
              <CardBody className="px-1 py-1">
                <CardTitle><Link to={'/user/event/details/' + _id}>{title}</Link></CardTitle>
                  <hr className="hr-margin-0"/>
                  <div className="d-flex align-items-center">
                    <div className="logoevent">
                      <CardImg className="imgg" src={organization.photo} alt="No Photos" />
                    </div>
                    <CardSubtitle className="p-2">{organization.organizationName}</CardSubtitle>
                    </div>
                  <hr className="hr-margin-0"/>
                  <Row className="py-2">
                    <Col sm={6}>
                      <CardSubtitle><FontAwesomeIcon icon='calendar-alt' className="fa-1x mr-2"/>{Date}</CardSubtitle>
                    </Col>
                    <Col sm={6}>
                      <CardSubtitle><FontAwesomeIcon icon='map-marker-alt' className="fa-1x mr-2"/>{location}</CardSubtitle>
                    </Col>
                </Row>
                <Link to={'/user/event/details/' + _id}>
                  <Button block 
                  color="primary" 
                  value={_id}
                  onClick={this.handleJoin}>
                  Details
                  </Button>
                  </Link>
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
        {events.length} event(s) found
        <Row className="pt-3">
          {displayEvent}
        </Row>
        <div className='text-right'>
        <Link to='/user/event' >Show All Events</Link>
        </div >
       
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

export default connect (mapStateToProps, mapDispatchToProps)(UserEvent);


