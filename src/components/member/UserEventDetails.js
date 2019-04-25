import React, { Component } from 'react'
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button,  Spinner} from 'reactstrap'
import '../../assets/css/_style2.scss'
import { connect } from 'react-redux';
import { getEvent, joinEvent } from '../../actions/memberActions' ;
import { withRouter } from 'react-router-dom';

class UserEventDetails extends Component {

  componentDidMount(){
    this.props.getEvent();
  } 

  handleJoin = (e) => {
    let id = e.target.value
    this.props.joinEvent(id)
  }
  

  render() {

    const events = this.props.events? (
      <Card className="whitebg">
        <CardBody>
          <CardTitle>{this.props.events.title}</CardTitle>
          <hr/ >
          <div className="d-flex my-1">
            <CardSubtitle className="mr-auto p-2">Total Volunteers: {this.props.events.quota}/{this.props.events.quotaMax}</CardSubtitle>
            <CardSubtitle className="p-2">Due date: {this.props.events.deadline}</CardSubtitle>
          </div>
          <hr className="hr-margin-0"/>
          <Row className="my-3">
            <Col sm={6}>
            <CardImg className="heigth" src={this.props.events.photo} alt="Card image cap" />
            </Col>
            <Col sm={6}>
            <div className="d-flex align-items-center">
            <div className="logoevent">
              <CardImg className="imgg" src={this.props.events.organization.photo} alt="Card image cap" />
            </div>
            <CardSubtitle className="p-2">{this.props.events.organization.organizationName}</CardSubtitle>
            </div>
            <hr className="hr-margin-0"/>
            <p className="">Location: {this.props.events.location}</p>
            <div>Skillset Needed: {this.props.events.skillSet.map(skill => <li className="list-unstyled" key={skill._id}>{skill.name}</li> )}</div>
            </Col>
          </Row>
          <hr />
          <CardText>Description: {this.props.events.description}</CardText>
          
          
          <div className="d-flex justify-content-center align-items-center my-3">
            <Button block color='primary' 
            className=""
            value={this.props.events._id}
            onClick={this.handleJoin}
            >JOIN</Button>
          </div>
        </CardBody>
      </Card>
      
    ) : (
      <div>
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color="primary" />
      </div>
    )

      return(
        <div>
          <ul>
          {events}
          </ul>
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
    getEvent: () => { dispatch(getEvent()) },
    joinEvent: (id) => { dispatch(joinEvent(id))}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserEventDetails));

