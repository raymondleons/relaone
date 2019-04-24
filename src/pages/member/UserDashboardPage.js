import React, { Component } from 'react';
import {Row, Col, Container} from 'reactstrap'
import '../../assets/css/_style2.scss';
import Header from '../../layout/Header'
import UserProfileBadge from '../../layout/UserProfileBadge'
import UserSideBar from '../../layout/UserSideBar'
import Articles from '../../components/member/UserDashboardArticle'
import Events from '../../components/member/UserDashboardEvent'
import history from '../../history'

export default class DashboardPage extends Component {

  componentDidMount(){
    let role = localStorage.getItem('role')
    if (role !== 'member') {
      history.push('/log-in')
    }
    window.scrollTo(0, 0);
    document.title = "RelaOne | Dashboard";
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
            <UserProfileBadge></UserProfileBadge>
            <UserSideBar />
          </Col>
          <Col sm="12" md="8">
          <Articles />
            <Events />
          </Col>
        </Row>
      </Container>      
    </div>
    )
  }
}
