import React, { Component } from 'react'
import {Container, Row, Col} from 'reactstrap'
import Header from '../../layout/Header'
import UserProfileBadge from '../../layout/UserProfileBadge'
import UserJoinedEvent from '../../components/member/UserJoinedEvent'
import UserSideBar from '../../layout/UserSideBar'
import history from '../../history'

export default class UserJoinedEventPage extends Component {
  
  componentDidMount(){
    let role = localStorage.getItem('role')
    if (role !== 'member') {
      history.push('/log-in')
    }
    window.scrollTo(0, 0);
    document.title = "RelaOne | Joined Events";
  }
  
  render() {
    return (
      <div>
        <div className="create-event">
        <Container>
          <Row>
            <Header/>
          </Row>
          <Row>
            <Col sm="12" md="4">
              <UserProfileBadge></UserProfileBadge>
              <UserSideBar />
            </Col>
            <Col sm="12" md="8">
              <UserJoinedEvent />
            </Col>
          </Row>
        </Container>      
      </div>
      </div>
    )
  }
}
