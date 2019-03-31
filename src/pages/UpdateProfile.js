import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import '../assets/css/_style.scss';
import SideBar from '../layout/SideNavBar'
import Header from '../layout/Header'
import ProfileBadge from '../layout/ProfileBadge'
import FormUpdateProfile from '../components/FormUpdateProfile'
import SideNavBar from '../layout/SideNavBar';

export default class UpdateProfile extends Component {

  ComponentDidMount = (
    document.title = "Users - Update Profile"
  )

  render() {
    return (
      <div className="update-profile">
         <Container>
         <Row>
            <Header/>
          </Row>
          <Row>
            <Col sm="12" md="4">
              <ProfileBadge></ProfileBadge>
              <SideNavBar></SideNavBar>
            </Col>
            <Col sm="12" md="8">
              <FormUpdateProfile/>
            </Col>
          </Row>
         </Container>
      </div>
    )
  }
}
