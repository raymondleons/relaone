import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvent } from '../actions/organizationActions' ;
import { Link, withRouter } from 'react-router-dom';
import { Row, Col, Card, CardImg, CardTitle, CardText, Button } from 'reactstrap';

class EventDetailOrg extends Component {

  componentDidMount(){
    this.props.getEvent();
  }

  render() {
    console.log(this.props.events)
    const events = this.props.events ? (
        <div className="article-detail">
        <div>
            <h2><b>Event</b></h2>
        </div>
        <hr></hr>
        <Row>
            <Col md="4">
                <Card className="profile-card">
                    <CardImg src={this.props.events.photo}></CardImg>
                </Card>
            </Col>
            <Col md="8">
                <Card className="profile-card">
                    <CardTitle><h2>{this.props.events.title}</h2></CardTitle>
                    <CardText><p>Description : {this.props.events.description}</p></CardText>
                    <CardText><p>Location: {this.props.events.location}</p></CardText>
                    <CardText><p>Application Deadline : {this.props.events.deadline}</p></CardText>
                    <CardText><p>Volunteer Applicant : {this.props.events.quota}</p></CardText>
                    <CardText><p>Maximal Quota : {this.props.events.quotaMax}</p></CardText>
                    <Link to={"/organization/event/edit/" + this.props.events._id}><Button color="primary">Edit Event</Button></Link>
                    <Link to={"/organization/event-photo/edit/" + this.props.events._id}><Button color="primary">Edit Event Photo</Button></Link>
                </Card>
            </Col>
        </Row>
        </div>
    ) : (
      <div>Loading event...</div>
    )

    return (
      <div>
        {events}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.event_id;
  return {
    events: state.event.events.find(event => event._id === id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getEvent: () => { dispatch(getEvent()) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventDetailOrg));


