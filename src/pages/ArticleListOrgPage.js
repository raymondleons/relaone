import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../assets/css/_style.scss';
import ProfileBadge from '../layout/ProfileBadge';
import Header from '../layout/Header';
import ArticleListOrg from '../components/ArticleListOrg';
import OrganizationSideBar from '../layout/OrganizationSideBar';
import history from '../history'

class ArticleListOrgPage extends Component {

  componentDidMount(){
    let role = localStorage.getItem('role')
    if (role !== 'organization') {
      history.push('/login-org')
    }
    window.scrollTo(0, 0);
    document.title = "Article";
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
              <ProfileBadge/>
              <OrganizationSideBar/>
            </Col>
            <Col sm="12" md="8">
              <ArticleListOrg/>
            </Col>
          </Row>
        </Container>      
      </div>
    )
  }
}

export default ArticleListOrgPage;

