import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../assets/css/_style.scss';
import ProfileBadge from '../layout/ProfileBadge';
import OrganizationSideBar from '../layout/OrganizationSideBar';
import Header from '../layout/Header';
import ArticleDetailOrg from '../components/ArticleDetailOrg';
import history from '../history'

class ArticleDetailOrgPage extends Component {

  componentDidMount(){
    let role = localStorage.getItem('role')
    if (role !== 'organization') {
      history.push('/login-org')
    }
    window.scrollTo(0, 0);
    document.title = "Article Detail";
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
              <ArticleDetailOrg/>
            </Col>
          </Row>
        </Container>      
      </div>
    )
  }
}

export default ArticleDetailOrgPage;

