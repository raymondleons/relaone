import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import FormOrganizationProfile from '../components/FormOrganizationProfile';
import '../assets/css/_style.scss';
import ProfileBadge from '../layout/ProfileBadge';
import Header from '../layout/Header';
import OrganizationSideBar from '../layout/OrganizationSideBar';
import history from '../history'

class UpdateOrganizationProfile extends Component {

  componentDidMount(){
    let role = localStorage.getItem('role')
    if (role !== 'organization') {
      history.push('/login-org')
    }
    window.scrollTo(0, 0);
    document.title = "Update Profile";
  }

  render() {
    return (
      <div className="update-organization-profile">
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
              <FormOrganizationProfile/>  
            </Col>
          </Row>
        </Container>      
      </div>
    )
  }
}

export default UpdateOrganizationProfile;

