import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem, Badge} from 'reactstrap'
import Logo from '../assets/images/organization1.png'
import '../assets/css/_style2.scss'
import { connect } from 'react-redux';
import { getEvent } from '../actions/memberActions' ;
import { withRouter } from 'react-router-dom';

class UserEventDetails extends Component {
  componentDidMount(){
    this.props.getEvent();
  } 

  render() {
    const events = this.props.events ? (
    
          <Card className="whitebg pt-3">
            <CardBody>
              <CardTitle>{this.props.event.title}</CardTitle>
              <hr/ >
              <div className="d-flex my-1">
                <CardSubtitle className="mr-auto p-2">Total join {this.props.event.quota}/{this.props.event.quotaMax}</CardSubtitle>
                <CardSubtitle className="p-2">Due date join until {this.props.event.deadline}</CardSubtitle>
                <Button color='primary' className="p-1">Join</Button>
              </div>
              <CardImg top width="100%" src={this.props.event.photo} alt="Card image cap" />
              <div className="d-flex align-items-center">
                <div className="logoevent">
                  <CardImg className="imgg" src={Logo} alt="Card image cap" />
                </div>
                <CardSubtitle className="p-2">Oleh: Nama Org PT.blabla</CardSubtitle>
                <Button color='primary' className=" ml-auto p-2">Share</Button>
              </div>
              <hr />
              <CardSubtitle> time desc: acara ini akan berlangsung selama 1 abad</CardSubtitle>
              <CardSubtitle className="">Location, Batam, blablabla</CardSubtitle>
              <hr />
              <CardText>Description: untuk mengenang jasa para pahlawan yang telah gugur, marilah kita: mengheningkan cipta</CardText>
              <CardText>task desc: memanjat pohon, memanjat sosial, dll</CardText>
              <ListGroup>
                <CardText>Tenaga yang dibutuhkan</CardText>
                <ListGroupItem className="justify-content-between">jaga anak <Badge pill>14</Badge></ListGroupItem>
                <ListGroupItem className="justify-content-between">jaga jarak<Badge pill>2</Badge></ListGroupItem>
                <ListGroupItem className="justify-content-between">jaga jaga <Badge pill>1</Badge></ListGroupItem>
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

