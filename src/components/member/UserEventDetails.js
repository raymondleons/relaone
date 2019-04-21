import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button,  Spinner} from 'reactstrap'
import '../../assets/css/_style2.scss'
import { connect } from 'react-redux';
import { getEvent } from '../../actions/memberActions' ;
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

    const events = this.props.events? (
      <Card className="whitebg">
        <CardBody>
          <CardTitle>{this.props.events.title}</CardTitle>
          <hr/ >
          <div className="d-flex my-1">
            <CardSubtitle className="mr-auto p-2">Total join {this.props.events.quota}/{this.props.events.quotaMax}</CardSubtitle>
            <CardSubtitle className="p-2">Due date join until {this.props.events.deadline}</CardSubtitle>
            <Button color='primary' className="p-1">Join</Button>
          </div>
          <CardImg top width="100%" src={this.props.events.photo} alt="Card image cap" />
          {/* <div className="d-flex align-items-center">
            <div className="logoevent">
              <CardImg className="imgg" src={this.props.events.organization.photo} alt="Card image cap" />
            </div>
            <CardSubtitle className="p-2">{this.props.events.organization.organizationName}</CardSubtitle>
          </div> */}
          <hr />      
          <p className="">Location: {this.props.events.location}</p>
          <hr />
          <CardText>Description: {this.props.events.description}</CardText>
          <div>Skillset Needed: {this.props.events.skillSet.map(skill => <CardText key={skill._id}>{skill.name}</CardText> )}</div>
          
          <div className="d-flex justify-content-center align-items-center my-3">
            <Button color='primary' className="mx-5">JOIN</Button>
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

