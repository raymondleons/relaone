import React, { Component } from 'react'
import {Form, FormGroup, Input, Col, Row, Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Spinner} from 'reactstrap'
import {Link} from 'react-router-dom'
import '../../assets/css/_style2.scss'
import { getEvent, searchEvent } from '../../actions/memberActions' ;
import { connect } from 'react-redux';
import Moment from 'moment'
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
      events : this.props.events
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchEvent(this.state.search)
  }

  onChange = (e) => {
    console.log(this.props.Events)
    this.setState({
        [e.target.name]: e.target.value
    })
  }



  render() {

    let initDate = this.props.deadline
    Moment.locale('en');
    let Date = Moment(initDate).format('YYYY-MM-DD')

    let events = []
      if (this.props.events) {
        events = this.props.events
      }    
 
    // const events = this.props.events
   
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
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
            <Row>
                <Col md="10">
                  <Input onChange={this.onChange} className="form-control" type="text" name="search" id="exampleSearch" placeholder="search"/>
                </Col>
                <Col md="2">
                  <Button color="primary">Search</Button> 
                </Col>
              </Row>

            </FormGroup>
        </Form>
        </div>
        {events.length} event(s) found
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
      searchEvent: (keyword) => [ dispatch(searchEvent(keyword))]
      
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(UserEvent);


