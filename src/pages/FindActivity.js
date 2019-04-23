import React, { Component } from 'react'
import NavigationBar from '../layout/NavigationBar'
import Footers from '../layout/Footers'
import { Spinner, Container, Row, Col, Card, CardTitle, CardImg, CardImgOverlay, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getEvent } from '../actions/guestActions'
import Dotdotdot from 'react-dotdotdot';

class FindActivity extends Component {

  componentDidMount(){
    window.scrollTo(0, 0)
    this.props.getEvent();
    document.title = "Find Event"
  }
  
  handleJoin = (e) => {
    console.log(e.target.value)
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
              <CardTitle className="card-text-title"><Dotdotdot clamp={1}>{event.title}</Dotdotdot></CardTitle>
              <div className="card-text-desc"><Dotdotdot clamp={2}>{event.description}</Dotdotdot></div>
              <Link exact="true" to="/register">
                <Button color="primary" value={event._id} onClick={this.handleJoin}>Join</Button>
              </Link>
            </CardImgOverlay>  
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



