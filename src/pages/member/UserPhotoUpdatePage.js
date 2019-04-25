import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import '../../assets/css/_style.scss';
import Header from '../../layout/Header'
import UserProfileBadge from '../../layout/UserProfileBadge'
import FormUpdatePhoto from '../../components/member/UserPhotoUpdate'
import UserSideBar from '../../layout/UserSideBar';
import history from '../../history'
export default class UpdateProfile extends Component {

  componentDidMount(){
    let role = localStorage.getItem('role')
    if (role !== 'member') {
      history.push('/log-in')
    }
    window.scrollTo(0, 0);
    document.title = "RelaOne | Update Photo";
  }

  render() {
    return (
      <div className="update-profile">
         <Container>
         <Row>
            <Header/>
          </Row>
          <Row>
            <Col sm="12" md="4">
              <UserProfileBadge></UserProfileBadge>
              <UserSideBar></UserSideBar>
            </Col>
            <Col sm="12" md="8">
              <FormUpdatePhoto/>
            </Col>
          </Row>
         </Container>
      </div>
    )
  }
}
