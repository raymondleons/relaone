import React, { Component } from 'react'
import NavigationBar from '../layout/NavigationBar'
import Footers from '../layout/Footers'
import { Container, Row, Col, Card, CardTitle, CardText, CardImg, CardImgOverlay, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getEvent } from '../actions/organizationActions'
import Dotdotdot from 'react-dotdotdot';

class FindActivity extends Component {

  componentDidMount(){
    this.props.getEvent();
  }

  render() {
    const events = this.props.events
    const displayEvent = events.length ? (
      events.map(event => {
        return(
          <Col sm="12" md="6" lg="4" key={event._id}>
          <Card className="card-activity" inverse>
            <CardImg width="100%" src={event.photo} alt="Card image cap" />
            <CardImgOverlay className="opacity">
              <CardTitle className="card-text-title">{event.title}</CardTitle>
              <CardText className="card-text-desc"><Dotdotdot clamp={2}>{event.description}</Dotdotdot></CardText>
              <Link exact to="/register"><Button color="primary" >Join</Button></Link>
            </CardImgOverlay>  
          </Card>
          </Col>
        )
      })
    ) : (
      <p>loading</p>
    );

    return (
    <div>
      <NavigationBar/>
      <div className="find-activity">
        <p className="find-activity-title">Recent event</p>
        <div className="activity-list">
        <Container>
          <Row>
            {displayEvent}
          </Row>
        </Container>
        </div>
      </div>
      <Footers/>      
    </div>
  );
};
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

export default connect(mapStateToProps, mapDispatchToProps)(FindActivity);



