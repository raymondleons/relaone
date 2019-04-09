import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../assets/css/_style.scss';
import UserProfileBadge from '../layout/UserProfileBadge';
import UserSideBar from '../layout/UserSideBar';
import Header from '../layout/Header';
import ArticleDetail from '../components/ArticleDetail';

class ArticleDetailPage extends Component {
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
              <UserSideBar/>
            </Col>
            <Col sm="12" md="8">
              <ArticleDetail/>
            </Col>
          </Row>
        </Container>      
      </div>
    )
  }
}

export default ArticleDetailPage;

