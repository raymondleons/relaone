import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../assets/css/_style.scss';
import ProfileBadge from '../layout/ProfileBadge';
import Header from '../layout/Header';
import CreateEvent from '../components/CreateEvent';
import OrganizationSideBar from '../layout/OrganizationSideBar';
import history from '../history'

class UpdateOrganizationProfile extends Component {

  componentDidMount(){
    let role = localStorage.getItem('role')
    if (role !== 'organization') {
      history.push('/login-org')
    }
    window.scrollTo(0, 0);
    document.title = "Create Event";
  }

  render() {
    return (
      <div className="create-event">
        <Container>
          <Row>
            <Header/>
          </Row>
          <Row>
            <Col sm="12" md="4">
              <ProfileBadge></ProfileBadge>
              <OrganizationSideBar/>
            </Col>
            <Col sm="12" md="8">
                <CreateEvent/>
            </Col>
          </Row>
        </Container>      
      </div>
    )
  }
}

export default UpdateOrganizationProfile;

