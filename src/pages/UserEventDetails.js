import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem} from 'reactstrap'
import '../assets/css/_style2.scss'
import { connect } from 'react-redux';
import { getEvent } from '../actions/memberActions' ;
import { withRouter } from 'react-router-dom';

class UserEventDetails extends Component {
  componentDidMount(){
    this.props.getEvent();
  } 

  render() {
    // const skillsets = this.props.events.skillsets
    // const displaySkillset = skillsets.length ?(
    //   skillsets.map(skillset => {
    //     return(
    //       <ListGroupItem className="">{}</ListGroupItem>
                
    //     )
    //   })
    // ):(
    //   <p>loading...:)</p>
    // )



    const events = this.props.events ? (
          <Card className="whitebg pt-3">
            <CardBody>
              <CardTitle>{this.props.events.title}</CardTitle>
              <hr/ >
              <div className="d-flex my-1">
                <CardSubtitle className="mr-auto p-2">Total join {this.props.events.quota}/{this.props.events.quotaMax}</CardSubtitle>
                <CardSubtitle className="p-2">Due date join until {this.props.events.deadline}</CardSubtitle>
                <Button color='primary' className="p-1">Join</Button>
              </div>
              <CardImg top width="100%" src={this.props.events.photo} alt="Card image cap" />
              <div className="d-flex align-items-center">
                <div className="logoevent">
                  <CardImg className="imgg" src={this.props.events.organization.photo} alt="Card image cap" />
                </div>
                <CardSubtitle className="p-2">{this.props.events.organization.organizationName}</CardSubtitle>
                <Button color='primary' className=" ml-auto p-2">Share</Button>
              </div>
              <hr />
              
              <CardSubtitle className="">Location: {this.props.events.location}</CardSubtitle>
              <hr />
              <CardText>Description: {this.props.events.description}</CardText>
              <ListGroup>
                <CardText>Required Skillset :</CardText>
                
                <ListGroupItem className="justify-content-between">jaga anak </ListGroupItem>
                <ListGroupItem className="justify-content-between">jaga jarak</ListGroupItem>
                <ListGroupItem className="justify-content-between">jaga jaga </ListGroupItem>
              </ListGroup>
              <div className="d-flex justify-content-center align-items-center my-3">
                <Button color='primary' className="mx-5">JOIN</Button>
                
                <Button color='primary' className="mx-5">Donate</Button>
              </div>
            </CardBody>
          </Card>
          ) : (
      <div>Loading...</div>
    )

      return(
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserEventDetails));

