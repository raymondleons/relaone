import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Header from '../../layout/Header'
import ProfileBadge from '../../layout/UserProfileBadge'
import ProfileDetail from '../../components/member/UserProfile'
import Navbar from '../../layout/UserSideBar'
import history from '../../history'

export default class ProfilePage extends Component {
  
  componentDidMount(){
    let role = localStorage.getItem('role')
    if (role !== 'member') {
      history.push('/log-in')
    }
    window.scrollTo(0, 0);
    document.title = "RelaOne | Profile";
  }
  
  render() {
    return (
      <div>
        <Container>
           <Header/>
           <Row>
            <Col sm="12" md="4">
              <ProfileBadge></ProfileBadge>
              <Navbar></Navbar>
            </Col>
            <Col sm="12" md="8">
                <ProfileDetail/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
